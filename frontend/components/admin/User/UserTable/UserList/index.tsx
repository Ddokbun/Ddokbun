import { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "사용자 권한을 변경하시겠습니까?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        fetchAdminRole(item.userSeq);
        Swal.fire("승인이 완료되었습니다.");
        window.location.replace("/admin/user");
      }
      if (result.isDismissed) {
        Swal.fire("취소되었습니다.");
      }
    });
    // if (window.confirm("사용자 권한을 변경하시겠습니까?")) {
    //   fetchAdminRole(item.userSeq);
    //   window.location.replace("/admin/user");
    // } else {
    //   Swal.fire("취소되었습니다.");
    // }
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
