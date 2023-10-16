import React from 'react';
import signupImg from '../assets/signup.png'
import Template from '../components/Template';

const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        title="Join the millions learning to code with studyNation for free"
        desc1="Build skills for today tomorrow and beyond"
        desc2="Education tofuture-proof your career"
        image={signupImg}
        formtype="Signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Signup;