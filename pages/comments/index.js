import { useState } from 'react'

function CommentsPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const fetchCommentsHandler = async () => {
    const res = await fetch(`/api/comments`)
    const data = await res.json()
    setComments(data)
  }
  const submitHandler = async () => {
    const res = await fetch('api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    console.log(data)
  }
  const deleteHandler = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    console.log(data)
    fetchCommentsHandler()
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitHandler}>Submit Comment</button>
        <hr />
      </div>
      <button onClick={fetchCommentsHandler}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>
            {comment.id} {comment.text}
          </h3>
          <button onClick={() => deleteHandler(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default CommentsPage
