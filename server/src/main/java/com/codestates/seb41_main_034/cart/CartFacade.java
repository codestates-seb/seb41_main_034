package com.codestates.seb41_main_034.cart;

import com.codestates.seb41_main_034.cart.dto.CartItemDto;
import com.codestates.seb41_main_034.cart.dto.CartItemPatchDto;
import com.codestates.seb41_main_034.cart.dto.CartItemPostDto;
import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.user.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class CartFacade {

    private final CartService cartService;

    private final ProductService productService;

    private final JsonListHelper helper;

    public CartItemDto addCartItem(CartItemPostDto postDto) {
        Product product = productService.readProduct(postDto.getProductId());

        CartItem cartItem = cartService.addCartItem(postDto);

        return cartItem.toDto(helper, product);
    }

    public CartItemDto readCartItem(long cartItemId) {
        CartItem cartItem = cartService.readCartItem(cartItemId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != cartItem.getUserId()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        Product product = productService.readProduct(cartItem.getProductId());

        return cartItem.toDto(helper, product);
    }

    public List<CartItemDto> readCart() {
        int userId = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();

        List<CartItem> cartItems = cartService.readCart(userId);

        Set<Integer> productIds = cartItems.stream().map(CartItem::getProductId).collect(Collectors.toSet());

        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        return cartItems.stream().map(cartItem ->
                cartItem.toDto(helper, productMap.get(cartItem.getProductId()))).collect(Collectors.toList());
    }

    public CartItemDto updateCartItem(long cartItemId, CartItemPatchDto patchDto) {
        CartItem cartItem = cartService.readCartItem(cartItemId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != cartItem.getUserId()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        return cartService.updateCartItem(cartItemId, patchDto.getQuantity()).toDto();
    }

    public void deleteCartItem(long cartItemId) {
        CartItem cartItem = cartService.readCartItem(cartItemId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != cartItem.getUserId()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        cartService.deleteCartItem(cartItemId);
    }
}
