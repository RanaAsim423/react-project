import React from "react";
import Logo from "../assets/images/logo.png"
import {Link} from "react-router-dom";
import {
    To_About,
    To_cart, To_Categories,
    To_contact,
    To_home,
    To_Login,
    To_Order_History,
    To_Product_List,
    To_Register
} from "../helpers/Constants";
import { useSelector } from 'react-redux'
import {selectCart} from "../redux/cartSlice";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = (prop) => {
    const token = localStorage.getItem('token');
    const cart = useSelector(selectCart)

    const logout = () => {
        localStorage.removeItem('token')
        prop("")
    }
    return(
        <div style={{boxShadow:" 0px 0px 22px -3px rgba(0,0,0,0.57)"}}>
            <nav className="py-2 border-bottom topnav">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link link-light px-2 ">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link link-light px-2">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link link-light px-2">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav">
                        {token !== null &&
                            <>
                                <li className="nav-item"><Link onClick={logout} className="nav-link link-light px-2"><strong>Logout</strong></Link></li>
                            </>
                        }
                        {token === null &&
                            <>
                                <li className="nav-item"><Link to={To_Login} className="nav-link link-light px-2"><strong>Login</strong></Link></li>
                                <li className="nav-item"><Link to={To_Register} className="nav-link link-light px-2"><strong>Register</strong></Link></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
            <header className="py-3 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to={To_home} 
                       className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <img src={Logo} width={"83px"}/>
                        <h3 className={"logoHeading"}>Umme Abdullah's <br/> Gluten Free Cuisine</h3>
                    </Link>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navsec">
                        <li><Link to={To_home} className="nav-link px-2 link-dark">Home</Link></li>
                        <li><Link to={To_About} className="nav-link px-2 link-dark">About</Link></li>
                        <li><Link to={To_Categories} className="nav-link px-2 link-dark">Categories</Link></li>
                        <li><Link to={To_Product_List} className="nav-link px-2 link-dark">Product</Link></li>
                        <li><Link to={To_contact} className="nav-link px-2 link-dark">Contact</Link></li>
                        <li>
                            <Link to={To_cart} className="nav-link px-2 link-dark">
                            <i className="fas fa-shopping-cart"></i>
                                <span className='badge badge-warning' id='lblCartCount'> {cart.length} </span>
                            </Link>
                        </li>


                        {token !== null &&
                            <>
                                <li className="nav-item">
                                    <Dropdown className="nav-link link-light px-2">
                                        <Dropdown.Toggle className={"bttn btn-danger btn-sm themeBtn"}>
                                            <i className="fas fa-user"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={To_Order_History}  className="link-dark">Orders</Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </>
                        }

                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{marginTop:"23px",marginLeft:"20px"}} />
                    </form>
                </div>
            </header>
        </div>
    )
}
export default Header