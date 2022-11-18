import type { NextPage } from "next";
import AdminNav from "../../../components/admin/NavBar";
import ProductTable from "../../../components/admin/Product";

const AdminProduct: NextPage = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <ProductTable></ProductTable>
    </div>
  );
};

export default AdminProduct;
