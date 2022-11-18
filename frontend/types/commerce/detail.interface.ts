export type plantDetail = {
  plantSeq: number;
  plantName: string;
  plantNeName: string;
  plantZRName: string;
  distbName: string;
  originPlace: string;
  growthHeight: number;
  growthWidth: number;
  smellDesc: string;
  toxctyInfo: string;
  manageLevel: string;
  growthTemperature: string;
  winterTemperature: string;
  growthHumid: string;
  specManageInfo: string;
  adviseInfo: string;
  functionInfo: string;
  manageRequire: string;
  plantPlace: string;
  waterCycle: number;
  waterInfo: string;
  lightType: number;
  lightInfo: string;
  minTemperature: number;
  maxTemperature: number;
  temperatureInfo: string;
  imagePath: string;
  recRate: string;
};

export type ItemObject = {
  itemSeq: number;
  itemName: string;
  itemEnName: string;
  itemPrice: number;
  itemInfo?: string;
  itemStock?: number;
  itemPicture: string;
  itemKind?: number;
  plant?: plantDetail;
};

export type DataObject = {
  data: ItemObject;
};
