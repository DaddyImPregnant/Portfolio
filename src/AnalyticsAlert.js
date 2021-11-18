import { HStack, Alert, AlertIcon, CloseButton, useDisclosure } from '@chakra-ui/react';


function AnalyticsAlert() {
    const { onClose } = useDisclosure()

    return(
      <HStack>
          <Alert onClose={onClose} status="info" variant="left-accent">
            <AlertIcon />
            Chakra is going live on August 30th. Get ready!
            <CloseButton onClick={onClose} position="absolute" right="8px" top="8px" />
          </Alert>
        </HStack>
    );
}

export default AnalyticsAlert;