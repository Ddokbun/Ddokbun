import { useEffect, useState } from "react";
import { getAdminOrderList, getOrderCount } from "../../../apis/admin";
import CommerceTable from "./OrderTable";
import { Wrapper } from "./styles";

const AdminCommerce = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchAndSetList() {
      const data = await getAdminOrderList(page);
      setData(data.content);
    }
    fetchAndSetList();
  }, [page]);

  return (
    <Wrapper>
      <>
        {data && <CommerceTable data={data}></CommerceTable>}
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

export default AdminCommerce;
