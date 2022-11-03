import type { NextPage } from "next";
import AdminNav from "../../../components/admin/NavBar";
import UserTable from "../../../components/admin/User";

const AdminUser: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <UserTable></UserTable>
    </div>
  );
};

export default AdminUser;
