package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.common.response.Response;
import com.codestates.seb41_main_034.product.dto.ProductDto;
import com.codestates.seb41_main_034.product.dto.ProductPatchDto;
import com.codestates.seb41_main_034.product.dto.ProductPostDto;
import com.codestates.seb41_main_034.product.entity.ProductCategory;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@AllArgsConstructor
@RestController
@Validated
@RequestMapping("/api/v1/product")
public class ProductController {

    private final ProductFacade productFacade;

    @PostMapping
    public ResponseEntity<Response<ProductDto>> postProduct(
            @Valid @RequestPart("data-json") ProductPostDto postDto,
            @RequestPart("images") List<MultipartFile> images,
            @RequestPart("detail-images") List<MultipartFile> detailImages
    ) {
        return new ResponseEntity<>(
                Response.of(productFacade.createProduct(postDto, images, detailImages)), HttpStatus.CREATED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Response<ProductDto>> getProduct(@Positive @PathVariable int productId) {
        return new ResponseEntity<>(Response.of(productFacade.readProduct(productId)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Response<PaginatedData<ProductDto>>> getProducts(
            @RequestParam(required = false) ProductCategory category,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        return new ResponseEntity<>(Response.of(productFacade.readProducts(category, pageable)), HttpStatus.OK);
    }

    @PatchMapping("/{productId}")
    public ResponseEntity<Response<ProductDto>> patchProduct(
            @Positive @PathVariable int productId,
            @Valid @RequestPart("data-json") ProductPatchDto patchDto,
            @RequestPart("images") List<MultipartFile> images,
            @RequestPart("detail-images") List<MultipartFile> detailImages
    ) {
        return new ResponseEntity<>(
                Response.of(productFacade.updateProduct(productId, patchDto, images, detailImages)), HttpStatus.OK);
    }

}
