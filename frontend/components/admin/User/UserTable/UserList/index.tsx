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
  function click() {
    alert("사용자 권한을 변경하시겠습니까?");
    const data = fetchAdminRole(item.userSeq);
    window.location.replace("/admin/user");
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
