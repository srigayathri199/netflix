import React,{useRef} from 'react'
import './SignInScreen.css';
import {auth} from '../firebase';

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef =useRef(null)
    // console.log(emailRef);

    const register=(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((user)=>console.log(user))
        .catch(err=>alert(err.message));
    }

    const signin=(e)=>{
        e.preventDefault();
         
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((user)=>console.log(user))
        .catch(err=>alert(err.message));
        
    }

    return (
        <div className="signupscreen">
            <form>
                <h1>Sign In</h1>
                <input autoComplete='on' ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={signin} type="submit">Sign In</button>

            <h4>
                <span className="signup_gray">New to Netflix?</span>
                <span onClick={register} className="signupscreen_link">Sign up now.</span>
            </h4>
            </form>
        </div>
    )
}

export default SignInScreen
