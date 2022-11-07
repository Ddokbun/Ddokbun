export interface ProductArray {
  orderName: string;
  orderUserName: string;
  orderStatus: string;
  orderPhone: string;
  orderAddress: string;
}

const OrderList: React.FC<{ item: ProductArray }> = ({ item }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{item.orderName}</td>
          <td>{item.orderUserName}</td>
          <td>
            <button>{item.orderStatus}</button>
          </td>
          <td>{item.orderPhone}</td>
          <td>{item.orderAddress}</td>
        </tr>
        <div className="table-head">
          <hr />
        </div>
      </tbody>
    </>
  );
};

export default OrderList;
