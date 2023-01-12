package com.codestates.seb41_main_034.product;

import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ProductService {

    public List<Product> getVerifiedProducts(Iterable<Integer> ids) {
        // TODO: 모든 id에 해당하는 제품이 존재하는지 확인 필요
        //       입력받은 id 개수와 productRepository.findAllById(ids) 결과의 개수를 비교하는 것도 괜찮을 것 같음
        return Streamable.of(ids)
                .stream()
                .distinct()
                .map(id -> {
                    Product product = new Product();
                    product.setId(id);
                    product.setPrice(id * 1000);

                    return product;
                })
                .collect(Collectors.toList());
    }

    public void updateProductsStock(Map<Integer, Integer> idDeltaMap) {
        // TODO: 입력받은 수량만큼 재고 변경
        idDeltaMap.forEach(this::updateProductStock);
    }

    public void updateProductStock(int id, int delta) {
        // TODO: 입력받은 수량만큼 재고 변경
    }
}
