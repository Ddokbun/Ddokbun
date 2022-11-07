export interface UserArray {
  userNickname?: string;
  userEmail?: string;
  userSeq?: number;
  userRole?: string;
  createdTime?: string;
}

const UserList: React.FC<{ item: UserArray }> = ({ item }) => {
  return (
    <tbody>
      <tr>
        <td>{item.userSeq}</td>
        <td>{item.userNickname}</td>
        <td>{item.userEmail}</td>
        <td>{item.createdTime}</td>
        <td>
          <button>{item.userRole}</button>
        </td>
      </tr>
      <div className="table-head">
        <hr />
      </div>
    </tbody>
  );
};

export default UserList;
