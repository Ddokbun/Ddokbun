package com.harryporter.ddokbun.domain.cart.service;

import com.harryporter.ddokbun.domain.cart.entity.Cart;
import com.harryporter.ddokbun.domain.cart.entity.CartId;
import com.harryporter.ddokbun.domain.cart.repository.CartRepository;
import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.product.repository.ItemRepository;
import com.harryporter.ddokbun.domain.user.entity.User;
import com.harryporter.ddokbun.domain.user.repository.UserRepository;
import com.harryporter.ddokbun.exception.ErrorCode;
import com.harryporter.ddokbun.exception.GeneralException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Slf4j
public class CartServiceImpl implements  CartService{

    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;

    @Transactional
    @Override
    public int enrollCartItem(Long itemSeq, Long userSeq) {

        User user = userRepository.findById(userSeq).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"사용자를 찾을 수 없습니다.")
        );

        Item item = itemRepository.findById(itemSeq).orElseThrow(
                ()->new GeneralException(ErrorCode.NOT_FOUND,"아이템을 찾을 수 없습니다.")
        );
        log.info("장바구니 등록 사용자,아이템 변수 정상:: itemSeq : {}::userSeq :{}",itemSeq,userSeq);

        CartId cartId = new CartId();
        cartId.setItem(itemSeq);
        cartId.setUser(userSeq);

        Optional<Cart> cartOpt =  cartRepository.findById(cartId);

        if(cartOpt.isPresent()){
            //이미 사용자의 장바구니에 존재
            log.info("itemSeq : {}::userSeq :{} ::이미 등록된 목록",itemSeq,userSeq);
            throw new GeneralException(ErrorCode.DUPPLICATE_INPUT);
        }

        Cart cart = new Cart();
        cart.setItem(item);
        cart.setUser(user);
        cart.setQuantity(1);

        cartRepository.save(cart);


        return 1; //성공
    }

    @Transactional
    @Override
    public int deleteCartItem(Long itemSeq, Long userSeq) {

        CartId cartId = new CartId();

        cartId.setItem(itemSeq);
        cartId.setUser(userSeq);

        cartRepository.findById(cartId).orElseThrow(
                ()-> new GeneralException(ErrorCode.NOT_FOUND,"유저를 특정할 수 없습니다.")
        );

        cartRepository.deleteById(cartId);

        return 1;

    }
}
