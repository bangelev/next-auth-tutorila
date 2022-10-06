import User from '../components/User'

function UserList({ users }) {
  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
}

export default UserList
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  // console.log(data)
  return {
    props: {
      users: data,
    },
  }
}
