import { Wrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductTable = () => {
  return (
    <Wrapper>
      <>
        <div className=" ">
          <h3 className="title">Product Table</h3>
          <hr />
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="">Num</th>
                <th className="">Name</th>
                <th className="">Price</th>
                <th className="">Stock</th>
                <th className="">Del</th>
              </tr>
            </thead>
            <div className="table-head">
              <hr />
            </div>

            <tbody>
              <tr>
                <td>1</td>
                <td>스투키</td>
                <td>10,000</td>
                <td>20</td>
                <td>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>1</td>
                <td>스투키</td>
                <td>10,000</td>
                <td>20</td>
                <td>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>1</td>
                <td>스투키</td>
                <td>10,000</td>
                <td>20</td>
                <td>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <div className="table-head">
                <hr />
              </div>
              <tr>
                <td>1</td>
                <td>스투키</td>
                <td>10,000</td>
                <td>20</td>
                <td>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
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

export default ProductTable;
