
import React, { useState, useEffect } from "react";
import { Text } from '@chakra-ui/react';

const words = ["System Administrator", "Software Developer", "Plugin Developer"];

export default function TypeWriter() {
  const [blink, setBlink] = useState(true);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <Text>{blink ? "|" : " "}</Text>
  );
}