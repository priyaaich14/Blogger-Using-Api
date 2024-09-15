import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserShow() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        setPosts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <h1>User Name - {user?.name}</h1>
      <h3>POST WRITTEN BY USER : </h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      {/* <Link to="/users">Back to Users List</Link> */}
    </div>
  )
}
