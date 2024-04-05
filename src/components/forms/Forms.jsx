import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"

function Forms() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        // console.log(e.target.value)
        setUsername(e.target.value)
    }
        console.log(username)

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

          setEmail("")
          setPassword("")
          setUsername("")

        }

  return (
    <Form onSubmit={handleSubmit}>
        <h1 className='text-danger'>FORMS</h1>
      <Form.Group className="mb-3">

        <Form.Label>{ username && <span> Hello {username} </span>}</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
        onChange={handleUsername} 
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
        onChange={(e) => setEmail(e.target.value)}
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
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;