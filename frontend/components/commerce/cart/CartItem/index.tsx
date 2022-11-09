import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Temp from "../../../../assets/temp.jpg";
import Image from "next/image";
import { ListObjectItem } from "../../../../types/commerce/list.interface";
import { useDispatch } from "react-redux";
import { deleteCart, putCartItemCount } from "../../../../apis/commerce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteCartList } from "../../../../store/commerce";
import { useRouter } from "next/dist/client/router";

interface CartProps extends ListObjectItem {
  quantity: number;
  price: number;
  imageUrl: string;
}

const CartItem: React.FC<{
  item: ListObjectItem;
  setTotal: Dispatch<SetStateAction<number>>;
}> = ({ item, setTotal }) => {
  // 더미데이터
  const [count, setCount] = useState(1);
  const [nowPrice, setNowPrice] = useState((item.price as number) * count);
  const isCart = !useRouter().asPath.includes("order");

  const dispatch = useDispatch();

  useEffect(() => {
    setNowPrice((item.price as number) * (item.quantity as number));
  }, [item.price, item.quantity]);

  const onDeleteHandler = async (itemSeq: number) => {
    const data = await deleteCart(itemSeq);
    console.log(data);

    switch (data?.code) {
      case 200:
        dispatch(deleteCartList(itemSeq));
        alert("성공적으로 삭제됐습니다");
        return;

      default:
        alert("삭제에 실패했습니다");
    }
  };
  const onCountHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const handler = (event.target as HTMLElement).innerText;
    switch (handler) {
      case "+":
        await putCartItemCount(
          (item.quantity as number) + 1,
          item.itemSeq,
          dispatch,
        );

        break;

      case "-":
        if ((item.quantity as number) <= 1) {
          alert("삭제구현안됨 ㅋㄷ");
          return;
        }
        await putCartItemCount(
          (item.quantity as number) - 1,
          item.itemSeq,
          dispatch,
        );

        break;
    }
  };

  return (
    <Wrapper>
      <div className="grid-left">
        <Image src={item.imageUrl as string} layout="fill" objectFit="cover" />
      </div>
      <div className="grid-center">
        <h2>{item.itemName}</h2>
        {isCart && (
          <div className="count">
            <div onClick={onCountHandler} className="handler">
              +
            </div>
            <div className="now-cnt">{item.quantity}</div>
            <div onClick={onCountHandler} className="handler">
              -
            </div>
          </div>
        )}
      </div>
      <div className="grid-right">
        {isCart && (
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => onDeleteHandler(item.itemSeq)}
          />
        )}

        <h2>
          ₩{" "}
          {((item.price as number) * (item.quantity as number))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h2>
      </div>
    </Wrapper>
  );
};

export default CartItem;
