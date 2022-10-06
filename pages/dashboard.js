import { useSession, signIn, getSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

function Dashboard() {
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     // The user is not authenticated, handle it here.

  //     signIn()
  //   },
  // })
  // console.log('from  session', status)

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function myFunction() {
      const session = await getSession()
      /* ... */
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    myFunction()
  }, [])

  if (loading) {
    return <h1>Loading .....</h1>
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
