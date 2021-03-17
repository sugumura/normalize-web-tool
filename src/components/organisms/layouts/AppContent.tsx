import { Box } from '@chakra-ui/react'

type Props = Partial<{
  children: any
}>

const AppContent: React.FC<Props> = ({ children }) => {
  return (
    <Box as="main" mt={5}>
      {children}
    </Box>
  )
}

export default AppContent
