import Image, { StaticImageData } from "next/image";
import React from "react";
import { BasicInput, DateInputStyle, SearchInputWrapper } from "./styles";
import search from "../../assets/icon/search.png";
import { useRouter } from "next/router";
import DatePick from "../DatePick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
  // const [startDate, setStartDate] = useState(new Date());

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
  setSearchInput: React.Dispatch<React.SetStateAction<string>> | null;
  value: string | undefined;
  path?: string;
}> = ({ placeholder, disabled, setSearchInput, value, path }) => {
  const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  const onShowSearchHandler = () => {
    router.push({ pathname: "/manage/add/search", query: { path } });
  };

  const onInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    //
    console.log(event.target.value);
    if (setSearchInput) {
      setSearchInput(event.target.value);
    }

    // startTransition(() => {
    //   // 저장set
    //   if (setSearchInput) {
    //   }
    // });
  };

  return (
    <SearchInputWrapper onClick={onShowSearchHandler}>
      <div className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      </div>
      <input
        disabled={disabled}
        className={"input-search"}
        placeholder={placeholder}
        type="text"
        onChange={onInputChangeHandler}
        value={value}
      />
    </SearchInputWrapper>
  );
};

export const DateInput: React.FC<{
  label: string;
  image: StaticImageData;
  saveInput: (value: string | Date, identifier: string) => void;
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
