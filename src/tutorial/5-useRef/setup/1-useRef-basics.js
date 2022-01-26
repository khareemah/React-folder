import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit" ref={divContainer}>
          submit
        </button>
      </form>
      <h1 ref={divContainer}> hello world</h1>
    </>
  );
};

export default UseRefBasics;
