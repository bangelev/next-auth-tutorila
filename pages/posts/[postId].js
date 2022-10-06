// import { useRouter } from 'next/router'
import Head from 'next/head'
function Post({ post, title, description, user, password }) {
  // const router = useRouter()
  // console.log(router)

  // if (router.isFallback) {
  //   return <h1>Loading ...</h1>
  // }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h2>
        {post.id}. {post.title}
      </h2>
      <p>{post.body}</p>
      <h3>
        Here is the user {user} and got password {password}
      </h3>
      <h4>{process.env.NEXT_PUBLIC_KEY}</h4>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await res.json()
  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   }
  // })

  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  // console.log(context)

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()
  if (!data.id) {
    return {
      notFound: true,
    }
  }
  console.log(`Generating page for /posts/${params.postId}`)
  return {
    props: {
      post: data,
      title: 'POST DINAMIC',
      description: 'OPIS NA OVA',
      user,
      password,
    },
  }
}
