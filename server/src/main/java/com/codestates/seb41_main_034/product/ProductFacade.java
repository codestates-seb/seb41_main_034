package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.common.storage.ImageStorageService;
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
import java.util.stream.Collectors;
import java.util.stream.Stream;

@AllArgsConstructor
@Service
public class ProductFacade {

    private final ProductService productService;

    private final ImageStorageService imageStorageService;

    private final JsonListHelper helper;

    public ProductDto createProduct(
            ProductPostDto postDto, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // 이미지 저장
        String imageUrls = Optional.ofNullable(images)
                .map(imageStorageService::store).map(helper::listToJson).orElse(null);
        String detailImageUrls = Optional.ofNullable(detailImages)
                .map(imageStorageService::store).map(helper::listToJson).orElse(null);

        // 상품 추가
        Product product = productService.createProduct(postDto, imageUrls, detailImageUrls);

        // DTO 변환 후 반환
        return product.toDto(helper);
    }

    public ProductDto readProduct(int productId) {
        // 상품 조회
        Product product = productService.readProduct(productId);

        return product.toDto(helper);
    }

    public PaginatedData<ProductDto> readProducts(ProductCategory category, String q, Pageable pageable) {
        // 카테고리 지정 여부에 따라 다르게 조회
        Page<Product> productPage = Optional.ofNullable(category)
                .map(_category -> Optional.ofNullable(q)
                        .map(_q -> productService.readProducts(_category, _q, pageable))
                        .orElse(productService.readProducts(_category, pageable)))
                .orElse(Optional.ofNullable(q)
                        .map(_q -> productService.readProducts(_q, pageable))
                        .orElse(productService.readProducts(pageable)));

        return PaginatedData.of(productPage.map(product -> product.toDto(helper)));
    }

    public ProductDto updateProduct(
            int productId, ProductPatchDto patchDto, List<MultipartFile> images, List<MultipartFile> detailImages) {
        // 상품 조회, 존재하는 지 확인
        Product product = productService.readProduct(productId);

        // 이미지 삭제
        Optional<ProductPatchDto> optionalPatchDto = Optional.ofNullable(patchDto);
        List<String> imageUrlList = helper.jsonToList(product.getImageUrls());
        List<String> detailImageUrlList = helper.jsonToList(product.getDetailImageUrls());
        List<String> newImageUrlList = optionalPatchDto.map(ProductPatchDto::getDeleteImage)
                .map(deleteImage -> imageStorageService.delete(imageUrlList, deleteImage))
                .orElse(imageUrlList);
        List<String> newDetailImageUrlList = optionalPatchDto.map(ProductPatchDto::getDeleteDetailImage)
                .map(deleteImage -> imageStorageService.delete(detailImageUrlList, deleteImage))
                .orElse(detailImageUrlList);

        // 이미지 추가 및 List -> JSON String 변환
        String imageUrls = Optional.ofNullable(images).map(imageStorageService::store)
                .map(urlList ->
                        Stream.concat(newImageUrlList.stream(), urlList.stream()).collect(Collectors.toList()))
                .map(helper::listToJson).orElse(helper.listToJson(newImageUrlList));
        String detailImageUrls = Optional.ofNullable(detailImages).map(imageStorageService::store)
                .map(urlList ->
                        Stream.concat(newDetailImageUrlList.stream(), urlList.stream()).collect(Collectors.toList()))
                .map(helper::listToJson).orElse(helper.listToJson(newDetailImageUrlList));

        // 상품 수정
        Product updatedProduct = productService.updateProduct(productId, patchDto, imageUrls, detailImageUrls);

        // DTO로 변환 후 반환
        return updatedProduct.toDto(helper);
    }

}
