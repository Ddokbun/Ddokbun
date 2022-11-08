export interface ProductArray {
  orderName: string;
  orderUserName: string;
  orderStatus: string;
  orderPhone: string;
  orderAddress: string;
}

const OrderList: React.FC<{ item: ProductArray }> = ({ item }) => {
  function click() {
    if (
      window.confirm(
        "삭제된 상품은 복구할 수 없습니다. 정말 상품을 삭제하시겠습니까?",
      )
    ) {
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
          <td>{item.orderName}</td>
          <td>{item.orderUserName}</td>
          <td>
            <button onClick={click}>{item.orderStatus}</button>
          </td>
          <td>{item.orderPhone}</td>
          <td>{item.orderAddress}</td>
        </tr>
      </tbody>
      <div className="table-head">
        <hr />
      </div>
    </>
  );
};

export default OrderList;
