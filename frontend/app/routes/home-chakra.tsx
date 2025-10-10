import type { Route } from './+types/home-chakra';
import { Provider } from '~/components/ui/provider';
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useBlogPosts } from '~/features/blog/useBlogPosts';
import { useBlogPost } from '~/features/blog/useBlogPost';
import type { BlogPostList } from '~/types';
import { Link } from 'react-router';
import { formatIsoDate, getValidImageSrc } from '~/lib/utils';
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home - Chakra UI' },
    { name: 'description', content: 'Thehome page built with MUI' },
  ];
}

function ArticleCard({ post }: { post: BlogPostList }) {
  const src = getValidImageSrc(post.img);
  return (
    <Box
      key={post.id}
      overflow='hidden'
      bg='white'
      _hover={{ shadow: 'xs', transform: 'translateY(-2px)' }}
      transition='all 0.2s'
    >
      <Grid
        templateColumns={{ base: '1fr', md: '3fr 2fr' }}
        gap={3}
        alignItems='center'
      >
        <Box p={3} order={{ base: 1, md: 0 }}>
          <Heading as='h3' size='sm' mb={2}>
            {post.title}
          </Heading>
          <HStack fontSize='xs' color='gray.500'>
            <Text>{post.author}</Text>
            <Text>•</Text>
            <Text>{post.readTime} min</Text>
          </HStack>
        </Box>
        <Image
          order={{ base: 0, md: 1 }}
          src={src}
          alt={post.title}
          objectFit='cover'
        />
      </Grid>
    </Box>
  );
}

export default function HomeChakraUi() {
  const [first, ...rest] = useBlogPosts();
  const detailedPost = useBlogPost(first.id);
  const { img, title, content, author, tags, publishedAt, readTime } =
    detailedPost;
  return (
    <Provider>
      <VStack gap={8} align='stretch'>
        <Grid templateColumns={{ base: '1fr', lg: '3fr 2fr' }} gap={8}>
          {/* Left Column - Featured Post */}
          <GridItem>
            <Grid
              bg='white'
              templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr' }}
              gap={4}
            >
              <GridItem>
                <Image
                  aspectRatio={{ base: '16/9', md: '1/1', xl: '16/9' }}
                  src={img}
                  alt={title}
                  objectFit='cover'
                  height='100%'
                />
              </GridItem>
              <GridItem>
                <HStack mb={3} gap={2}>
                  {tags.split(',').map((tag) => (
                    <Badge
                      key={tag}
                      colorScheme='teal'
                      fontSize='xs'
                      px={2}
                      py={1}
                      borderRadius='md'
                    >
                      {tag.trim()}
                    </Badge>
                  ))}
                </HStack>
                <Heading
                  as='h1'
                  size='4xl'
                  mb={4}
                  fontFamily='serif'
                  fontWeight='semibold'
                  lineHeight='1.2'
                >
                  {title}
                </Heading>
                <HStack mb={4} fontSize='sm' color='gray.500'>
                  <Text>{author}</Text>
                  <Text>•</Text>
                  <Text>{formatIsoDate(publishedAt)}</Text>
                  <Text>•</Text>
                  <Text>{readTime} min read</Text>
                </HStack>
                <Text
                  fontSize='sm'
                  lineHeight='1.8'
                  color='gray.700'
                  lineClamp={5}
                >
                  {content}
                </Text>
                <Link to={`/blog/${detailedPost.id}`}>
                  <Button mt={4}>Read More</Button>
                </Link>
              </GridItem>
            </Grid>
          </GridItem>

          {/* Right Column - Other Posts */}
          <GridItem>
            <VStack gap={12} align='stretch' mt={8}>
              <VStack
                bg='gray.100'
                p={'32px'}
                gap={4}
                align='stretch'
                display={{ base: 'none', lg: 'inherit' }}
              >
                <Heading
                  as='h2'
                  size='4xl'
                  fontFamily='serif'
                  fontWeight='medium'
                  lineHeight='1.2'
                >
                  Stay Informed
                </Heading>
                <Text>
                  Get the best journalism every day with plans starting at less
                  than $2/week. Cancel anytime.
                </Text>
                <Button
                  bg='teal.700'
                  color='white'
                  _hover={{ bg: 'teal.800' }}
                  fontWeight='semibold'
                >
                  Subscribe
                </Button>
              </VStack>
              {rest.slice(0, 3).map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </VStack>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={['1fr', 'auto 1fr']}
          bg='#fbefbf'
          mb={20}
          alignItems='stretch'
        >
          <VStack p={8} align='start' gap={4}>
            <Heading fontSize='4xl' fontFamily='serif' fontWeight='medium'>
              Subscribe and enjoy unlimited digital access
            </Heading>
            <Text>
              Get the best jorunalism every day with plans starting at less than
              $2/week.{' '}
              <Box as='span' fontStyle='italic'>
                Cancel anytime.
              </Box>
            </Text>
            <Button
              bg='teal.700'
              color='white'
              _hover={{ bg: 'teal.800' }}
              rounded='none'
              fontWeight='semibold'
            >
              Subscribe
            </Button>
          </VStack>
          <Flex
            gridColumn={['auto', '3']}
            alignItems='flex-end'
            justifyContent='flex-end'
            pr={8}
          >
            <Image src='/ufo.png' alt='UFO' />
          </Flex>
        </Grid>
      </VStack>
    </Provider>
  );
}
