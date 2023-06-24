import {
    Avatar,
    Box,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex,
    Heading,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Text,
    useDisclosure,
  } from '@chakra-ui/react';
  import { Badge } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';
  import { FaCommentAlt } from "react-icons/fa";
  import { FaShareAlt } from "react-icons/fa";
  import { FaBookmark } from "react-icons/fa";
  import { FaArrowDown } from "react-icons/fa";
  import { FaArrowUp } from "react-icons/fa";
import { usePost } from '../context/AppContext';
  const PostCard = ({ post }) => {
    const {upvotePost, downvotePost, bookmarkPost} = usePost();
    return (
      <Card w="full" maxW="600px" mb={4} boxShadow="0 0 10px 0 rgba(0,0,0,0.15)">
        <CardBody py={4} px={4}>
          <Flex gap={2} alignItems={'center'}>
		  	<Box>
				<Flex gap={3}>
        <FaArrowDown fontSize={'25'}
						onClick={() => downvotePost(post.postId)}
						cursor="pointer"/>
					<Text fontSize="sm">
						{ (post.downvotes > post.upvotes) && ('-')} {post.upvotes}
					</Text>
          <FaArrowUp fontSize={'25'}
						onClick={() => upvotePost(post.postId)} cursor="pointer"/>

				</Flex>
			  </Box>
              <Box w="50px" h="50px">
                <Avatar
                  src={post?.picUrl}
                  name={`${post?.username}`}
                />
              </Box>
            <Flex flexGrow={1} justifyContent="space-between">
              <Flex flexDir="column" justifyContent="center">
                <Flex gap={2} alignItems="baseline">
                    <Heading size="md">Posted by {`${post?.username}`}</Heading>
                  <Text fontSize="sm">
					{'on '}
                    {new Date(post?.createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" gap={4} mt={4}>
            <Heading size="md">{post?.post}</Heading>
			<Text>
				{
					(post?.tags.length > 0) && (
						post?.tags?.map((tag) => <Badge key={tag} m="1" p="1" colorScheme='purple'>{tag}</Badge>)
					)
				}
			</Text>
            {post?.postDescription}
          </Flex>
        </CardBody>
        <Divider borderColor="gray.500" />
        <CardFooter p={2}>
            <Flex w="full" alignItems="center" justify="between">
				<Link to={`/post/${post.postId}`}>
					<IconButton colorScheme={'gray'} variant={'solid'} icon={<FaCommentAlt />}/>
				</Link>
				<Spacer />
				<IconButton colorScheme={'gray'} variant={'solid'} icon={<FaShareAlt />}/>
				<Spacer />
				<IconButton colorScheme={post.isBookmarked ? 'red' : 'gray'} variant={post.isBookmarked ? 'solid' : 'outline'} icon={<FaBookmark />} onClick={() => bookmarkPost(post.postId)}/>
            </Flex>
        </CardFooter>
      </Card>
    );
  };

  export default PostCard;