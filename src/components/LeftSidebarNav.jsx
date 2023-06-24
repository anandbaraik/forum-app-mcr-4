import React from 'react';
import {
  Button,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Avatar,
  Text,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
const LeftSidebarNav = () => {
  return (
    <Flex
      h="full"
      p={{ base: 2, lg: 4 }}
      flexDir={{ base: 'row', lg: 'column' }}
      borderRightWidth={{ base: '0', lg: '1px' }}
      borderTopWidth={{ base: '1px', lg: '0' }}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      justifyContent="space-between"
      position="relative"
    >
      <Flex
        flexDir={{ base: 'row', lg: 'column' }}
        gap={{ base: 2, lg: 4 }}
        fontSize={{ base: '1.7em', lg: '1.2rem' }}
        alignItems={{ base: 'center', lg: 'stretch' }}
        justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        flexGrow={1}
      >
        <Button display={{ base: 'none', lg: 'block' }}>
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Home</Text>
          </Flex>
        </Button>

        <Button display={{ base: 'none', lg: 'block' }}>
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.5 17.5L14 14l3.5-7.5L10 10l-3.5 7.5ZM12 13q-.425 0-.713-.288T11 12q0-.425.288-.713T12 11q.425 0 .713.288T13 12q0 .425-.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Explore</Text>
          </Flex>
        </Button>

        <Button display={{ base: 'none', lg: 'block' }}>
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Z"
              ></path>
            </svg>
            <Text display={{ base: 'none', lg: 'block' }}>Bookmarks</Text>
          </Flex>
        </Button>

        <Button display={{ base: 'none', lg: 'block' }}>
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
          <FaUserCircle/>
            <Text display={{ base: 'none', lg: 'block' }}>Profile</Text>
          </Flex>
        </Button>

        <Flex
          borderWidth="1px"
          borderRadius="full"
          mb={{ base: '0', lg: '4' }}
          display={{ base: 'flex', lg: 'none' }}
          order={3}
        >
          <Button display={{ base: 'none', lg: 'block' }}>
            <Flex gap={4} alignItems="center">
              <Avatar name={`Anand Baraik`} size={{ base: 'sm', lg: 'md' }} />
              <Flex flexDir="column" display={{ base: 'none', lg: 'block' }}>
                <Heading size="sm">Anand Baraik</Heading>
                <Text fontSize="sm">@anandb</Text>
              </Flex>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Flex
        borderWidth="1px"
        borderRadius="full"
        mb={{ base: '0', lg: '4' }}
        display={{ base: 'none', lg: 'flex' }}
      >
        <ChakraLink
          w="full"
          as={Link}
          to={`/profile/anandb`}
          borderRadius="full"
          p={2}
          _activeLink={{
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
        >
          <Flex gap={4} alignItems="center">
            <Avatar
              src={'Anand'}
              name={`Anand`}
              size="md"
            />
            <Flex flexDir="column">
              <Heading size="sm">{`Anand`}</Heading>
              <Text fontSize="sm">@{'anandbaraik'}</Text>
            </Flex>
          </Flex>
        </ChakraLink>
      </Flex>
    </Flex>
  )
}

export default LeftSidebarNav