import {
  BrowserRouter,
  useRoutes,
} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import AboutUs from "./components/ContactUs";
import Home from "./components/Home/Home";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "contactus", element: <AboutUs /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Navbar style={{backgroundColor: "#071740", position: "sticky"}} bg="light" expand="lg">
          <Navbar.Brand href="/">Generic Brand Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/contactus">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;