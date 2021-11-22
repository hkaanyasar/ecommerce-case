import {ProductGroupModel} from "./product-group.model";

export class ProductModel {
  _id: string;
  name: string;
  createdTime: Date;
  productGroupId: string;
  productGroup: ProductGroupModel;
}
