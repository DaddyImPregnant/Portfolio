import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  Heading,
  Alert,
  AlertIcon,
  CloseButton,
  GridItem,
  AlertTitle,
  AlertDescription,
  Container,
  Spacer,
  Flex
} from '@chakra-ui/react';
import "@fontsource/abhaya-libre"
import { extendTheme } from "@chakra-ui/react"
import { LogoGithubIcon } from 'chakra-ui-ionicons';
import Background from '../src/components/particle';
import Blinker from '../src/components/blinker';
import Head from 'next/head'
import AnalyticsAlert from '../src/AnalyticsAlert';
import Navbar from '../src/components/navbar';
import Typist from 'react-typist';


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

      <Navbar />

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" gap={6}>
          <Spacer />
          <VStack spacing={2}>
            <Heading>DaddyImPregnant</Heading>
            <HStack spacing={0}>
            <Typist cursor={{ show: false }}>
              <span>Plugin Developer</span>
              <Typist.Backspace count={16} delay={200} />
              <span>Software Developer</span>
              <Typist.Backspace count={20} delay={200} />
              <span>System Administrator</span>
              </Typist>
              <Blinker />
            </HStack>
            <Link href="https://github.com/DaddyImPregnant"><LogoGithubIcon /></Link>
          </VStack>
        </Grid>

      </Box>

    </ChakraProvider>
  );
}

export default App;
