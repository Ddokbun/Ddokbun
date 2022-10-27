import Image from "next/image";
import React from "react";
import { BasicInput, SearchInputWrapper } from "./styles";
import search from "../../assets/icon/search.png";
import { useRouter } from "next/router";

export const Input: React.FC<{
  type: string;
  placeholder: string;
  label: string;
  saveInput: (value: string, identifier: string) => void;
  identifier: string;
}> = ({ type, placeholder, label, saveInput, identifier }) => {
  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveInput(event.target.value, identifier);
  };

  return (
    <BasicInput>
      <label className="label-basic">
        {label}
        <input
          onChange={onInputChangeHandler}
          className="input-basic"
          type={type}
          placeholder={placeholder}
        />
      </label>
    </BasicInput>
  );
};

export const SearchInput: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  const router = useRouter();
  const onShowSearchHandler = () => {
    router.push('/search')
  };

  return (
    <SearchInputWrapper onClick={onShowSearchHandler}>
      <div className="icon">
        <Image src={search} alt="search-icon" />
      </div>
      <input className="input-search" placeholder={placeholder} type="text" />
    </SearchInputWrapper>
  );
};
