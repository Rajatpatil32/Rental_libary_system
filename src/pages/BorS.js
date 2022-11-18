import {useNavigate} from 'react-router-dom'
import './Loginpage.css';
//import {useState} from 'react'

function BorS() {
    const navigate = useNavigate();
    const mystyle={
        margin: "20px 0 20px 50px",
        padding: "10px"
    };
    return(
        <div className='contant'>
            <h1 style={{margin: " 10px 100px",color : "red",background: "black"}}>Select your choice</h1>
            <div style={mystyle}>
                <button  onClick={()=>navigate('/buyerlogin')}>I am a buyer</button>
                <button onClick={()=>navigate('/userlogin')}>I am a seller</button>
            </div>
        </div>
    )
}

export default BorS