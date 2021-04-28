import React ,{useState,useEffect}from 'react'
import './Nav.css';

function Nav() {

    const [show,setShow] = useState(false);
     
    function transitionNavbar(e){
        if(window.scrollY<200) setShow(false)
        else setShow(true)
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar)
        return ()=>window.removeEventListener('scroll',transitionNavbar)
    },[])
    
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">

                <p className="nav__logo" style={{color:'red',fontWeight:700}}>NETFLIX</p>
                
                <img className="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXwln1rdOHgLr2ReYFs14TcS48Sms5mqam5JbyYWs6OIL34xSEnkqoPVGlL4na6MvMeg&usqp=CAU" alt=""/>

                
            </div>
        </div>
    )
}

export default Nav
