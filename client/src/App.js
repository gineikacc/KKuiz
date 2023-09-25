import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/u/`)
      .then((res) => res.text())
      .then((data) => setUsers(JSON.parse(data)))
      .catch((error) => console.error(error));
    //console.log(users);
  }, []);
  const usersTableData = users.map((u) => (
    <tr>
      <td>{u.name}</td>
      <td>{u.age}</td>
      <td>{u.score}</td>
    </tr>
  ));

  return (
    <div className="App">
      <div className="container">
        <table>
          <caption> User data </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{usersTableData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
