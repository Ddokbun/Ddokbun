import type { NextPage } from "next";
import InputBox from "../../../../components/admin/Commerce/Register/InputBox";
import AdminNav from "../../../../components/admin/NavBar";

const AdminRegister: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <InputBox></InputBox>
    </div>
  );
};

export default AdminRegister;
