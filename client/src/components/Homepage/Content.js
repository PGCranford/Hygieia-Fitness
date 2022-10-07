import React from 'react'
import { useNavigate } from 'react-router-dom';


function Content() {
    const navigate = useNavigate();
    const signup = () => {
        navigate("/signup");
    }
    return (
        <div className='header-content'>
            <div>

                <div className='overlay'></div>
            </div>
            <div className='content'>
                <h6>Build Your Fitness World <br /> By Building Your Body</h6>
                <button className='btn' onClick={signup}>Join Now</button>
            </div>
        </div>
    )
}

export default Content