import { NavLink } from "react-router-dom";
import TopicsBar from "./TopicsBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar
      bg="secondary"
      data-bs-theme="light"
      sticky="top"
      variant="light"
      className="justify-content-center"
    >
      <Nav variant="underline" className="justify-content-center">
        <Nav.Item style={{ marginRight: -10 }}>
          <Nav.Link as={NavLink} to="/" style={{ color: "white" }} end>
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item style={{ marginRight: -15 }}>
          <Nav.Link as={NavLink} to="/articles" style={{ color: "white" }}>
            Articles
          </Nav.Link>
        </Nav.Item>

        <TopicsBar />
      </Nav>
    </Navbar>
  );
};

export default Navigation;
