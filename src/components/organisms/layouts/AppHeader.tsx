import { Box, Center, Grid, Heading } from '@chakra-ui/react'
import * as React from "react";

type Props = {}

const AppHeader: React.FC<Props> = ({}) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      padding="1rem">
      <Box/>
      <Center>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Normalize Web Tool
        </Heading>
      </Center>
    </Grid>
  )
}

export default AppHeader
