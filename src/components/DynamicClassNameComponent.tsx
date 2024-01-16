import React, { useState } from "react";
import "./DynamicClassNameComponent.css";
type Props = {
  isPink?: boolean;
};
const DynamicClassNamePropComponent = ({ isPink }: Props) => {
  return (
    <div>
      <h3 className={`${isPink ? "isPink" : ""}`}>Hi there!</h3>
    </div>
  );
};

const DynamicClassNameStateComponent = () => {
  const [clicked, setIsClicked] = useState(false);
  return (
    <div>
      <button
        data-testid="click-me-button"
        onClick={() => setIsClicked(!clicked)}
        className={clicked ? "clicked" : "not-clicked"}
      >
        {clicked ? "🩷 Thanks for Clicking :) 🩷 " : "Click me!"}
      </button>
    </div>
  );
};

export { DynamicClassNamePropComponent, DynamicClassNameStateComponent };
