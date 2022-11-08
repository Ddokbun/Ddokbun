import { getToken } from "firebase/messaging";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { getTokenFromFB } from "../../apis/firbase";
import icon from "../../assets/icon/call.svg";
const test: NextPage = () => {
  const sendMessage = () => {
    const title = "궁금해 약";
    const body = "약을 복용할 시간입니다!";
    const options = { body };

    const notif = new Notification(title, options);
  };
  useEffect(() => {
    async function getMessageToken() {
      await getTokenFromFB();
    }
    getMessageToken();
  }, []);

  const btnClickHandler = async () => {
    const result = await Notification.requestPermission();
    console.log(result);

    if (result === "granted") {
      sendMessage();
    }
  };

  return <button onClick={btnClickHandler}>알림 보내기</button>;
};

export default test;
