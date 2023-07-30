import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../../store/AppContext";
import icon from "../../assets/icon.svg";

export const HeaderPartial = () => {
  const { state } = useAppContext();

  return (
    <Navbar
      as="header"
      expand="lg"
      bg="light"
      data-bs-theme="light"
      fixed="top"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            width="30px"
            height="auto"
            className="img-responsive"
            src={icon}
            alt="icon"
          />
          AnimaBox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="nav" className="ms-auto">
            <Link to={"/"} className="nav-link">
              Produtos
            </Link>
            <Link to={"/cart"} className="nav-link">
              <i class="bi bi-cart3"></i>
              <Badge className="mx-2" bg="dark">
                {state.cart.length}
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
