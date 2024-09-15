import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostShow() {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data)
        return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
      })
      .then((response) => {
        setAuthor(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setComments(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [postId])

  return (
    <div>
      
      <p><b>USER NAME: {author?.name}</b></p>
      <p><b>POST: {post?.title}</b></p>
      <p><b>BODY : <br/>{post?.body}</b></p>
      <hr/>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
      <hr/>
      <Link to={`/users/${author?.id}`}>More post of author : {author?.name}</Link>
    </div>
  )
}
