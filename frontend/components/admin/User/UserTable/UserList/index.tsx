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
    if (window.confirm("사용자 권한을 변경하시겠습니까?")) {
      fetchAdminRole(item.userSeq);
      window.location.replace("/admin/user");
    } else {
      alert("취소되었습니다.");
    }
  }

  return (
    <>
      <tbody>
        <tr>
          <td>{item.userSeq}</td>
          <td>{item.userNickname}</td>
          <td>{item.userEmail}</td>
          <td>{item.createdTime}</td>
          <td>
            <button className="button-role" onClick={click}>
              {item.userRole}
            </button>
          </td>
        </tr>
      </tbody>
      <div className="table-head">
        <hr />
      </div>
    </>
  );
};

export default UserList;
