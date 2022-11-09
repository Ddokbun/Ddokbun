import { Wrapper } from "./styles";
import ProductList from "./ProductTable/ProductList";
import { useEffect, useState } from "react";
import { getProductList } from "../../../apis/admin";
import ProductTable from "./ProductTable";

export interface OrderArray {
  index: number;
  item: string[];
}

const AdminProduct: React.FC = () => {
  const [list, setlist] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchAndSetList() {
      const data = await getProductList(page);
      setlist(data.content);
    }
    fetchAndSetList();
  }, [page]);

  return (
    <Wrapper>
      <>
        {list && <ProductTable data={list}></ProductTable>}
        <div className="button-wrapper">
          <div onClick={() => setPage(page - 1)} className="button">
            <button>Previous</button>
          </div>
          <div onClick={() => setPage(0)} className="button">
            <button>Reset</button>
          </div>
          <div onClick={() => setPage(page + 1)} className="button">
            <button>Next</button>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default AdminProduct;
