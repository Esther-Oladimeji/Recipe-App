import React from "react";
import styled from "styled-components";
import Search from "./Search";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../Logo.png";

export default function Mynav() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <Navs>
      <Navbar bg="myTrans" expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="logo">
            Fantalicious
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="color-text"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="white-bg">
            {/*}  <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="color-text">
                HOME
              </Nav.Link>

              <Nav.Link as={NavLink} to="#category" className="color-text">
                CATEGORIES
              </Nav.Link>
              <Nav.Link as={NavLink} to="/favorite" className="color-text">
                FAVORITE
              </Nav.Link>
  </Nav>*/}
            <Form className="d-flex" onSubmit={handleSubmit}>
              <InputGroup>
                <FormControl
                  type="search"
                  className="me-2 box"
                  aria-label="Search"
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type to Search..."
                  value={input}
                />

                <Button
                  variant="outline-success"
                  onSubmit={handleSubmit}
                  type="submit"
                >
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Navs>
  );
}
const Navs = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  height: 1rem;
  img {
    height: 10rem;
    width: 10rem;
  }
  .bg-myTrans {
    background: black;
    opacity: 0.7;
    height: 4rem;
  }
  .color-text {
    height: 100%;
    margin: 15px 15px 15px 15px;
    color: white !important;
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
  }
  .me-2 {
    background-color: transparent;
    color: white;
    ::placeholder {
      color: white;
    }
  }
  .white-bg {
    background-color: black;
    width: 100%;
    padding-bottom: 1rem;
    color: white;
  }
`;
