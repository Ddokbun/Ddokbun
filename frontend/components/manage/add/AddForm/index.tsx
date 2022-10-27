import { useRouter } from "next/router";
import React, { useRef } from "react";
import {
  CancelButton,
  Register,
  SubmitButton,
} from "../../../../common/Button";
import { Input, SearchInput } from "../../../../common/Input";
import { Wrapper } from "./styles";

const AddForm = () => {
  const router = useRouter();
  const inputValues: Register = useRef({
    potSerial: "",
    plantNickname: "",
    waterSupply: "",
    plantSeq: "",
  });

  const onRegisterHandler = (): // inputValues: Register,
  void => {
    // axios
    // fetchPotRegister(inputValues)
    // if (res.status === 201) {
    //   router.push(`/manage/${res.potSeq}`)
    // }
  };

  return (
    <Wrapper>
      <div className="grid">
        <SearchInput placeholder="식물종 검색" />
        <Input label="Serial Number" placeholder=" Input" type="text" />
        <Input label="식물 이름" placeholder=" Input" type="text" />
        <Input label="마지막 물준날" placeholder=" Input" type="text" />
      </div>
      <div className="button-container">
        <div className="submit-button-container">
          <SubmitButton onRegisterHandler={onRegisterHandler}>
            등록
          </SubmitButton>
        </div>
        <div className="cancel-button-container">
          <CancelButton>취소</CancelButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddForm;
