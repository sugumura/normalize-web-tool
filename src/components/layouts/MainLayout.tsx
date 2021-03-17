import { Box, ChakraProvider, CSSReset, theme } from '@chakra-ui/react'
import React from "react";
import AppHead from "@organisms/layouts/AppHead";
import AppContent from "@organisms/layouts/AppContent";
import AppHeader from "@organisms/layouts/AppHeader";

type Props = Partial<{
  children: any
  title: string
}>

const MainLayout: React.FC<Props> = ({children, title = ""}) => {

  return (
    <ChakraProvider theme={theme}>
      <AppHead title={title}/>

      <CSSReset/>

      <Box>
        <AppHeader/>
        <AppContent>{children}</AppContent>
      </Box>
    </ChakraProvider>
  )
}

export default MainLayout
