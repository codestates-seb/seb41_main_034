package com.codestates.seb41_main_034.order.entity;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

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

    @Column(nullable = false)
    private boolean isDeleted = false;

}
