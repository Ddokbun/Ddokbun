export type PlantListArray = Plants[];

export interface Plants {
  plant: string[];
  plantSeq: number;
  plantName: string;
  plantNeName: string;
  plantZRName?: string;
  imagePath: string;
  disnName?: string;
}
