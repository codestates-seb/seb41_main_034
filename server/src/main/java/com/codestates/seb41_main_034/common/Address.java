package com.codestates.seb41_main_034.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Address {

    @Column(name = "recipient", nullable = false)
    private String recipient;

    @Column(name = "address", nullable = false)
    private String address;

}
