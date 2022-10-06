import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const fetchSportsEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setEvents(data)
    router.push('/events?category=sports', undefined, { shallow: true })
  }
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports</button>
      <h1>Events List</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Events

export async function getServerSideProps(context) {
  console.log('gSSP is called')
  const { query } = context
  const { category } = query
  const queryStr = category ? `category=${category}` : ''
  const response = await fetch(`http://localhost:4000/events?${queryStr}`)
  const data = await response.json()
  return {
    props: {
      eventList: data,
    },
  }
}
