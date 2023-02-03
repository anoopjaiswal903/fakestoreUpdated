import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ProductSlice";

import {
  Loading,
  InlineNotification,
  Search,
  Modal,
  Tile,
} from "@carbon/react";
import "./product.scss";
import { addToCart } from "./cartSlice";

function ProductView() {
  const product = useSelector((state) => state.product);
  console.log(product);
  const [search, setSearch] = useState("");

  const [selectedItem, setSelectedItem] = useState([]);

  const [showModal, setShowModal] = useState(false);

  console.log(selectedItem);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  //===============================

  const cartDispatch = useDispatch();

  const AddToCart = (selectedItem) => {
    console.log("add to cart is working");
    cartDispatch(addToCart(selectedItem));
  };

  const handleClick = () => {
    console.log("tiles is working");
    setShowModal(true);
  };

  //===============================
  return (
    <div>
      <Modal
        open={showModal}
        modalHeading="PRODUCT DETAILS"
        primaryButtonText="Add to cart"
        secondaryButtonText="Cancel"
        onRequestClose={() => setShowModal(false)}
        onRequestSubmit={() => AddToCart(selectedItem)}
      >
        <div>
          <div className="modals">
            <img
              style={{ width: 200 }}
              src={selectedItem.image}
              alt="not found"
            ></img>
          </div>
          <div>
            <strong>TITLE :</strong> {selectedItem.title}
          </div>
          <div>
            <strong>PRICE :</strong> {selectedItem.price}{" "}
          </div>
          <div>
            <strong>DESCRIPTION :</strong> {selectedItem.description}
          </div>
        </div>
      </Modal>

      {product.loading && (
        <div>
          <Loading>Loading...</Loading>
        </div>
      )}

      {/* Search BAR */}
      {!product.loading && product.products.length ? (
        <div className="search">
          <div style={{ width: 500 }}>
            <Search
              labelText="Search Here now"
              type="text"
              placeholder="Search Here"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              size="md"
              playgroundWidth="200"
              className="search-box"
            />
          </div>
        </div>
      ) : null}

      {/* notification */}
      {!product.loading && product.error ? (
        <div className="notification">
          <InlineNotification closeOnEscape inline={false} size="md">
            ERROR : {product.error}
          </InlineNotification>
        </div>
      ) : null}

      {/* PRODUCTS */}
      {!product.loading && product.products.length ? (
        <div class="cds--grid cart-body">
          <div class="cds--row">
            {product.products
              .filter((items) => items.title.toLowerCase().includes(search))
              .map((item) => (
                <div class="cds--col items">
                  <Tile id="tile-1" onClick={handleClick}>
                    <div
                      onClick={() => {
                        setSelectedItem(item);
                      }}
                      className="clickable-tile"
                    >
                      <img class="img1" src={item.image} alt="NOT FOUND"></img>
                      <div>
                        <strong>TITLE : </strong> {item.title.substring(0, 14)}
                      </div>
                      <div>
                        <strong>DESCRIPTION :</strong>
                        {item.description.substring(0, 20)}
                      </div>
                      <div>
                        <strong>PRICE $ </strong> {item.price}
                      </div>
                    </div>
                  </Tile>
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductView;
