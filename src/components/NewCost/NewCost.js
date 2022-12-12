import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostHandler = () => {
    setIsFormVisible(true);
  };

  const canselCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostHandler}>Add new cost</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCansel={canselCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
