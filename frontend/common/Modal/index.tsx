import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { CancelButton, SubmitButton } from "../Button";
import { Wrapper } from "./styles";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  onSubmitHandler?: () => void;
}

const Modal: FC<Props> = ({ onClose, children, title, onSubmitHandler }) => {
  const [isMounted, setIsMounted] = useState(false);

  console.log(isMounted);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modalContent = (
    <Wrapper>
      <section>
        <div></div>
        {title && <header>{title}</header>}
        <main>{children}</main>
        <footer>
          {onSubmitHandler && (
            <SubmitButton onRegisterHandler={onSubmitHandler}>
              자동물주기 설정
            </SubmitButton>
          )}
          <CancelButton onClick={onClose}>취소</CancelButton>
        </footer>
      </section>
    </Wrapper>
  );

  if (isMounted) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!,
    );
  } else {
    return null;
  }
};

export default Modal;
