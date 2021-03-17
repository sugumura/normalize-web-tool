import React, { useMemo } from "react";

type Props = {
  text: string
}

const CodePointText: React.VFC<Props> = ({
  text
                                         }) => {

  const memo = useMemo(() => {
    if (!text || text.length === 0) return text

    const codeUnits = [];
    for (let c of text) {
      const codePoint = c.codePointAt(0)
      if (codePoint) {
        codeUnits.push(`0x${codePoint.toString(16)}`)
      }
    }
    return codeUnits;
  }, [text])

  return (
    <>
      {memo}
    </>
  );
};

export default CodePointText
