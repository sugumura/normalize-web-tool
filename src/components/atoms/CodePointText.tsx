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
    for (let i = 0; i < text.length; i++) {
      codeUnits.push(text.charCodeAt(i).toString(16));
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
