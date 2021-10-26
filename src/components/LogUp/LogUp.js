import React, { useRef, useState } from 'react';
import Logo from '../../icon/Group 33072.png';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { useAuth } from '../Context/AuthContext';
import { useHistory, useLocation } from 'react-router-dom';

const LogUp = () => {
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState('');
    const { emailSignUp } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { from } = location.state || { from: { pathname: "/login" } };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('password not matched !')
        }
        try {
            setError('')
            await emailSignUp(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
            history.replace(from);
        }
        catch (err) {
            setError(err.message || err.code)
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
                        Create an account
                    </Typography>
                    <form className="login-form">
                        <input type="text" placeholder="name" ref={nameRef} required />
                        <input type="email" placeholder="email" ref={emailRef} required />
                        <input type="password" placeholder="password" ref={passwordRef} required />
                        <input type="password" placeholder="confirm-password" ref={passwordConfirmRef} required />
                        {
                            error && <p style={{ color: 'red', fontSize: '14px', marginBottom: '1rem' }}>{error}</p>
                        }
                        <button onClick={handleSubmit} type="submit">Create an account</button>
                        <p style={{ marginTop: '1rem', fontSize: '14px' }}>Already have an account? <Link to="/login" className="create-account">Login</Link></p>
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

export default LogUp;