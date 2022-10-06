import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  console.log('Session index: ', session)
  return (
    <>
      <h1>Pre Rendering </h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <hr />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  )
}
