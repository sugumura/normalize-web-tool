import { Box, Center, Grid, Heading, Icon, Link } from '@chakra-ui/react'
import * as React from "react";
import { IoLogoGithub, IoHome } from "react-icons/io5"

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
      <Box textAlign="right">
        <Link href="https://github.com/sugumura/normalize-web-tool" isExternal>
          <Icon as={IoLogoGithub} w={6} h={6} mx={2} />
        </Link>
        <Link href="https://sugumura.dev" isExternal>
          <Icon as={IoHome} w={6} h={6} mx={2} />
        </Link>
      </Box>
    </Grid>
  )
}

export default AppHeader
