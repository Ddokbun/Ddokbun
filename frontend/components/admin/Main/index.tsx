import { Wrapper } from "./styles";
const AdminMain = () => {
  return (
    <Wrapper>
      <>
        <div className=" ">
          <h3 className="title">Card Tables</h3>
          <hr />
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="">Product</th>
                <th className="">Name</th>
                <th className="">Status</th>
                <th className="">Phone</th>
                <th className="">Address</th>
              </tr>
            </thead>
            <div className="table-head">
              <hr />
            </div>

            <tbody>
              <tr>
                <td>해바라기</td>
                <td>김채리</td>
                <td>배송중</td>
                <td>010-2250-9036</td>
                <td>구미 임수동 수출대로</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>해바라기</td>
                <td>김채리</td>
                <td>배송중</td>
                <td>010-2250-9036</td>
                <td>구미 임수동 수출대로</td>
              </tr>
              <div className="table-head"></div>
            </tbody>
          </table>
        </div>
      </>
    </Wrapper>
  );
};

export default AdminMain;
