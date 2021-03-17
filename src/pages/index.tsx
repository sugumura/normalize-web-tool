import * as React from 'react'
import { useCallback, useState } from 'react'
import MainLayout from "@layouts/MainLayout";
import { Box, Button, Checkbox, Table, TableCaption, Tbody, Td, Textarea, Th, Thead, Tr } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { useNormalizeText } from "@hooks/useNormalizeText";
import CodePointText from '@atoms/CodePointText';

const AppPage = () => {

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

  const onCopy = useCallback((e: React.MouseEvent<HTMLButtonElement>, text: string) => {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
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
          placeholder="Here is a sample placeholder"
          value={text}
          onChange={onChange}
        />
        <Checkbox
          onChange={onShowCharCode}
        >
          Show Charcode
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
            <Td>
              {nfcText}
            </Td>
            <Td>
              <Button
                leftIcon={<CopyIcon/>}
                colorScheme="teal"
                variant="outline"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => onCopy(e, nfcText)}>
                Copy
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>NFD</Td>
            <Td>
              {nfdText}
            </Td>
            <Td>
              <Button leftIcon={<CopyIcon/>} colorScheme="teal" variant="outline">
                Copy
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>NFKC</Td>
            <Td>
              {nfkcText}
            </Td>
            <Td>
              <Button leftIcon={<CopyIcon/>} colorScheme="teal" variant="outline">
                Copy
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>NFKD</Td>
            <Td>
              {nfkdText}
            </Td>
            <Td>
              <Button leftIcon={<CopyIcon/>} colorScheme="teal" variant="outline">
                Copy
              </Button>
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
                  <Button
                    leftIcon={<CopyIcon/>}
                    colorScheme="teal"
                    variant="outline"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => onCopy(e, nfcText)}>
                    Copy
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>NFC(Code Point)</Td>
                <Td>
                  <CodePointText text={nfcText} />
                </Td>
                <Td>
                  <Button
                    leftIcon={<CopyIcon/>}
                    colorScheme="teal"
                    variant="outline"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => onCopy(e, nfcText)}>
                    Copy
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>NFD(Code Point)</Td>
                <Td>
                  <CodePointText text={nfdText} />
                </Td>
                <Td>
                  <Button leftIcon={<CopyIcon/>} colorScheme="teal" variant="outline">
                    Copy
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>NFKC(Code Point)</Td>
                <Td>
                  <CodePointText text={nfkcText} />
                </Td>
                <Td>
                  <Button leftIcon={<CopyIcon/>} colorScheme="teal" variant="outline">
                    Copy
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>NFKD(Code Point)</Td>
                <Td>
                  <CodePointText text={nfkdText} />
                </Td>
                <Td>
                  <Button leftIcon={<CopyIcon/>} colorScheme="teal" variant="outline">
                    Copy
                  </Button>
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
