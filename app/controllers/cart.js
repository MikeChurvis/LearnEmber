import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  //@service shoppingCart;
  @service('shopping-cart') cart;

  get subtotal() {
    return this.model.reduce((priceAcc, { price }) => priceAcc + price, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
