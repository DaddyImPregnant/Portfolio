import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Text,
  useColorModeValue,
  HStack,
  Spacer,
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../ColorModeSwitcher';

const theme = extendTheme({
  fonts: {
    heading: "Abhaya Libre",
  },
})

function Navbar() {  
    return (
        <ChakraProvider theme={theme}>
          <Box position="fixed" as="nav" w="100%" color="#E5E9F0" css={{ backdropFilter: 'blur(3px)' }} zIndex={1}>

          <HStack>
            <Link href="/">DaddyImPregnant</Link>
            <Spacer />
            <ColorModeSwitcher/>
          </HStack>
  
        </Box>
        </ChakraProvider>
    );
}

export default Navbar;