import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Container
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../src/ColorModeSwitcher';
import "@fontsource/abhaya-libre"
import { extendTheme } from "@chakra-ui/react"
import { LogoGithubIcon } from 'chakra-ui-ionicons';
import Background from '../src/Background';
import Head from 'next/head'

const theme = extendTheme({
  fonts: {
    heading: "Abhaya Libre",
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Head>
        <title>Brian | DaddyImPregnant</title>
      </Head>

      <Background />

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>

          <ColorModeSwitcher justifySelf="flex-end" />

          <VStack spacing={2}>
            <Heading>DaddyImPregnant</Heading>
            <Text>Software Developer</Text>
            <Link href="https://github.com/DaddyImPregnant"><LogoGithubIcon /></Link>
          </VStack>

        </Grid>
      </Box>

    </ChakraProvider>
  );
}

export default App;
