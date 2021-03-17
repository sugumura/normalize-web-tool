import React, { useCallback } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

type Props = {
  text: string
  onCopy?: () => void
}

const CodeButton: React.VFC<Props> = ({
  text,
  onCopy,
}) => {
  const onClickCopy = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (onCopy) {
        onCopy()
      }
    }
  }, [text])

  return (
    <>
      <Button
        leftIcon={<CopyIcon/>}
        colorScheme="teal"
        variant="outline"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickCopy(e)}>
        Copy
      </Button>
    </>
  );
};

export default CodeButton
