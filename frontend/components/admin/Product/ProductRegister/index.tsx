import { Wrapper } from "./styles";

const InputBox = () => {
  return (
    <Wrapper>
      <div className="flex">
        <button className="register">등록하기</button>
      </div>
      <div className="title">
        <div className="input-img">
          <input type="file" alt="이미지를 첨부해주세요" />
        </div>
        <div>
          <div>
            <input
              className="input"
              type="text"
              alt="상품명"
              placeholder="상품명을 입력해주세요"
            />
          </div>
          <div>
            <input
              className="input"
              type="number"
              alt="가격"
              placeholder="가격을 입력해주세요"
            />
          </div>
          <div>
            <input
              className="input"
              type="number"
              alt="재고"
              placeholder="재고 개수를 입력해주세요"
            />
          </div>
        </div>
      </div>
      <div className="plant-input">
        <input type="text" alt="재고" placeholder="식물 종을 검색해주세요" />
      </div>
      <div className="product-content">
        <input type="text" alt="재고" placeholder="상품설명" />
      </div>
    </Wrapper>
  );
};

export default InputBox;
