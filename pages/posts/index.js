import Link from 'next/link'

function Posts({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>
              {post.id}. {post.title}
            </h2>
          </Link>

          <hr />
        </div>
      ))}
    </>
  )
}

export default Posts

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
  }
}
