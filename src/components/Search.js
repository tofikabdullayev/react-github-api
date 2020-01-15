import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

const Search = () => {
  const { show } = useContext(AlertContext);
  const onSubmit = event => {
    if (event.key === "Enter") {
      show("success", "test");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name.."
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;
