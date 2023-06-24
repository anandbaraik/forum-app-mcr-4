import React, { useRef } from 'react';
import { FaSortAmountDownAlt } from "react-icons/fa";
import { Box, Flex, Text, useColorModeValue,  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList, } from '@chakra-ui/react';
import { usePost } from '../context/AppContext';
const RightSidebar = () => {
  const { sortByMostUpvoted, sortByLatest } = usePost();
  return (
    <Flex
      borderLeft="1px"
      display={{ base: 'none', lg: 'flex' }}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      h="full"
      w="20rem"
      flexDir="column"
      gap={4}
      fontSize="1.2rem"
      p={2}
      pr={4}
    >
      <Box borderWidth="1px" borderRadius="md" p="2">
        <Menu>
          <MenuButton as={Button} variant="ghost" borderRadius="full">
            <Flex alignItems="center" gap={2} transition="all 0.1s linear">
              <FaSortAmountDownAlt/>
              <Text display={{ base: 'none', lg: 'block' }}>Sort By</Text>
            </Flex>
          </MenuButton>
          <MenuList minW="8rem">
              <MenuItem
                key={'latest'}
                onClick={() => sortByLatest('Latest posts')}
              >
                Latest
              </MenuItem>
              <MenuItem
                key={'most_upvoted'}
                onClick={() => sortByMostUpvoted('Most upvoted posts')}
              >
                Most upvoted
              </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default RightSidebar;