import type { NextPage } from "next";
import InputBox from "../../../../components/admin/Commerce/Register/InputBox";
import AdminNav from "../../../../components/admin/nav";

const Admin: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <InputBox></InputBox>
    </div>
  );
};

export default Admin;
