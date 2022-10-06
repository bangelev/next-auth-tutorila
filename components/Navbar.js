import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
  const { data: session, status } = useSession()
  console.log('Session: ', session)
  console.log('Status: ', status)
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul
        className={`main-nav ${
          !session && status === 'loading' ? 'loading' : 'loaded'
        }`}
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {status !== 'loading' && !session && (
          <li>
            <button onClick={() => signIn('github')}>Sign in</button>
          </li>
        )}
        {session && (
          <li>
            <button onClick={() => signOut()}>Sign out</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
