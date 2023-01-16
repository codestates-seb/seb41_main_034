package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.common.ImageStorageService;
import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.product.Product.ProductCategory;
import com.codestates.seb41_main_034.product.dto.ProductPatchDto;
import com.codestates.seb41_main_034.product.dto.ProductPostDto;
import com.codestates.seb41_main_034.product.dto.ProductResponseDto;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;

    private final ImageStorageService imageStorageService;

    private final ObjectMapper mapper;

    public ProductResponseDto createProduct(
            ProductPostDto postDto, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // 엔티티 객체 생성
        Product product = new Product(postDto.getName(), postDto.getPrice(), postDto.getStock());

        // 이미지가 요청에 포함된 경우 이미지 파일 저장 및 주소 입력
        saveImagesAndUrls(product, images, detailImages);

        // 선택 항목 처리
        Optional.ofNullable(postDto.getStatus()).ifPresent(product::setStatus);
        Optional.ofNullable(postDto.getCategory()).ifPresent(product::setCategory);

        // 엔티티 DB에 저장
        Product createdProduct = productRepository.save(product);

        // DTO로 매핑 후 반환
        return productToDto(createdProduct);
    }

    @Transactional(readOnly = true)
    public ProductResponseDto readProduct(int productId) {
        // DB에서 제품 조회, 없는 경우 예외 발생
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));

        // DTO로 매핑 후 반환
        return productToDto(product);
    }

    @Transactional(readOnly = true)
    public PaginatedResponseDto<ProductResponseDto> readProducts(ProductCategory category, Pageable pageable) {
        // 카테고리 지정 여부에 따라 다르게 조회
        Page<Product> productPage = Optional.ofNullable(category)
                .map(productCategory -> productRepository.findByCategory(productCategory, pageable))
                .orElse(productRepository.findAll(pageable));

        // DTO로 매핑 후 반환
        return new PaginatedResponseDto<>(
                productPage.get().map(this::productToDto).collect(Collectors.toList()),
                productPage.getNumber(),
                productPage.getSize(),
                productPage.getTotalPages(),
                productPage.getTotalElements()
        );
    }

    public ProductResponseDto updateProduct(
            int productId, ProductPatchDto patchDto, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // DB에서 제품 조회, 없는 경우 예외 발생
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));

        // 이미지가 요청에 포함된 경우 이미지 파일 저장 및 주소 입력
        saveImagesAndUrls(product, images, detailImages);

        // DTO에 입력된 값으로 변경
        Optional.ofNullable(patchDto.getName()).ifPresent(product::setName);
        Optional.ofNullable(patchDto.getPrice()).ifPresent(product::setPrice);
        Optional.ofNullable(patchDto.getStock()).ifPresent(product::setStock);
        Optional.ofNullable(patchDto.getStatus()).ifPresent(product::setStatus);
        Optional.ofNullable(patchDto.getCategory()).ifPresent(product::setCategory);

        // 수정된 부분을 DB에 저장한다.
        productRepository.flush();

        // DTO로 매핑 후 반환
        return productToDto(product);
    }

    @Transactional(readOnly = true)
    public List<ProductResponseDto> getOrderableProducts(Iterable<Integer> productIds) {
        // 입력받은 ID 수 집계 (중복 제외)
        long idCount = Streamable.of(productIds).stream().distinct().count();

        // 모든 ID에 해당하는 제품을 조회
        List<Product> products = productRepository.findAllById(productIds);

        // 조회된 제품 수가 ID 수보다 적으면 예외 발생
        if (products.stream().distinct().count() != idCount) {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND);
        }

        // 조회된 제품 중 판매중이 아닌 상품이 있는 경우 예외 발생
        products.forEach(product -> {
            if (product.getStatus() != Product.ProductStatus.ACTIVE) {
                throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_ORDERABLE);
            }
        });

        // DTO로 매핑 후 반환
        return products.stream().map(this::productToDto).collect(Collectors.toList());
    }

    public void updateProductStock(int productId, int delta) {
        // DB에서 제품 조회, 없는 경우 예외 발생
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));

        // 수정될 재고량 계산
        int updatedStock = product.getStock() + delta;

        // 재고가 부족한 경우 예외 발생
        if (updatedStock < 0) {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_ENOUGH_STOCK);
        }

        // 재고 수정
        product.setStock(updatedStock);
    }

    private void saveImagesAndUrls(Product product, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // 요청에 이미지 파일이 있는 경우 이미지 서버에 저장 및 이미지 주소 엔티티에 저장
        List<String> imageUrls = images.stream().map(imageStorageService::store)
                .filter(Objects::nonNull).collect(Collectors.toList());
        if (!imageUrls.isEmpty()) {
            try {
                product.setImageUrls(mapper.writeValueAsString(imageUrls));
            } catch (JsonProcessingException e) {
                throw new BusinessLogicException(ExceptionCode.PRODUCT_CANNOT_WRITE_IMAGE_URLS);
            }
        }
        List<String> detailImageUrls = detailImages.stream().map(imageStorageService::store)
                .filter(Objects::nonNull).collect(Collectors.toList());
        if (!detailImageUrls.isEmpty()) {
            try {
                product.setDetailImageUrls(mapper.writeValueAsString(detailImageUrls));
            } catch (JsonProcessingException e) {
                throw new BusinessLogicException(ExceptionCode.PRODUCT_CANNOT_WRITE_IMAGE_URLS);
            }
        }
    }

    private ProductResponseDto productToDto(Product product) {
        // Product -> DTO 매핑
        try {
            return new ProductResponseDto(
                    product.getId(),
                    product.getName(),
                    product.getPrice(),
                    product.getStock(),
                    product.getStatus(),
                    product.getCategory(),
                    mapper.readValue(product.getImageUrls(), new TypeReference<>() {}),
                    mapper.readValue(product.getDetailImageUrls(), new TypeReference<>() {}),
                    product.getCreatedBy(),
                    product.getModifiedBy(),
                    product.getCreatedAt(),
                    product.getModifiedAt()
            );
        } catch (JacksonException e) {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_CANNOT_READ_IMAGE_URLS);
        }
    }

}
