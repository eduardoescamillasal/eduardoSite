// MathComponent.js
import React from "react";
import "katex/dist/katex.min.css";
import {InlineMath, BlockMath} from "react-katex";

const MathComponent = () => {
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
