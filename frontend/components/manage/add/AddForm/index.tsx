// import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  CancelButton,
  Register,
  SubmitButton,
} from "../../../../common/Button";
import { DateInput, Input, SearchInput } from "../../../../common/Input";
import { Wrapper } from "./styles";
import calander from "../../../../assets/icon/calander.png";
import DatePick from "../../../../common/DatePick";

const AddForm = () => {
  // const router = useRouter();
  const inputValues: React.MutableRefObject<Register> = useRef({
    potSerial: "",
    plantNickname: "",
    waterSupply: "",
    plantSeq: "",
  });

  const [showCalander, setShowCalander] = useState(false);
  const leftPad = (value: number) => {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  };
  const changeDateFormat = (date: Date, delimiter = "-") => {
    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());

    return [year, month, day].join(delimiter);
  };

  const saveInput = (value: string | Date, identifier: string) => {
    setShowCalander(prev => !prev);

    if (typeof value === "string") {
      switch (identifier) {
        case "potSerial":
          inputValues.current.potSerial = value;
          break;
        case "plantNickname":
          inputValues.current.plantNickname = value;
          break;
        case "plantSeq":
          inputValues.current.plantSeq = value;
          break;
        default:
          break;
      }
    } else {
      const date = changeDateFormat(value);
      inputValues.current.waterSupply = date;
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

  const onShowCalanderHandler = () => {
    setShowCalander(prev => !prev);
  };

  useEffect(() => {
    const date = changeDateFormat(new Date());
    inputValues.current.waterSupply = date;
  }, []);

  return (
    <Wrapper>
      <div className="grid">
        <SearchInput placeholder="식물종 검색" disabled={false} />
        <Input
          saveInput={saveInput}
          label="Serial Number"
          placeholder=" Input"
          type="text"
          identifier="potSerial"
          image={null}
          value={inputValues.current.plantNickname}
        />
        <Input
          saveInput={saveInput}
          label="식물 이름"
          placeholder=" Input"
          type="text"
          identifier="plantNickname"
          image={null}
          value={inputValues.current.plantNickname}
        />
        <div onClick={onShowCalanderHandler} className="calander-container">
          {/* <Input
            saveInput={saveInput}
            label="마지막 물준날"
            placeholder={inputValues.current.waterSupply}
            type="text"
            identifier="waterSupply"
            image={calander}
            value={inputValues.current.waterSupply}
          /> */}
          <DateInput
            label="마지막 물 준날"
            image={calander}
            saveInput={saveInput}
          />
        </div>

        {/* {showCalander && (
            <DateInput
              saveInput={saveInput}
              onShowCalanderHandler={onShowCalanderHandler}
            />
          )} */}
        {/* <div className="calander-container"> */}
        {/* </div> */}
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
