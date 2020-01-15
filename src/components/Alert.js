import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) {
    return null;
  }

  return (
    <div
      className={`alert alert-${alert.type || "secondary"} alert-dismissible`}
      role="alert"
    >
      {alert.text}
      <button type="button" className="close" onClick={hide} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
