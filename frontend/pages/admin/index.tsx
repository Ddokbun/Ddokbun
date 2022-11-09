import type { NextPage } from "next";
import AdminNav from "../../components/admin/NavBar";
import CommerceTable from "../../components/admin/Commerce";
import UserTable from "../../components/admin/User";
import OrderTotal from "../../components/admin/DashBoard/Total";
import DashChart from "../../components/admin/DashBoard/DashChart";

const Admin: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <OrderTotal></OrderTotal>
      <DashChart></DashChart>
      {/* <CommerceTable></CommerceTable>
      <UserTable></UserTable> */}
    </div>
  );
};

export default Admin;
