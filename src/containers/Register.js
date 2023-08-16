import React,{useState} from "react";
import AboutImg from "../assets/images/about_us.png";
import {Link, useNavigate} from "react-router-dom";
import {RegisterUser} from "../controller/WebController"
import {To_home, To_Login} from "../helpers/Constants";
const Register = ({check}) => {
    const [formData, setFormData] = useState({
        email:'',
        name:'',
        phone:'',
        password:'',
        cpassword:''
    });
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [cpasswordShown, setCPasswordShown] = useState(false);
    const [error, setError] = useState("");
    const InputHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prevState =>({...prevState,[name]:value}))
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }
    const toggleCPassword = () => {
        setCPasswordShown(!cpasswordShown);
    }
    const register = async (e) =>{
        e.preventDefault()
        if(formData.password === formData.cpassword){
            const res = await RegisterUser(formData)
            if(res.status === "Success"){
                localStorage.setItem('token',res.token)
                check(res.token)
                navigate(To_home)
            }else{
                setError(res.message)
                check("abc")
            }
        }else{
            setError("Password & Confirm Password is not Match")
        }
    }
    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12 text-center pb-5"}>
                        <div className="nine">
                            <h1>Register<span>Umme Abdullah's Gluten Free</span></h1>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"login"}>
                            <h2>Register Your Account</h2><br/>
                            {error !== "" &&
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            }
                            <form onSubmit={register}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={InputHandler} required  placeholder={"Enter Your Email"}/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" onChange={InputHandler} required  placeholder={"Enter Your Name"}/>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" name="phone" onChange={InputHandler} required  placeholder={"Enter Your Phone Number"}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group mb-3">
                                        <input type={passwordShown ? "text" : "password"} name="password" minLength={8} onChange={InputHandler} required  className="form-control" placeholder="Enter Your Password"/>
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
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="input-group mb-3">
                                        <input type={cpasswordShown ? "text" : "password"} name="cpassword" minLength={8} onChange={InputHandler} required  className="form-control" placeholder="Enter Your Password"/>
                                        <span className="input-group-text" id="basic-addon2">
                                                <div  onClick={toggleCPassword}>
                                                    {cpasswordShown ?
                                                        <i className="fas fa-eye"></i>
                                                        :
                                                        <i className="fas fa-eye-slash"></i>
                                                    }
                                                </div>
                                            </span>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button> <br/>  <br/>
                                <Link to={To_Login}> Already Have Account</Link> &nbsp; &nbsp; &nbsp; <Link to={'/'}> Forget Password ?</Link>
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
export default Register
