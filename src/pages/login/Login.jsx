import Form from "react-bootstrap/Form"
import Button from  "react-bootstrap/Button"
const Login = () => {
  return (
    <div className="login">
 <div className="input">
 <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Enter UserName" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      
      <Button   variant="primary" type="submit">
        Login
      </Button>
    </Form>
 </div>
    </div>
  )
}

export default Login