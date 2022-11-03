import type { NextPage } from "next";
import AdminNav from "../../components/admin/NavBar";
import CommerceTable from "../../components/admin/Commerce";
import UserTable from "../../components/admin/User";

const Admin: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <CommerceTable></CommerceTable>
      <UserTable></UserTable>
    </div>
  );
};

export default Admin;
