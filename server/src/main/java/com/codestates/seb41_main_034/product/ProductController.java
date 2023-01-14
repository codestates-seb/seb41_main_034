package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.product.Product.ProductCategory;
import com.codestates.seb41_main_034.product.dto.ProductPatchDto;
import com.codestates.seb41_main_034.product.dto.ProductPostDto;
import com.codestates.seb41_main_034.product.dto.ProductResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@Validated
@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponseDto> postProduct(@Valid @RequestBody ProductPostDto postDto) {
        return new ResponseEntity<>(productService.createProduct(postDto), HttpStatus.CREATED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponseDto> getProduct(@Positive @PathVariable int productId) {
        return new ResponseEntity<>(productService.readProduct(productId), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<PaginatedResponseDto<ProductResponseDto>> getProducts(
            @RequestParam(required = false) ProductCategory category,
            @PageableDefault Pageable pageable
    ) {
        return new ResponseEntity<>(productService.readProducts(category, pageable), HttpStatus.OK);
    }

    @PatchMapping("/{productId}")
    public ResponseEntity<ProductResponseDto> patchProduct(@Positive @PathVariable int productId,
                                                           @Valid @RequestBody ProductPatchDto patchDto) {
        return new ResponseEntity<>(productService.updateProduct(productId, patchDto), HttpStatus.OK);
    }

}
