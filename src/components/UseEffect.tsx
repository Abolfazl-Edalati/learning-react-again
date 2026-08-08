import React, { useEffect, useRef } from "react";

const UseEffect = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        className="form-control m-2"
        style={{ width: "50%" }}
      />
    </>
  );
};

export default UseEffect;
