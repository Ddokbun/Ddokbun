import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr;
  place-items: center;
  .img_wrap {
    padding: 0px 20px;
    width: 100%;
    max-width: 250px;
    position: relative;
    align-items: center;
  }

  .text_wrap {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    .title {
      font-size: 1.25rem;
    }
  }
`;
