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
import { context } from "@react-three/fiber";
import { AppContext } from "next/dist/pages/_app";

interface Iprops {
  isMobile: boolean;
}

const OrderForm: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
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

    console.log(isMobile);
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
    if (name) {
      const reg = /[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
      if (name.length > 20 || reg.test(name) === true) {
        setNameError("특수문자를 제거해주세요");
        alert("주문 정보를 확인해주세요");
        return;
      } else {
        setNameError("");
      }
    } else {
      setNameError("이름을 입력해주세요");
      alert("주문 정보를 확인해주세요");
      return;
    }

    if (phoneHead && phoneBody && phoneTail) {
      const fullPhone = phoneHead + phoneBody + phoneTail;
      const reg = /^[0-9]+$/;
      if (fullPhone.length > 12 || reg.test(fullPhone) !== true) {
        setPhoneError("올바른 전화번호를 입력해주세요");
        alert("주문 정보를 확인해주세요");
        return;
      }

      setPhoneError("");
    } else {
      setPhoneError("전화번호를 입력해주세요");
      setFlag(1);
      alert("주문 정보를 확인해주세요");
      return;
    }

    if (mailHead && mailTail) {
      const fullEmail = mailHead + "@" + mailTail;
      const reg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (reg.test(fullEmail) === true) {
        setMailError("");
      } else {
        setMailError("올바른 이메일을 입력해주세요");

        alert("주문 정보를 확인해주세요");
        return;
      }
    } else {
      setMailError("올바른 이메일을 입력해주세요");

      alert("주문 정보를 확인해주세요");
      return;
    }

    if (post && detailPost && additionalPost) {
      setPostError("");
    } else {
      setPostError("상세 주소를 입력해주세요");
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
      <div className="contents">
        <div className="row">
          <h1>Buy List</h1>
          <CartList setOrderTotal={setOrderTotal} />
        </div>
      </div>
      <div className="background">
        <div className="pay-grid">
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
              isMobile={isMobile}
            />
          </div>
          <div className="row">
            <h1 className="sub-title">Payment Method</h1>
            <PayFormComponent setPayType={setPayType} />
            <div className="button" onClick={onSubmitHandler}>
              PAYMENT
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      isMobile: !(context.req.headers["user-agent"]?.indexOf("Mobi") === -1),
    },
  };
};
