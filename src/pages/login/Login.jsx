import Form from "react-bootstrap/Form"
import Button from  "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"



const Login = () => {


const navigate=useNavigate();

const userInfo={
  username:"Alex"
}

const handleSubmit=(e)=>{
e.preventDefault();
sessionStorage.setItem("user",JSON.stringify(userInfo))
navigate(-1);

}



  return (
    <div className="login">
      
 <div className="input">
 
 <Form className="form" onSubmit={handleSubmit}>
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