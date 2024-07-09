import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("USER");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((pre) => {
      return { ...pre, [name]: value ,role};
    });
  };

    //  console.log(role);
//   console.log(formData);
  return (
    <div className="main d-flex justify-content-center align-items-center ">
      <div className="formContainer  d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mt-2 ">REGISTER</h1>
        <Form>
          <Form.Group controlId="formBasicFirstName" className="mt-2  ">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName" className="mt-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicContact" className="mt-3 ">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="number"
              pattern="[0-9]"
              placeholder="123456789"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-3 ">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3 ">
            <Form.Label>Password</Form.Label>
            <div className="input-group w-100">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-describedby="passwordToggle"
                style={{ zIndex: "1" }}
                className="rounded"
                name="password"
                value={formData.password}
                onChange={handleChange}
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

          <Form.Group
            controlId="dropdown-basic"
            className="mt-3 d-flex align-items-center  "
          >
            <Form.Label className="my-auto">Role</Form.Label>
            <Dropdown className="mx-2"  >
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                {role}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setRole("USER")}>
                  USER
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRole("Vendor")}>
                  VENDOR
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRole("ADMIN")}>
                  ADMIN
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mt-3   mx-auto w-100"
          >
            REGISTER
          </Button>
        </Form>

        <p className="mt-2 my-4 ">
          Already registered?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
