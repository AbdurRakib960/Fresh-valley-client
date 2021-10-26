import React, {useState,useRef} from 'react';
import './LogIn.css';
import Logo from '../../icon/Group 33072.png';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { useAuth } from "../Context/AuthContext";
import { useHistory, useLocation } from 'react-router-dom';

const LogIn = () => {
    const history = useHistory();
    const location = useLocation();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error,setError] = useState('');
    const {emailSignIn} = useAuth()
    const { from } = location.state || { from: { pathname: "/checkOut" } };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try{
            setError('')
            await emailSignIn(emailRef.current.value, passwordRef.current.value);
            history.replace(from)
        }
        catch(err) {
            setError(err.message)
        }

    }
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Container fixed className="logo">
                <img src={Logo} alt="" />
            </Container>

            <div className="login-page">
                <div className="form">
                    <Typography className="title" variant="h6" gutterBottom component="div">
                        Login
                    </Typography>
                    <form className="login-form">
                        <input type="email" placeholder="username or email" ref={emailRef} />
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button onClick={handleSignIn}>login</button>
                        <p style={{marginTop: '1rem', fontSize: '14px'}}>Don't have an account? <Link to="/logup" className="create-account">create an account</Link></p>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                    </form>
                </div>
                <div className="separator">
                    <div className="line"></div>
                    <p>Or</p>
                    <div className="line"></div>
                </div>
                <div className="social-login">
                    <i className="icon"><BsFacebook /></i>
                    <p className="icon-title">Continue with facebook</p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;