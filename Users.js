// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function UsersList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const result = response.data;
//         setUsers(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <h2> USERS LIST-{users.length}</h2>
//       <ul>
//         {users.map((ele) => {
//           return (
//             <li key={ele.id}>{ele.name}</li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }


//////////////////////////////////
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data
        setUsers(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h2>USERS LIST - {users.length}</h2>
      <ul>
        {users.map((ele) => (
          <li key={ele.id}>
            <Link to={`/users/${ele.id}`}>{ele.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

