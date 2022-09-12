import React, { forwardRef, useRef } from "react";

const Parent: React.FC = (): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Child ref={ref} />
      <button>
        Focus my child
      </button>
    </div>
  );
};

const Child = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

export default Parent;
