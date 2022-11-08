export type OrderArray = {
  content: ListObjectItem[];
};
export interface ListObjectItem {
  itemEnName: string;
  itemImageUrl: string;
  itemLabels: string;
  itemName: string;
  itemPrice: number;
  itemSeq: number;
}
