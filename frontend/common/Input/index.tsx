import React from "react";
import { BasicInput, SearchInputWrapper } from "./styles";

export const Input: React.FC<{
  type: string;
  placeholder: string;
  label: string;
}> = ({ type, placeholder, label }) => {
  return (
    <BasicInput>
      <label className="label-basic">
        {label}
        <input className="input-basic" type={type} placeholder={placeholder} />
      </label>
    </BasicInput>
  );
};

export const SearchInput: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  return (
    <SearchInputWrapper>
      <input className="input-search" placeholder={placeholder} type="text" />
    </SearchInputWrapper>
  );
};
