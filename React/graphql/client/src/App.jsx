import React, { useState } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'

const GET_USERS = gql` 
  query GetEmployee {
    getUsers {
      id 
      name 
      age 
      salary
    }
}`;

const CREATE_USER = gql` 
  mutation CreateUser($name:String!, $age:Int!, $salary:Int!){ 
  createUser(name:$name, age:$age, salary:$salary) { 
      name
      age
      salary
  } 
}`;

const App = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    salary: "",
  })
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const { data: getdata, error: getUserError, loading: getLoading } = useQuery(GET_USERS);

  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await createUser({
      variables:
        { name: input.name, age: Number(input.age), salary: Number(input.salary) },
      refetchQueries: [{ query: GET_USERS }]
    });
    setInput({
      name: "",
      age: "",
      salary: "",
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          Name : <input type="text" name="name" value={input.name} onChange={handleChange} />
        </div>
        <div>
          Age : <input type="number" name="age" value={input.age} onChange={handleChange} />
        </div>
        <div>
          Salary : <input type="number" name="salary" value={input.salary} onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            // console.log(getUserData)
            // console.log(getUsers);
            getdata?.getUsers?.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
