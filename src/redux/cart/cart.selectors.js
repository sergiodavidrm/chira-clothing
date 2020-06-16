import { createSelector } from "reselect";
import cartItem from "../../components/cart-item/cart-item.component";
const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acumulatedQuantity, cartItem) => acumulatedQuantity + cartItem.quantity,
      0
    )
);
