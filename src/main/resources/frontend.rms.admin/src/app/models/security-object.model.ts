export interface SecurityObjectModel {
  username?: string;
  jwt?: string;
  authorities: string[];
  authenticated?: boolean;
  restaurantId?: string;
}
