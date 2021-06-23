/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classNamees
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" aria-label="Navbar toggle button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button></div>
          </div>
          <button type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-label="Toggle navigation" className="navbar-toggler">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse show" styles={{ display: "none"}}>
            <ul className="navbar-nav ml-auto">
              <li className="input-group">
                <button type="button" className="btn center btn-primary" slot="footer" fill="">
                  Connect</button>
              </li>
              <div tabindex="-1" role="dialog" aria-hidden="true" className="modal fade modal-black modal-wallet-connect d-none" id="walletModal" style={{ display: "none" }}>
                <div className="modal-dialog"><div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-header">Connect to a wallet</h5>
                    <button type="button" data-dismiss="modal" aria-label="Close" className="close">
                      <i className="tim-icons icon-simple-remove"></i></button>
                  </div><div className="modal-body"><div>
                    <button type="primary" className="btn center mb-10 btn-secondary">
                      <span className="pull-left">Metamask</span><img src="img/metamask.png" className="pull-right" />
                    </button></div></div>
                </div></div>
              </div>
              <li className="width-100"><select className="mb-6 custom-select" id="__BVID__235">
                <option value="bsc">Binance Smartchain</option>
              </select>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
      {/* <Navbar classNameName={classNameNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div classNameName="navbar-wrapper">
            <div
              classNameName={classNameNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span classNameName="navbar-toggler-bar bar1" />
                <span classNameName="navbar-toggler-bar bar2" />
                <span classNameName="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span classNameName="navbar-toggler-bar navbar-kebab" />
            <span classNameName="navbar-toggler-bar navbar-kebab" />
            <span classNameName="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav classNameName="ml-auto" navbar>
              <InputGroup classNameName="search-bar">
                <Button color="link" onClick={toggleModalSearch}>
                  <i classNameName="tim-icons icon-zoom-split" />
                  <span classNameName="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div classNameName="notification d-none d-lg-block d-xl-block" />
                  <i classNameName="tim-icons icon-sound-wave" />
                  <p classNameName="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu classNameName="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">
                      Mike John responded to your email
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">
                      Another notification
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">
                      Another one
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div classNameName="photo"> */}
                    {/* <img
                      alt="..."
                      src={require("assets/img/anime3.png").default}
                    /> */}
                  {/* </div>
                  <b classNameName="caret d-none d-lg-block d-xl-block" />
                  <p classNameName="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu classNameName="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem classNameName="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li classNameName="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            classNameName="close"
            onClick={toggleModalSearch}
          >
            <i classNameName="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal> */}
    </>
  );
}

export default AdminNavbar;
