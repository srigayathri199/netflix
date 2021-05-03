import React,{useState} from 'react';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';

function LoginScreen() {
    const [signin,setsignin] = useState(false)
    return (
        <div className="Loginscreen">
            <div className="loginscreen__background">
                <h1 className="Logo" style={{color:'red'}}>NETFLIX</h1>

                <button className="sign_up">Sign In</button>

                <div className="Loginscreen__gradient"/>
            </div>

            <div className="loginscreen__body">
                {signin ? (<SignInScreen />)
                :(
                <div className="body_contents">

                    <h1 className="body_title">Unlimited films, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h2 className="h2">
                    Ready to watch? Enter your email to create or restart your membership.</h2>

                    <div className="loginscreen_input">
                    <form className="form_input">
                        <input type="email" name="email"placeholder="Email Address"></input>
                        <button onClick={()=>setsignin(true)} className="Loginscreen_submit">Get Started</button>
                    </form>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default LoginScreen
