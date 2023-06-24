import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePost } from '../context/AppContext';
import PostCard from '../components/PostCard';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading, Avatar, Text, Card,
  CardBody,CardFooter, IconButton, Spacer
} from '@chakra-ui/react';
import { FaArrowLeft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
  import { FaShareAlt } from "react-icons/fa";
const PostDetailsPage = () => {
  const {id} = useParams();
  const {posts} = usePost();
  const post = posts?.find((post) => post.postId === id);
  console.log(post);
  return (
    <>
      <Box h="full" p={2}>
        <Box p={2}>
          <Link to="/">
            <Flex alignItems={'center'} gap="3">
            <FaArrowLeft fontSize={'25'}/>
              <Heading textAlign="center" fontSize={{ base: 'xl', lg: '2xl' }}>
                  Post
              </Heading>
            </Flex>
          </Link>
        </Box>
        <Divider />
        <Flex flexDir="column" alignItems="center" pb={4} pt={4}>
          <PostCard post={post} />
          {
            (post?.comments?.length > 0) && (
              post?.comments.map((comment) => {
                return  (
                    <Card key={comment.commentId} w="full" maxW="600px" mb={4} boxShadow="0 0 10px 0 rgba(0,0,0,0.15)">
                    <CardBody py={4} px={4}>
                      <Flex gap={2} alignItems={'center'}>

                          <Box w="50px" h="50px">
                            <Avatar
                              src={comment?.picUrl}
                              name={`${comment?.username}`}
                            />
                          </Box>
                        <Flex flexGrow={1} justifyContent="space-between">
                          <Flex flexDir="column" justifyContent="center">
                            <Flex gap={2} alignItems="baseline">
                                <Heading size="md">{`${comment?.username}`}</Heading>
                              <Text fontSize="sm">
                                {new Date(comment?.createdAt).toLocaleDateString('en-US', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </Text>
                            </Flex>
                            <Flex gap={2} alignItems="baseline">
                              <Text fontSize="sm">
                                Replying to {' '}
                                <span style={{color:"blue"}}>{` ${post?.username}`}</span>
                              </Text>
                            </Flex>
                            <Flex>
                            <Text fontSize="md">
                                {comment?.comment}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      </CardBody>
                      <CardFooter p={2}>
                              <Flex w="full" alignItems="center" justify="between">
                              <IconButton colorScheme={'gray'} variant={'solid'} icon={<FaHeart />}/>
                              <Spacer />
                              <IconButton colorScheme={'gray'} variant={'solid'} icon={<FaCommentAlt />}/>

                              <Spacer />
                              <IconButton colorScheme={'gray'} variant={'solid'} icon={<FaShareAlt />}/>
                              </Flex>
                          </CardFooter>
                    </Card>
                )
              })
            )
          }
        </Flex>
      </Box>
    </>
  )
}

export default PostDetailsPage