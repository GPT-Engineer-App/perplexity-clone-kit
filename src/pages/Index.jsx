// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Input, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.800", "gray.800");
  const borderColor = useColorModeValue("purple.500", "purple.500");

  return (
    <Box bg={bgColor} minH="100vh" p={4} color="white">
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Box position="relative" width="80%">
          <Input placeholder="Ask your question here..." size="lg" pr="4.5rem" borderColor={borderColor} borderWidth="2px" borderRadius="full" _placeholder={{ color: "gray.300" }} />
          <Button position="absolute" right="1rem" top="50%" transform="translateY(-50%)" colorScheme="purple" borderRadius="full" px={10} py={7} iconSpacing={4}>
            <FaPaperPlane />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
