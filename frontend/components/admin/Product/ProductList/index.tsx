import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export interface ProductArray {
  itemName?: string;
  itemPrice?: number;
  itemSeq?: number;
  itemStock?: number;
  createdTime?: string;
}

const ProductList: React.FC<{ item: ProductArray }> = ({ item }) => {
  return (
    <tbody>
      <tr>
        <td>{item.itemSeq}</td>
        <td>{item.itemName}</td>
        <td>
          ₩{" "}
          {(item.itemPrice as number)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td>{item.itemStock}</td>
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
  );
};

export default ProductList;
