import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"

function FormsObject() {
    const [data, setData] = useState({
      username:"",
      email:"",
      password:""
    })

    const { username, password, email} = data

    const handleData = (e) => {
      console.log(e.target)
      setData({...data, [e.target.id]: e.target.value })
    }
    console.log(data)

    const handleSubmit = (e) => {
          console.log(e)
          e.preventDefault()

          // const res = axios.post("url", {
          //   username: username,
          //   email: email,
          //   password: password,

          // })

          alert(`
          username: ${username},
          email: ${email},
          password: ${password},
          `)

          setData({ 
            username:"",
            email:"",
            password:""        
          })

      
        }

  return (
    <Form onSubmit={handleSubmit}>
        <h1 className='text-danger'>FORMS OBJECT</h1>
      <Form.Group className="mb-3">

        <Form.Label>{ username && <span> Hello {username} </span>}</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
        onChange={handleData} 
        id="username"
        name="username"
        value={username}
        required
        
        />
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{email && <span>Email: {email} </span>}</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email"
        id="email"
        name="email"
        value={email} 
        onChange={handleData} 
        />
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        id="password"
        name="password"
        value={password}
        onChange={handleData} 
        />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormsObject;