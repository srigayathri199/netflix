import React from 'react'
import './ProfileScreen.css';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
import Nav from '../Nav';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
           <Nav /> 
           <div className="profilescreen_body">
               <h1>Edit Profile</h1>
               <div className="profilescreen_info">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXwln1rdOHgLr2ReYFs14TcS48Sms5mqam5JbyYWs6OIL34xSEnkqoPVGlL4na6MvMeg&usqp=CAU" alt="" />
                   <div className="Profilescreen_details">
                       <h2>{user.email}</h2>
                       <div className="profilescreen_plans">
                           <h3>Plans(Current Plan: premium)</h3>
                           
                            <p>Renewal date: 21/07/2029</p>

                           
                            <div className="plan1">
                                <p>Netflix Standard<br></br><p>1080p</p></p>
                                <button className="sub">Subscribe</button>
                            </div>
        
                            <div className="plan2">
                                <p>Netflix Basic<br></br><p>480p</p></p>
                                <button className="sub">Subscribe</button>
                            </div>

                            <div className="plan3">
                                <p>Netflix Premium<br></br><p>4k+HDR</p></p>
                                <button className="current">Current Package</button>
                            </div>

                           <button onClick={()=>auth.signOut()} className="profilescreen_signout">
                               Sign Out
                            </button>

                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default ProfileScreen
