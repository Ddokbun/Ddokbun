import { useEffect, useState } from "react";
import { getAdminUserList } from "../../../apis/admin";
import { Wrapper } from "./styles";
import UserList from "./UserList";

const UserTable = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchAndSetUser() {
      const data = await getAdminUserList();
      setUser(data.content);
    }
    fetchAndSetUser();
  }, []);
  console.log(user);

  return (
    <Wrapper>
      <>
        <div className=" ">
          <h3 className="title">User Table</h3>
          <hr />
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="">Seq</th>
                <th className="">Name</th>
                <th className="">E-mail</th>
                <th className="">Created Time</th>
                <th className="">Role</th>
              </tr>
            </thead>
            <div className="table-head">
              <hr />
            </div>
            {user &&
              user.map(item => {
                return <UserList key={item.userSeq} item={item}></UserList>;
              })}
          </table>
        </div>
      </>
    </Wrapper>
  );
};

export default UserTable;
