import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() { 
    const history = useHistory("");
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            history.push("/");
        }).catch((e)=>{
            if(
                e.message ==="The password is invalid or the user does not have a password."
            ){
                alert("Please check your credentials again");
            }else if(
                e.message === "There is no user record corresponding to this identifier. The use may have been deleted"
            ){
                alert("Please check your credentials again");
            }else{
                alert(e.message);
            }
        })
    }

    return(
        <div className="login">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login__logo"></img>
            <div className="login__container">
                <h3>Log In To Facebook</h3>
                <form>
                    <center>
                        <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}></input>
                    </center>
                    <center>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </center>
                    <center>
                        <button type="submit" className="login__login" onClick={login}>Log In</button>
                    </center>
                    <center>
                        <div className="sideinfo">
                            <h5>Forgotten Password ?</h5>
                            <h5 className="dot">.</h5>
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <h5 className="rtd">Sign up For Facebook</h5>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    )
}
export default Login;