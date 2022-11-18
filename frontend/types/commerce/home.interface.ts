export type MainPlant = ListObjectItem[];

export interface ListObjectItem {
  itemSeq: number;
  clickCount: number;
  itemName: string;
  itemEnName: string;
  itemPrice: number;
  imgPath: string;
  plantSeq: number;
}
