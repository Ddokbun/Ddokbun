import type { NextPage } from "next";
import AdminNav from "../../components/admin/NavBar";
import CommerceTable from "../../components/admin/Commerce";
import UserTable from "../../components/admin/User";
import OrderTotal from "../../components/admin/DashBoard/Total";
import DashChart from "../../components/admin/DashBoard/DashChart";
import { Wrapper } from "../../styles/admin/styles";

const Admin: NextPage = () => {
  return (
    <Wrapper>
      <AdminNav></AdminNav>
      <OrderTotal></OrderTotal>
      <DashChart></DashChart>
    </Wrapper>
  );
};

export default Admin;
