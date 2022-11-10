import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeWateringStatus } from "../../../apis/manage";
import Modal from "../../../common/Modal";
import { RootState } from "../../../store";
import { manageActions } from "../../../store/manage";
import { Wrapper } from "./styles";
import WaterBottle from "../../../assets/icon/waterbottle.png";

const AutoToggle = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { isAuto, waterCycle } = useSelector(
    (state: RootState) => state.manage,
  );
  const [isToggled, setIsToggled] = useState<boolean>(isAuto === "Y");

  const { potseq } = useRouter().query;

  const closeModal = () => {
    setModalOpen(false);
  };
  const changeWatering = async () => {
    if (typeof potseq === "string") {
      const res = await changeWateringStatus(potseq, waterCycle);
      setModalOpen(false);
      setIsToggled(prev => !prev);
    }
  };
  const onToggleChangeHandler = () => {
    if (isToggled) {
      changeWatering();
    } else {
      setModalOpen(true);
    }
  };

  const changeWaterCycle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      manageActions.setPlantInfo({
        waterCycle: event.target.value,
      }),
    );
  };
  const modalContents = () => {
    return (
      <>
        <Image
          width={"30%"}
          height={"30%"}
          src={WaterBottle}
          alt="물병 이미지입니다."
        />
        <input type="number" value={waterCycle} onChange={changeWaterCycle} />
      </>
    );
  };

  useLayoutEffect(() => {
    setIsToggled(isAuto === "Y");
  }, [isAuto]);

  return (
    <Wrapper toggle={isToggled}>
      {modalOpen && (
        <Modal
          onClose={closeModal}
          title="물 주기를 설정해주세요"
          onSubmitHandler={changeWatering}
        >
          {modalContents()}
        </Modal>
      )}
      <span className="toggle-status">
        {isToggled ? "자동 물주기" : "수동 물주기"}
      </span>
      <button className="toggle" onClick={onToggleChangeHandler}>
        <div className="circle"></div>
      </button>
    </Wrapper>
  );
};

export default AutoToggle;
