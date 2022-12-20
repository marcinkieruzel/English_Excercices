import React, { forwardRef, useRef } from "react";

const Parent: React.FC = (): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Child ref={ref} />
      <button
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
      >
        Focus my child
      </button>
    </div>
  );
};

const M = (_, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
};

const Child = forwardRef<HTMLInputElement>(M);

export default Parent;
