import React,{useState} from "react";
import AboutImg from "../assets/images/about_us.png";
import {Link, useNavigate} from "react-router-dom";
import {LoginUser} from "../controller/WebController"
import {To_home, To_Register} from "../helpers/Constants";

const Login = ({check}) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState("");
    const InputHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prevState =>({...prevState,[name]:value}))
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }
    const login = async (e) => {
        e.preventDefault();
        const res = await LoginUser(formData)
        if(res.status === "Success"){
            localStorage.setItem('token',res.token)
            check(res.token)
            navigate(To_home)
        }else{
            setError(res.message)
            check("abc")
        }
    }
    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12 text-center pb-5"}>
                        <div className="nine">
                            <h1>Login<span>Umme Abdullah's Gluten Free</span></h1>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"login"}>
                            <h2>Login Your Account</h2><br/>
                            {error !== "" &&
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            }
                            <form onSubmit={login}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={InputHandler} placeholder={"Enter Your Email"}/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group mb-3">
                                        <input type={passwordShown ? "text" : "password"}  name="password" onChange={InputHandler} className="form-control" placeholder="Enter Your Password"/>
                                        <span className="input-group-text" id="basic-addon2">
                                                <div  onClick={togglePassword}>
                                                    {passwordShown ?
                                                        <i className="fas fa-eye"></i>
                                                        :
                                                        <i className="fas fa-eye-slash"></i>
                                                    }
                                                </div>
                                            </span>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button> <br/>  <br/>
                                <Link to={To_Register}> Create an Account</Link> &nbsp; &nbsp; &nbsp; <Link to={'/'}> Forget Password ?</Link>
                            </form>
                        </div>
                    </div>
                    <div className={"col-md-6 text-center"}>
                        <img src={AboutImg} width={"60%"}/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login