import { authOptions } from 'pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth/next'

function Blog({ data }) {
  return (
    <div>
      <h1>Blog {data}</h1>
    </div>
  )
}

export default Blog

export async function getServerSideProps(context) {
  // console.log(context)
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false,
      },
    }
  }
  if (session.user) {
    console.log(session.user)
  }
  return {
    props: {
      data: session ? '100 blogs paid' : 'free blogs',
    },
  }
}
