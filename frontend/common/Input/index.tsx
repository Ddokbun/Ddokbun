import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { BasicInput, DateInputStyle, SearchInputWrapper } from "./styles";
import search from "../../assets/icon/search.png";
import { useRouter } from "next/router";
import DatePick from "../DatePick";

export const Input: React.FC<{
  type: string;
  placeholder: string;
  label: string;
  saveInput: (value: string, identifier: string) => void;
  identifier: string;
  image: StaticImageData | null;
  value: string;
}> = ({ type, placeholder, label, saveInput, identifier, image, value }) => {
  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveInput(event.target.value, identifier);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <BasicInput>
      <label className="label-basic">
        {label}
        <input
          onChange={onInputChangeHandler}
          className="input-basic"
          type={type}
          placeholder={placeholder}
          disabled={image ? true : false}
          value={value}
        />
        {image && (
          <div className="icon">
            <Image src={image} alt="calander-icon" />
          </div>
        )}
      </label>
    </BasicInput>
  );
};

export const SearchInput: React.FC<{
  placeholder: string;
  disabled: boolean;
}> = ({ placeholder, disabled }) => {
  const router = useRouter();
  const onShowSearchHandler = () => {
    router.push("/manage/add/search");
  };

  return (
    <SearchInputWrapper onClick={onShowSearchHandler}>
      <div className={"icon"}>
        <Image src={search} alt="search-icon" />
      </div>
      <input
        disabled={disabled}
        className={"input-search"}
        placeholder={placeholder}
        type="text"
      />
    </SearchInputWrapper>
  );
};

export const DateInput: React.FC<{
  label: string;
  image: StaticImageData;
  saveInput: (value: string, identifier: string) => void;
}> = ({ label, image, saveInput }) => {
  return (
    <DateInputStyle>
      <label className="label-basic">{label}</label>
      {/* <div className="icon">
        <Image src={image} alt="calander-icon" />
      </div> */}
      <DatePick saveInput={saveInput} />
    </DateInputStyle>
  );
};
