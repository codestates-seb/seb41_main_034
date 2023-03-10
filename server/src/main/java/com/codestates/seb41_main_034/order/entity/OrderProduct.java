package com.codestates.seb41_main_034.order.entity;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.order.dto.OrderProductDto;
import com.codestates.seb41_main_034.product.entity.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class OrderProduct extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Order order;

    @Column(nullable = false)
    private int productId;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderProductStatus status = OrderProductStatus.WAITING_FOR_PAYMENT;

    public OrderProduct(Order order, int productId, int price, int quantity) {
        this.order = order;
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
    }

    public OrderProductDto toDto(JsonListHelper helper, Product product) {
        List<String> urlList = helper.jsonToList(product.getImageUrls());
        String imageUrl = urlList.isEmpty() ? null : urlList.get(0);

        return new OrderProductDto(productId, product.getName(), imageUrl, price, quantity, status,
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public OrderProductDto toDto() {
        return new OrderProductDto(productId, null, null, price, quantity, status,
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

}
