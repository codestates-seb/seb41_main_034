package com.codestates.seb41_main_034.order.entity;

import com.codestates.seb41_main_034.common.jpa.DateAuditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class OrderProduct extends DateAuditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Order order;

    @Column(nullable = false)
    private int productId;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderProductStatus status = OrderProductStatus.AWAITING_PAYMENT;

    @Column(nullable = false)
    private boolean isDeleted = false;

    public OrderProduct(Order order, int productId, int quantity) {
        this.order = order;
        this.productId = productId;
        this.quantity = quantity;
    }

    public enum OrderProductStatus {
        // 결제 대기, 배송 준비 중, 배송 중, 배송 완료, 취소 대기, 취소 완료
        AWAITING_PAYMENT,
        PREPAIRING_FOR_DELIVERY,
        SHIPPING,
        DELIVERED,
        AWAITING_CANCELLATION,
        CANCELED
    }

}
