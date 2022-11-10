import { GetServerSideProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { postKakaoPay, postOrderList } from "../../../../apis/commerce";
import CartList from "../../../../components/commerce/cart/CartList";
import OrderFormComponent from "../../../../components/commerce/order/OrderForm";
import PayFormComponent from "../../../../components/commerce/order/PayForm";
import { Wrapper } from "../../../../styles/commerce/order/order-form/styles";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import { useDispatch } from "react-redux";
import { StoreState, wrapper } from "../../../../store";
import { useSelect } from "@react-three/drei";
import { useSelector } from "react-redux";

const OrderForm: NextPage = () => {
  const [name, setName] = useState("");
  const [phoneHead, setPhoneHead] = useState("010");
  const [phoneBody, setPhoneBody] = useState("");
  const [phoneTail, setPhoneTail] = useState("");

  const [mailHead, setHeadEmail] = useState("");
  const [mailTail, setTailEmail] = useState("naver.com");
  const [post, setPost] = useState("");
  const [detailPost, setDetailPost] = useState("");
  const [additionalPost, setAdditionalPost] = useState("");

  const [payType, setPayType] = useState(0);

  const [flag, setFlag] = useState(0);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");
  const [postEroor, setPostError] = useState("");

  const [total_amount, setOrderTotal] = useState(0);
  const [item_name, setItemName] = useState("");
  const [item_seq, setItemSeq] = useState("");
  const orderItems = useSelector((state: StoreState) => state.cartList);

  useEffect(() => {
    const NewOrder = orderItems.filter(item => {
      if (item) return item;
    });
    if (NewOrder.length > 1) {
      setItemName(orderItems[0]?.itemName + ` 외 ${NewOrder.length - 1}개`);
    } else {
      setItemName(NewOrder[0].itemName);
    }

    NewOrder.map(item => {
      setItemSeq(val => val + `${item.itemSeq},`);
    });

    console.log(item_seq);
    console.log(item_name);
  }, []);
  const postOrder = async () => {
    console.log(item_seq);

    try {
      const res = await postOrderList(
        item_name,
        item_seq,
        mailHead + mailTail,
        payType,
        phoneHead + phoneBody + phoneTail,
        total_amount,
        post,
        detailPost,
        additionalPost,
        name,
      );

      setCookie("orderSeq", res.orderSeq);
      console.log(res.orderSeq);

      if (payType === 1) {
        alert("올 ㅋ");
        postKakaoPay(res.orderSeq, total_amount, item_name);
      } else {
        alert("네이버준비중");
      }
    } catch (error) {
      alert("주문실패");
    }
  };
  /** 폼 유효성 검사 */
  const onSubmitHandler = () => {
    setFlag(0);
    if (name) {
      setNameError("");
    } else {
      setNameError("이름을 입력해주세요");
      setFlag(1);
      alert("주문 정보를 확인해주세요");
      return;
    }

    if (phoneHead && phoneBody && phoneTail) {
      const fullPhone = phoneHead + phoneBody + phoneTail;
      console.log(fullPhone);

      setPhoneError("");
    } else {
      setPhoneError("전화번호를 입력해주세요");
      setFlag(1);
      alert("주문 정보를 확인해주세요");
      return;
    }

    if (mailHead && mailTail) {
      const fullEmail = mailHead + "@" + mailTail;
      console.log(fullEmail);
      setMailError("");
    } else {
      setMailError("올바른 이메일을 입력해주세요");
      setFlag(1);
      alert("주문 정보를 확인해주세요");
      return;
    }

    if (post && detailPost && additionalPost) {
      setPostError("");
    } else {
      setPostError("올바른 주소를 입력해주세요");
      setFlag(1);
      alert("주문 정보를 확인해주세요");
      return;
    }

    if (!payType) {
      alert("결제 수단을 선택해주세요");
    } else {
      try {
        postOrder();
      } catch {
        alert("뭔가 잘못됐습니다");
      }
    }
  };

  return (
    <Wrapper>
      <div className="row">
        <h1>Buy List</h1>
        <CartList setOrderTotal={setOrderTotal} />
      </div>
      <div className="row">
        <h1 className="sub-title">Order Information</h1>
        <OrderFormComponent
          name={name}
          phoneHead={phoneHead}
          phoneBody={phoneBody}
          phoneTail={phoneTail}
          mailHead={mailHead}
          mailTail={mailTail}
          post={post}
          detailPost={detailPost}
          additionalPost={additionalPost}
          nameError={nameError}
          phoneError={phoneError}
          mailError={mailError}
          postError={postEroor}
          setName={setName}
          setHeadEmail={setHeadEmail}
          setTailEmail={setTailEmail}
          setPost={setPost}
          setDetailPost={setDetailPost}
          setAdditionalPost={setAdditionalPost}
          setPhoneHead={setPhoneHead}
          setPhoneBody={setPhoneBody}
          setPhoneTail={setPhoneTail}
        />
      </div>
      <div className="row">
        <h1 className="sub-title">Payment Method</h1>
        <PayFormComponent setPayType={setPayType} />
      </div>
      <div className="row">
        <div className="button" onClick={onSubmitHandler}>
          PAYMENT
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;
