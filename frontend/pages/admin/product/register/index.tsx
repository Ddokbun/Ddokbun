import type { NextPage } from "next";
import AdminNav from "../../../../components/admin/NavBar";
import InputBox from "../../../../components/admin/Product/ProductRegister";

const AdminRegister: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <InputBox></InputBox>
    </div>
  );
};

export default AdminRegister;
