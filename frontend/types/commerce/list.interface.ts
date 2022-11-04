export interface ProductLists {
  data: ListArray;
}
export type ListArray = ListObjectItem[];

export type ListObjectItem = {
  itemSeq: number;
  itemName: string;
  itemEnName: string;
  itemPrice: number;
  itemImage: string;
  tags: string[];
};
