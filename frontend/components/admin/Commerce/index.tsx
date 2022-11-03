import { Wrapper } from "./styles";

const CommerceTable = () => {
  return (
    <Wrapper>
      <>
        <div className=" ">
          <h3 className="title">Commerce Table</h3>
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
                <td>김챌이</td>
                <td>
                  <button>배송중</button>
                </td>
                <td>010-2250-9036</td>
                <td>구미 임수동 수출대로</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>해바라기</td>
                <td>김채리</td>
                <td>
                  <button>배송중</button>
                </td>
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

export default CommerceTable;
