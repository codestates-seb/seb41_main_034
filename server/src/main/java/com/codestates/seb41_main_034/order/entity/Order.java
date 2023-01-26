package com.codestates.seb41_main_034.order.entity;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.order.dto.OrderDto;
import com.codestates.seb41_main_034.order.dto.OrderProductDto;
import com.codestates.seb41_main_034.product.entity.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER, mappedBy = "order")
    private List<OrderProduct> orderProducts;

    @Embedded
    private Address address;

    public OrderDto toDto(JsonListHelper helper, Map<Integer, Product> productMap) {
        List<OrderProductDto> orderProductDtos = orderProducts.stream()
                .map(orderProduct -> {
                    Product product = Optional.ofNullable(productMap)
                            .map(map -> map.get(orderProduct.getProductId())).orElse(null);
                    return orderProduct.toDto(helper, product);
                }).collect(Collectors.toList());

        return new OrderDto(id, orderProductDtos, address.getRecipient(), address.getAddress(),
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public OrderDto toDto(JsonListHelper helper) {
        return toDto(helper, null);
    }

}
