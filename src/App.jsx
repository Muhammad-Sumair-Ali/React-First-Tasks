import "./App.css";

import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  // first assignment Have 20 elements in array cut 10 elements
  let array = [
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
    "twenty ",
  ];
  let newArray = array.slice(9);
  // console.log("this is a old array", [...array]);
  // console.log("This is 10 elements", newArray);

  const [text, setText] = useState("");
  const showMore = () => {
    setText("This is more text Sample text ...");
  };
  const seeLess = () => {
    setText("");
  };
  // Todo with delete

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { value }]);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  // Register acount
  // data saving in this registerdata array
  let reisterdata = [];
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [checkbox, setcheckbox] = useState(false);

  const register = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      checkbox: checkbox,
    };
    reisterdata.push(data);
    alert("Register Successful");
    console.log("Register Successful:", reisterdata);
  };

  return (
    <div className="App" style={{ margin: "40px" }}>
      <h2>Show More Button</h2>
      <p>
        Click The Show More Button And See More Text <br /> {text}
      </p>
      {text.length ? (
        <button onClick={seeLess}>See less</button>
      ) : (
        <button onClick={showMore}>Show More</button>
      )}
      <hr />
      <h2>add and delete task</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => addTodo()}>Add</button>
      <button onClick={deleteAllTodos}>Delete All</button>
      <div>
        <ul>
          {todos.map((todo, i) => {
            return <li key={i}>{todo.value}</li>;
          })}
        </ul>
      </div>
      <hr />
      <br />
      <div style={{ marginBottom: "200px", margin: "30px" }}>
        <h3>Register Form</h3>
        <form onSubmit={register}>
          <label>
            First Name:
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              name="fname"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              name="lname"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              name="password"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              name="email"
            />
          </label>
          <br />
          <label>
            <input
              required
              type="checkbox"
              value={checkbox}
              onChange={(e) => setcheckbox(e.target.value)}
            />{" "}
            I agree to the terms and conditions
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              required
              type="date"
              value={dateOfBirth}
              onChange={(e) => setdateOfBirth(e.target.value)}
              name="dob"
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
