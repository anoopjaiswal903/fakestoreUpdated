import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@carbon/react";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "./cartSlice";
import "./cartView.scss";
import { Add, Subtract } from "@carbon/icons-react";
import Table from "@carbon/react/lib/components/DataTable/Table";

export const CartView = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };

  const header = ["Product", "Detail", "Prices", "Quantity", "Total"];

  return (
    //===================DATA=TABLES==============================
    <div>
      <Table className="Table1">
        <TableHead>
          <TableRow>
            {header.map((header) => (
              <TableHeader id={header.key}>{header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems?.map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell>
                <img
                  style={{ height: 180, width: 150 }}
                  src={cartItem.image}
                  alt="not found"
                />
              </TableCell>
              <TableCell>
                <h5>TITLE : {cartItem.title.substring(0, 20)}</h5>
                <h5>DESCRIPTION : {cartItem.description.substring(0, 20)}</h5>
                <Button
                  onClick={() => handleRemoveCart(cartItem)}
                  kind="secondary"
                >
                  REMOVE
                </Button>
              </TableCell>
              <TableCell>{cartItem.price}</TableCell>
              <TableCell>
                <Button
                  renderIcon={Subtract}
                  hasIconOnly
                  iconDescription="Icon Description"
                  onClick={() => handleDecrease(cartItem)}
                  kind="secondary"
                  class="cds--popover"
                  className="btn"
                >
                  -
                </Button>
                {cartItem.cartQuantity}
                <Button
                  renderIcon={Add}
                  hasIconOnly
                  onClick={() => handleIncreaseQuantity(cartItem)}
                  kind="secondary"
                  class="cds--popover"
                  className="btn"
                ></Button>
              </TableCell>
              <TableCell>
                {parseFloat(cartItem.price * cartItem.cartQuantity).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Button
          className="btn-clear-cart"
          kind="danger"
          onClick={(cartItem) => handleClearCart(cartItem)}
        >
          cleat cart
        </Button>
      </div>
      <div className="cartSummary">
        <div className="cart-checkout">
          <div className="subtotal">
            <span>
              <h3>subtotal</h3>
            </span>
            <span className="amount">
              <h3>$ {parseFloat(cart.cartTotalAmount).toFixed(2)}</h3>
            </span>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <Button className="btn">checkout</Button>
        </div>
      </div>
    </div>
    //============================================================
    // <div className="cart-container">
    //   <h2 className="shopping-cart">Shopping Cart</h2>
    //   {cart.cartItems.length === 0 ? (
    //     <div className="cart-empty">
    //       <p>no product in cart</p>
    //       <div className="start-shopping">
    //         <Link to="/">
    //           <span>Start Shopping</span>
    //         </Link>
    //       </div>
    //     </div>
    //   ) : (
    //     <div>
    //       <div>
    //         <div class="cds--grid">
    //           <div className="cds--row titles">
    //             <h3 className="cds--col product-title">Product</h3>
    //             <h3 className="cds--col price">Price</h3>
    //             <h3 className="cds--col quantity">Quantity</h3>
    //             <h3 className="cds--col total">Total</h3>
    //           </div>
    //         </div>
    //         <div className="cart-item cds--grid">
    //           <div className="">
    //             {cart.cartItems?.map((cartItem) => (
    //               <div className="cart-item cds--row" key={cartItem.id}>
    //                 <div className="cart-product">
    //                   <div className="cartImage  cds--col">
    //                     <img
    //                       style={{ height: 180, width: 180 }}
    //                       src={cartItem.image}
    //                       alt="not found"
    //                     />
    //                   </div>

    //                   <div className=" cds--col">
    //                     <h3>{cartItem.title.substring(0, 20)}</h3>
    //                     <h3>{cartItem.description.substring(0, 20)}</h3>
    //                     <Button
    //                       onClick={() => handleRemoveCart(cartItem)}
    //                       kind="secondary"
    //                     >
    //                       Remove
    //                     </Button>
    //                   </div>
    //                 </div>
    //                 <div className="price cds--col">{cartItem.price}</div>
    //                 <div className="quantity cds--col">
    //                   <div className="cds-row">
    //                     <Button
    //                       renderIcon={Add}
    //                       hasIconOnly
    //                       onClick={"onClick"}
    //                       kind="secondary"
    //                     >
    //                       -
    //                     </Button>
    //                     <div className="count">{cartItem.cartQuantity}</div>
    //                     <Button
    //                       renderIcon={Add}
    //                       hasIconOnly
    //                       onClick={"onClick"}
    //                       kind="secondary"
    //                     >
    //                       +
    //                     </Button>
    //                   </div>
    //                 </div>
    //                 <div className="cart-total-price cds--col">
    //                   {cartItem.price * cartItem.cartQuantity}
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="cartSummary">
    //         <div className="cart-summary">
    //           <Button className="clear-cart"> cleat cart</Button>
    //           <div className="cart-checkout">
    //             <div className="subtotal">
    //               <span>subtotal</span>{" "}
    //               <span className="amount">${cart.cartTotalAmount}</span>
    //             </div>
    //             <p>Taxes and shipping calculated at checkout</p>
    //             <Button>checkout</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};
