import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "./itemsSlice";
import { selectItems, selectStatus, selectError } from "./itemsSlice";

const UpdateCartView = ({ id }) => {
  const item = useSelector((state) =>
    selectItems(state).find((i) => i.id === id)
  );
  const [formData, setFormData] = useState({ ...item });
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateItem(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... form inputs */}
      <button type="submit">Save</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
    </form>
  );
};

export default UpdateCartView;
