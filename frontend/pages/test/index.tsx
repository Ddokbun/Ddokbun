import { NextPage } from "next";
import React, { useEffect } from "react";
const test: NextPage = () => {
  const sendMessage = () => {

  };

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
