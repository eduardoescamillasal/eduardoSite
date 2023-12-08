// MathComponent.js
import React,{useMemo} from "react";
import "katex/dist/katex.min.css";
import {InlineMath, BlockMath} from "react-katex";

const MathComponent = () => {
  const computeValue = (dep1, dep2) => {
    return dep1 * dep2
  };
  const dep1 = 3
  const dep2 = 4
  const memoizedValue = useMemo(() => computeValue(dep1, dep2), [dep1, dep2]);

  return (
    <div>
      <p>
        Inline Math: <InlineMath math='c = \sqrt{a^2 + b^2}' />
      </p>
      <p>
        Block Math: <BlockMath math='\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}' />
      </p>
    </div>
  );
};

export default MathComponent; // Ensure you have the default export
