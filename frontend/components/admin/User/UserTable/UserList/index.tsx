import { useEffect, useState } from "react";
import { fetchAdminRole } from "../../../../../apis/admin";

export interface UserArray {
  userNickname: string;
  userEmail: string;
  userSeq: number;
  userRole: string;
  createdTime: string;
}

const UserList: React.FC<{ item: UserArray }> = ({ item }) => {
  const [role, setRole] = useState();

  const data = fetchAdminRole(item.userSeq);
  function click() {
    data;
    console.log(role);
  }

  return (
    <tbody>
      <tr>
        <td>{item.userSeq}</td>
        <td>{item.userNickname}</td>
        <td>{item.userEmail}</td>
        <td>{item.createdTime}</td>
        <td>
          <button onClick={click}>{item.userRole}</button>
        </td>
      </tr>
      <div className="table-head">
        <hr />
      </div>
    </tbody>
  );
};

export default UserList;
