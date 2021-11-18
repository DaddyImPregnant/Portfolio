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
  Spacer
} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Navbar() {  
    return (
      <Box position="fixed" as="nav" w="100%" color="#E5E9F0" css={{ backdropFilter: 'blur(3px)' }} zIndex={1}>

          <HStack>
          <Text>DaddyImPregnant</Text>
          <Spacer />
            <ColorModeSwitcher/>
          </HStack>

          
    
    </Box>
    );
}

export default Navbar;