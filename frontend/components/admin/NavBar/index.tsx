import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";

const AdminNav = () => {
  return (
    <Wrapper>
      <div className="admin-nav">
        <div className="title">
          <Link href={"/admin"}>Admin DashBoard</Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/commerce"}>Commerce</Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/user"}>User</Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/product"}>Product</Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/product/register"}>Product Register</Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default AdminNav;
