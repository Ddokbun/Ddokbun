import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  CancelButton,
  RegisterType,
  SubmitButton,
} from "../../../../common/Button";
import { DateInput, Input, SearchInput } from "../../../../common/Input";
import { Wrapper } from "./styles";
import calander from "../../../../assets/icon/calander.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { fetchPlantData, fetchRegisterPot } from "../../../../apis/manage";
import PlantData from "../PlantData";
import { EleVar } from "../../../../styles/animations/animation";

export interface PlantDataType {
  growthHumid: string;
  lightType: number;
  temperatureRange: number;
  waterCycle: number;
}

const AddForm = () => {
  const router = useRouter();
  const plantSeq = useSelector((state: RootState) => state.manage.plantSeq);
  const name = useSelector((state: RootState) => state.manage.plantName);

  const inputValues: React.MutableRefObject<RegisterType> = useRef({
    potSerial: "",
    plantNickname: "",
    waterSupply: "",
    plantSeq: "",
  });
  const [plantData, setPlantData] = useState<PlantDataType>();
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

  const onRegisterHandler = async (): Promise<void> => {
    if (!inputValues.current.plantNickname) {
      //닉네임 확인
    } else if (!inputValues.current.potSerial) {
      // 씨리얼 넘버 확인
    } else if (!inputValues.current.waterSupply) {
      // 물준날 확인
    }

    console.log(inputValues.current);

    const res = await fetchRegisterPot(inputValues.current);
    if (res?.status === 201) {
      router.push(`/manage/${res.potSeq}`);
    } else {
      alert("다시 한번 확인해주세요.");
    }
  };

  const onShowCalanderHandler = () => {
    setShowCalander(prev => !prev);
  };

  const getPlantData = async (data: string) => {
    const res = await fetchPlantData(data);
    setPlantData(res.content);
    return res.content;
  };

  useEffect(() => {
    const date = changeDateFormat(new Date());
    inputValues.current.waterSupply = date;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    inputValues.current.plantSeq = plantSeq;
    if (inputValues.current.plantSeq) {
      getPlantData(inputValues.current.plantSeq);
    }
  }, [plantSeq]);

  return (
    <Wrapper variants={EleVar}>
      <div className="grid">
        <SearchInput
          setSearchInput={null}
          placeholder="식물종 검색"
          disabled={true}
          value={name}
        />
        <Input
          saveInput={saveInput}
          label="Serial Number"
          placeholder=" Input"
          type="text"
          identifier="potSerial"
          image={null}
          value={inputValues.current.potSerial}
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
          <DateInput
            label="마지막 물 준날"
            image={calander}
            saveInput={saveInput}
          />
        </div>
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
      {plantData && <PlantData data={plantData} />}
    </Wrapper>
  );
};

export default AddForm;
