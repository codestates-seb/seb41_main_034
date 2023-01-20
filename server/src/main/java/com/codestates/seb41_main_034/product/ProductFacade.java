package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.common.ImageStorageService;
import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.product.dto.ProductDto;
import com.codestates.seb41_main_034.product.dto.ProductPatchDto;
import com.codestates.seb41_main_034.product.dto.ProductPostDto;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.product.entity.ProductCategory;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ProductFacade {

    private final ProductService productService;

    private final ImageStorageService imageStorageService;

    public ProductDto createProduct(
            ProductPostDto postDto, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // 이미지 저장
        String imageUrls = imageStorageService.store(images);
        String detailImageUrls = imageStorageService.store(detailImages);

        // 상품 추가
        Product product = productService.createProduct(postDto, imageUrls, detailImageUrls);

        // DTO 변환 후 반환
        return product.toDto();
    }

    public ProductDto readProduct(int productId) {
        // 상품 조회
        Product product = productService.readProduct(productId);

        // TODO: 인증이 없거나 인증된 사용자가 관리자가 아닌 경우 DRAFT 상태인 상품은 PRODUCT_NOT_FOUND 처리해야 한다.

        return product.toDto();
    }

    public PaginatedData<ProductDto> readProducts(ProductCategory category, Pageable pageable) {
        // 카테고리 지정 여부에 따라 다르게 조회
        Page<Product> productPage = Optional.ofNullable(category)
                .map(productCategory -> productService.readProducts(productCategory, pageable))
                .orElse(productService.readProducts(pageable));

        return PaginatedData.of(productPage.map(Product::toDto));
    }

    public ProductDto updateProduct(
            int productId, ProductPatchDto patchDto, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // 상품 조회, 존재하는 지 확인
        Product product = productService.readProduct(productId);

        String imageDeleteMask =
                Optional.ofNullable(patchDto).map(ProductPatchDto::getImageDeleteMask).orElse(null);
        String detailImageDeleteMask =
                Optional.ofNullable(patchDto).map(ProductPatchDto::getDetailImageDeleteMask).orElse(null);

        // 이미지 수정
        String imageUrls = imageStorageService.update(product.getImageUrlList(), imageDeleteMask, images);
        String detailImageUrls =
                imageStorageService.update(product.getDetailImageUrlList(), detailImageDeleteMask, detailImages);

        // 상품 수정
        Product updatedProduct = productService.updateProduct(productId, patchDto, imageUrls, detailImageUrls);

        // DTO로 변환 후 반환
        return updatedProduct.toDto();
    }

}
