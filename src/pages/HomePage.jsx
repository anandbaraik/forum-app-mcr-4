import {
  Box,
  Button,
  Divider,
  Flex,
  Heading
} from '@chakra-ui/react';
import PostCard from '../components/PostCard';
import { useState } from 'react';
import { usePost } from '../context/AppContext';
const HomePage = () => {
  const {posts} = usePost();
  return  (
    <>
      <Box h="full" p={2}>
        <Box p={2}>
          <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
            Latest posts
          </Heading>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" pb={4} pt={4}>
          {posts.map(post => (
            <PostCard post={post} key={post.postId} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;