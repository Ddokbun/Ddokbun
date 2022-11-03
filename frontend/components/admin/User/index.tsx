import { Wrapper } from "./styles";

const UserTable = () => {
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

            <tbody>
              <tr>
                <td>1</td>
                <td>김챌이</td>
                <td>kcr7812@naver.com</td>
                <td>2022-10-31 13:19:22</td>
                <td>관리자</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>2</td>
                <td>김챌이</td>
                <td>kcr7812@naver.com</td>
                <td>2022-10-31 13:19:22</td>
                <td>일반유저</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>3</td>
                <td>김챌이</td>
                <td>kcr7812@naver.com</td>
                <td>2022-10-31 13:19:22</td>
                <td>관리자</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>4</td>
                <td>김챌이</td>
                <td>kcr7812@naver.com</td>
                <td>2022-10-31 13:19:22</td>
                <td>관리자</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>5</td>
                <td>김챌이</td>
                <td>kcr7812@naver.com</td>
                <td>2022-10-31 13:19:22</td>
                <td>일반유저</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>6</td>
                <td>김챌이</td>
                <td>kcr7812@naver.com</td>
                <td>2022-10-31 13:19:22</td>
                <td>일반유저</td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
            </tbody>
          </table>
        </div>
      </>
    </Wrapper>
  );
};

export default UserTable;
