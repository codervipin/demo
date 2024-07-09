import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="main  d-flex justify-content-center align-items-center ">
      <div className="formContainer login d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mt-2">LOGIN</h1>
        <Form>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <div className="input-group w-100">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-describedby="passwordToggle"
                style={{ zIndex: "1" }}
                className="rounded"
              />
              <Button
                variant="outline-none"
                onClick={togglePasswordVisibility}
                style={{
                  marginLeft: "-40px",
                  zIndex: "9",
                  outline: "none",
                  border: "none",
                }}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>
            </div>
          </Form.Group>

          <p className="mt-3">Forgot Password?</p>

          <Button variant="primary" className="mt-2 w-100" type="submit">
            Login
          </Button>
        </Form>

        <p className="mt-3 my-4">
          Don't have account ? <Link to="/register" style={{textDecoration: "none"}}>Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
