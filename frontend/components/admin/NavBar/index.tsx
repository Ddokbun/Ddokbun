import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCartShopping,
  faSeedling,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AdminNav = () => {
  return (
    <Wrapper>
      <div className="admin-nav">
        <div className="title">
          <Link href={"/admin"}>Admin DashBoard</Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/user"}>
            <div className="flex">
              <FontAwesomeIcon icon={faUser} />
              <h2>User</h2>
            </div>
          </Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/product"}>
            <div className="flex">
              <FontAwesomeIcon icon={faSeedling} />
              <h2>Product</h2>
            </div>
          </Link>
        </div>
        <div className="link-list">
          <Link href={"/admin/commerce"}>
            <div className="flex">
              <FontAwesomeIcon icon={faTruck} />
              <h2>Commerce</h2>
            </div>
          </Link>
        </div>
        {/* <div className="link-list">
            <Link href={"/admin/product/register"}>Product Register</Link>
          </div> */}
      </div>
    </Wrapper>
  );
};
export default AdminNav;
