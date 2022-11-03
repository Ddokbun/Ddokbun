import type { NextPage } from "next";
import AdminMain from "../../components/admin/Main";
import AdminNav from "../../components/admin/NavBar";

const Admin: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <AdminMain></AdminMain>
      <AdminMain></AdminMain>
    </div>
  );
};

export default Admin;
