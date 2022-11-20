import React from "react";
import Swal from "sweetalert2";

const Custom404NotFountPage = () => {
  return <div></div>;
};

export default Custom404NotFountPage;

export const getStaticProps = () => {
  return {
    redirect: {
      destination: "/",
    },
  };
};
