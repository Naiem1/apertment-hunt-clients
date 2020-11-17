import React, { useState } from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Login = () => {

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        password: '',


    });
    console.log(user);
    const handleBlur = (e) => {
        var isFieldValid = true;
        

        if (e.target.name == 'name') {

        }
        
        console.log(e.target.name, e.target.value);
        console.log(e.target.value)
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === 'password') {
            console.log(e.target.value);
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && isPasswordHasNumber);
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);


        }
    }


    const handleSubmit = (e) => {

        setUser({ ...user, name: user.firstName + " " + user.lastName });
        console.log(user);

        e.preventDefault();
    }

    return (
        <div className='login-container'>
            <div className='row justify-content-center m-4'>
                <div className='login'>
                    <h5>{newUser ? 'Create an account' : 'Login'}</h5>
                    <form action="">
                        {newUser && <>
                            <input onBlur={handleBlur} name="firstName" type="text" placeholder="First name" required />
                            <input onBlur={handleBlur} name="lastName" type="text" placeholder="Last name" required /> </>
                        }
                        <input onBlur={handleBlur} name="email" type="email" placeholder='Email' required />
                        <input onBlur={handleBlur} name="password" type="password" placeholder="Password" required /><br/>
                        {!newUser && <span>Forgot password</span>}
                        {newUser && <input onBlur={handleBlur} type="password" placeholder='Confirm password' required />} <br/>
                        <input onClick={handleSubmit} type="submit" value={newUser ? 'Create an account' : 'Login'} />
                    </form>
                    <p className='text-center'>
                        {newUser && 'Already have an account?'} 
                        <span  onClick={handleSubmit} onClick={() => setNewUser(!newUser)}>{newUser ? 'Login' : 'Create an account' }</span> 
                    </p>
                </div>
            </div>

            <div className='row justify-content-center m-4'>
                <div>
                    <div className='row social-account'>
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="col-auto text-center">
                            <p>Continue with Facebook</p>
                        </div>
                    </div>
                    <div className='row social-account mt-3'>
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className="col-auto text-center">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;