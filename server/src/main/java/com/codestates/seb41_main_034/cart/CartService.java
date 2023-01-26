package com.codestates.seb41_main_034.cart;

import com.codestates.seb41_main_034.cart.dto.CartItemPostDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.user.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
@Transactional
public class CartService {

    private final CartItemRepository cartItemRepository;

    public CartItem addCartItem(CartItemPostDto postDto) {
        int userId = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        int productId = postDto.getProductId();

        Optional<CartItem> optionalCartItem = cartItemRepository.findByUserIdAndProductId(userId, productId);

        CartItem cartItem;
        if (optionalCartItem.isPresent()) {
            cartItem = optionalCartItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + postDto.getQuantity());

            return cartItem;
        }
        cartItem = new CartItem(postDto.getProductId(), postDto.getQuantity());

        return cartItemRepository.save(cartItem);
    }

    @Transactional(readOnly = true)
    public CartItem readCartItem(long cartItemId) {
        return cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.CART_ITEM_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public List<CartItem> readCart(int userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public CartItem updateCartItem(long cartItemId, int quantity) {
        CartItem cartItem = readCartItem(cartItemId);
        cartItem.setQuantity(quantity);

        return cartItem;
    }

    public void deleteCartItem(long cartItemId) {
        CartItem cartItem = readCartItem(cartItemId);
        cartItem.setDeleted(true);
    }
}
