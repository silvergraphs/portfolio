import { Stack, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

export const FooterNotes = () => (
  <Stack align={{ base: "center", md: "center" }} spacing={1}>
    <Text fontSize={"sm"}>Developed with ❤️ by Bruno Caruso</Text>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={"xs"}>Built using</Text>
      <Tooltip
        hasArrow
        label="NextJS"
        bg={useColorModeValue("gray.700", "gray.100")}
        color={useColorModeValue("gray.100", "gray.700")}
      >
        <div>
          <TbBrandNextjs size={25} />
        </div>
      </Tooltip>
      <Tooltip
        hasArrow
        label="Vercel"
        bg={useColorModeValue("gray.700", "gray.100")}
        color={useColorModeValue("gray.100", "gray.700")}
      >
        <div>
          <TbBrandVercel size={25} />
        </div>
      </Tooltip>
      <Tooltip
        hasArrow
        label="Chakra"
        bg={useColorModeValue("gray.700", "gray.100")}
        color={useColorModeValue("gray.100", "gray.700")}
      >
        <div>
          <SiChakraui size={25} />
        </div>
      </Tooltip>
    </Stack>
  </Stack>
);
