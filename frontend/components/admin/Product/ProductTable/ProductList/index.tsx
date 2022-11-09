import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from "../../../../../apis/admin";

export interface ProductArray {
  itemName: string;
  itemPrice: number;
  itemSeq: number;
  itemStock: number;
  createdTime: string;
}

const ProductList: React.FC<{ item: ProductArray }> = ({ item }) => {
  function click() {
    if (
      window.confirm(
        "삭제된 상품은 복구할 수 없습니다. 정말 상품을 삭제하시겠습니까?",
      )
    ) {
      deleteProduct(item.itemSeq);
      alert("상품 삭제가 완료되었습니다.");
      window.location.replace("/admin/product");
    } else {
      alert("상품 삭제가 취소되었습니다.");
    }
  }

  return (
    <>
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
            <button onClick={click}>
              <FontAwesomeIcon icon={faTrash} />
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

export default ProductList;
