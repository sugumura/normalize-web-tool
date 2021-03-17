import * as React from 'react'
import { useCallback, useState } from 'react'
import MainLayout from "@layouts/MainLayout";
import { Box, Checkbox, Table, TableCaption, Tbody, Td, Textarea, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import { useNormalizeText } from "@hooks/useNormalizeText";
import CodePointText from '@atoms/CodePointText';
import CopyButton from "@atoms/CopyButton";

const AppPage = () => {
  const toast = useToast()
  const [showCodePoint, setShowCodePoint] = useState<boolean>(false)
  const [text, setText] = useState<string>("")
  const [nfcText] = useNormalizeText(text, "NFC")
  const [nfdText] = useNormalizeText(text, "NFD")
  const [nfkcText] = useNormalizeText(text, "NFKC")
  const [nfkdText] = useNormalizeText(text, "NFKD")

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    setText(e.target.value)
  }

  const onCopy = useCallback(() => {
    toast({
      title: "Copied",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }, [])

  const onShowCharCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      setShowCodePoint(e.target.checked)
    }
  }, [])

  return (
    <MainLayout title="">
      <Box>
        <Textarea
          placeholder="Please input text..."
          value={text}
          onChange={onChange}
        />
        <Checkbox
          onChange={onShowCharCode}
        >
          Show CodePoint
        </Checkbox>
      </Box>


      <Table variant="striped">
        <TableCaption>Normalization Result</TableCaption>
        <Thead>
          <Tr>
            <Th>Normalization Form</Th>
            <Th>Result</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>NFC</Td>
            <Td whiteSpace="pre-wrap">
              {nfcText}
            </Td>
            <Td>
              <CopyButton text={nfcText} onCopy={onCopy}/>
            </Td>
          </Tr>
          <Tr>
            <Td>NFD</Td>
            <Td whiteSpace="pre-wrap">
              {nfdText}
            </Td>
            <Td>
              <CopyButton text={nfdText} onCopy={onCopy}/>
            </Td>
          </Tr>
          <Tr>
            <Td>NFKC</Td>
            <Td whiteSpace="pre-wrap">
              {nfkcText}
            </Td>
            <Td>
              <CopyButton text={nfkcText} onCopy={onCopy}/>
            </Td>
          </Tr>
          <Tr>
            <Td>NFKD</Td>
            <Td whiteSpace="pre-wrap">
              {nfkdText}
            </Td>
            <Td>
              <CopyButton text={nfkdText} onCopy={onCopy}/>
            </Td>
          </Tr>

          {showCodePoint && (
            <>
              <Tr>
                <Td>Input Text</Td>
                <Td>
                  <CodePointText text={text} />
                </Td>
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td>NFC(Code Point)</Td>
                <Td>
                  <CodePointText text={nfcText} />
                </Td>
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td>NFD(Code Point)</Td>
                <Td>
                  <CodePointText text={nfdText} />
                </Td>
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td>NFKC(Code Point)</Td>
                <Td>
                  <CodePointText text={nfkcText} />
                </Td>
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td>NFKD(Code Point)</Td>
                <Td>
                  <CodePointText text={nfkdText} />
                </Td>
                <Td>
                </Td>
              </Tr>
            </>
          )}
        </Tbody>
      </Table>

    </MainLayout>
  )
}

export default AppPage
