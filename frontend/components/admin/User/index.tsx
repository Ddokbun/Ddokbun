import { useEffect, useState } from "react";
import { getAdminUserList } from "../../../apis/admin";
import { Wrapper } from "./styles";
import UserTable from "./UserTable";

const AdminUser = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      const data = await getAdminUserList(page);
      setData(data.content);
    }
    fetchAndSetUser();
  }, [page]);

  return (
    <Wrapper>
      <>
        {data && <UserTable data={data}></UserTable>}
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

export default AdminUser;
