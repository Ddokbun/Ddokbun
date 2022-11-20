import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from "../../../../../apis/admin";
import Swal from "sweetalert2";

export interface ProductArray {
  itemName: string;
  itemPrice: number;
  itemSeq: number;
  itemStock: number;
  createdTime: string;
}

const ProductList: React.FC<{ item: ProductArray }> = ({ item }) => {
  function click() {
    Swal.fire({
      title: "정말 상품을 삭제하시겠습니까?",
      text: "삭제된 상품은 복구할 수 없습니다.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        deleteProduct(item.itemSeq);
        Swal.fire("상품 삭제가 완료되었습니다.");
        window.location.replace("/admin/product");
      }
      if (result.isDismissed) {
        Swal.fire("취소되었습니다.");
      }
    });
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
