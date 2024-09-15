
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import UserShow from "./UsersShow";
import PostShow from "./PostShow";
import Posts from "./Post";
import UsersList from "./Users";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Link to="/">Home</Link>|
        <Link to="/users">All Users</Link>|<Link to="/posts">All Posts</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList/>} />
          <Route path="/users/:id" element={<UserShow />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostShow />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
