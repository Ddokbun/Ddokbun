// import { useRouter } from "next/router";
import React, { useRef } from "react";
import {
  CancelButton,
  Register,
  SubmitButton,
} from "../../../../common/Button";
import { Input, SearchInput } from "../../../../common/Input";
import { Wrapper } from "./styles";

const AddForm = () => {
  // const router = useRouter();
  const inputValues: React.MutableRefObject<Register> = useRef({
    potSerial: "",
    plantNickname: "",
    waterSupply: "",
    plantSeq: "",
  });

  const saveInput = (value: string, identifier: string) => {
    switch (identifier) {
      case "potSerial":
        inputValues.current.potSerial = value;
        break;
      case "plantNickname":
        inputValues.current.plantNickname = value;
        break;
      case "waterSupply":
        inputValues.current.waterSupply = value;
        break;
      case "plantSeq":
        inputValues.current.plantSeq = value;
      default:
        break;
    }
  };

  const onRegisterHandler = (): void => {
    if (!inputValues.current.plantNickname) {
      //닉네임 확인
    } else if (!inputValues.current.potSerial) {
      // 씨리얼 넘버 확인
    } else if (!inputValues.current.waterSupply) {
      // 물준날 확인
    }

    console.log(inputValues.current);

    // axios
    // fetchPotRegister(inputValues.current)
    // if (res.status === 201) {
    //   router.push(`/manage/${res.potSeq}`)
    // }
  };

  return (
    <Wrapper>
      <div className="grid">
        <SearchInput placeholder="식물종 검색" />
        <Input
          saveInput={saveInput}
          label="Serial Number"
          placeholder=" Input"
          type="text"
          identifier="potSerial"
        />
        <Input
          saveInput={saveInput}
          label="식물 이름"
          placeholder=" Input"
          type="text"
          identifier="plantNickname"
        />
        <Input
          saveInput={saveInput}
          label="마지막 물준날"
          placeholder=" Input"
          type="text"
          identifier="waterSupply"
        />
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
