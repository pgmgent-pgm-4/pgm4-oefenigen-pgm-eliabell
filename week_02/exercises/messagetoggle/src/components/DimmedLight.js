import React, { useState } from "react";
import Light from "./Light";
import LightDimmer from "./LightDimmer";

export default function DimmedLight() {
  const [dimPercentage, setDimPercentage] = useState(100);
  return (
    <div>
      <Light dimPercentage={dimPercentage} />
      <LightDimmer
        dimPercentage={dimPercentage}
        setDimPercentage={setDimPercentage}
      />
    </div>
  );
}
