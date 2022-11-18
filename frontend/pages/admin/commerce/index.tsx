import type { NextPage } from "next";
import CommerceTable from "../../../components/admin/Commerce";
import AdminNav from "../../../components/admin/NavBar";

const AdminCommerce: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <CommerceTable></CommerceTable>
    </div>
  );
};

export default AdminCommerce;
