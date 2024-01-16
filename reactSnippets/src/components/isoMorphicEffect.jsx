import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const IsoMorphicEffect = () => {

    const codeString = `
    import { useEffect, useLayoutEffect } from "react";

    const useIsomorphicLayoutEffect =
      typeof window !== "undefined" ? useLayoutEffect : useEffect;

    export default useIsomorphicLayoutEffect;
  `;

    return (
        <SyntaxHighlighter language="jsx" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );

}

export default IsoMorphicEffect