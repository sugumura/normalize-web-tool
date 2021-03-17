import { NormalizeFormat } from "../types/NormalizeFormat";
import { useCallback, useEffect, useState } from "react";

export const useNormalizeText = (text: string, format: NormalizeFormat) => {
  const getNormalize = (text: string) => {
    return (text && text.length > 0) ? text.normalize(format) : ''
  }
  const normalize = getNormalize(text)
  const [normalizeText, setNormalizeText] = useState<string>(normalize)

  const update = useCallback((text: string) => {
    setNormalizeText(getNormalize(text))
  }, [format])

  useEffect(() => {
    setNormalizeText(getNormalize(text))
  }, [text, format])

  return [normalizeText, update] as const
}
