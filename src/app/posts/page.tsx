import { Link, Stack } from '@chakra-ui/react'
import { allPosts } from 'contentlayer/generated'

export default function PostsPage() {
  return (
    <Stack>
      {allPosts.map((post) => {
        return (
          <Link key={post.slug} href={`posts/${post.slug}`}>
            <h1>{post.title}</h1>
            <p>{post.dateFormatted}</p>
          </Link>
        )
      })}
    </Stack>
  )
}
