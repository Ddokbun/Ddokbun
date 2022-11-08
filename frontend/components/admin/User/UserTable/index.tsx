import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import UserList from "./UserList";

const UserTable = ({ data }) => {
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
            {data &&
              data.map(item => {
                return <UserList key={item.userSeq} item={item}></UserList>;
              })}
          </table>
        </div>
      </>
    </Wrapper>
  );
};

export default UserTable;
