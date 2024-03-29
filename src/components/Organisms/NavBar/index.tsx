import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Brand } from "../../Atoms/Brand";
import { DesktopNav } from "../../Molecules/DesktopNav";
import { MobileNav } from "../../Molecules/MobileNav";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
        <Flex
          flex={{ base: 1 }}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Brand />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex-end", md: "none" }}
          justifyContent={"flex-end"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
