import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function ToggleVisibility({ children }) {
  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}></button>
    </div>
  );
}
