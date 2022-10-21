import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

function AlertErrors() {
  const errors = useSelector((state) => state.errorReducer);

  return (
    <div>
      {errors.map((el) => {
        return (
          <Alert variant="danger" key={el.id}>
            <Alert.Heading>{el && el.msg}</Alert.Heading>
          </Alert>
        );
      })}
    </div>
  );
}

export default AlertErrors;
