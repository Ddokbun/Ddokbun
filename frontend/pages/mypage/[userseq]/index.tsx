import { GetServerSideProps, NextPage } from "next";
import Swal from "sweetalert2";
import DeliveryTable from "../../../components/mypage/DeliveryTable";
import { ManageHomeAni } from "../../../styles/animations/animation";
import { Wrapper } from "../../../styles/mypage/[userseq]/styles";
import { checkAuthentication } from "../../../utils/protectedRouter";
import Manage from "../../manage/[userseq]";

export interface OrderItemTypes {
  itemSeqList: string;
  orderAddress: string;
  orderEmail: string;
  orderMethod: string;
  orderName: string;
  orderPhone: string;
  orderPrice: number;
  orderQuantity: number;
  orderReciver: string;
  orderSeq: number;
  orderStatus: string;
  orderTime: string;
  orderUserName: string;
  orderWaybillNumber: string;
  userSeq: number;
  itemlist: {
    itemEnName: string;
    itemName: string;
    itemPicture: string;
    itemPrice: number;
    itemSeq: number;
  }[];
}

const MyPage: NextPage = () => {
  return (
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <DeliveryTable />
      <Manage />
    </Wrapper>
  );
};

export default MyPage;

// export const getServerSideProps: GetServerSideProps = async ({
//   query,
//   req,
//   res,
// }) => {
//   const isAuthenticated = await checkAuthentication(query, req, res);

//   if (isAuthenticated) {
//     return {
//       props: {},
//     };
//   } else {
//     return {
//       redirect: {
//         destination: "/commerce",
//       },
//       props: {},
//     };
//   }
// };
