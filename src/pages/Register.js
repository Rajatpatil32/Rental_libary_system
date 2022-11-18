import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import View from './View'
/* import { Button,Navbar,Nav} from 'react-bootstrap' */
import './Loginpage.css';
import Header from '../components/Header'
import { Button } from 'bootstrap';
function UserLogin() {
    const navigate = useNavigate();
    const [data, setdata] = useState("");
    const [log, setlog] = useState([]);
    const [password, setpass] = useState("");
    const [permission, setpermission] = useState(false);
    const [login, setlogin] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/seller").then((result) => {
            result.json().then((resp) => {
                setdata(resp)
            })
        })
    }, [])
    function getData(val) {
        setdata(val.target.value)
    }
    function getpass(val) {
        setpass(val.target.value)
    }


    function savedata() {
    let info = {data,password}
        fetch("http://localhost:3000/persons",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'content-Type':'application/json',
            },
            body:JSON.stringify(info)
        }).then((result) => {
            console.warn(result);
        })
    }
    return (
        <div >
            <Header />
            <div className="contant">
                <h1 style={{ margin: " 10px 150px", color: "red", background: "black" }}>Register Page</h1>
                <div className="data">
                    <h3>Username</h3>
                    <input type="text" placeholder="email" onChange={getData} className="form-control"></input>
                    <h3>Password</h3>
                    <input type="password" placeholder="user password" onChange={getpass} className="form-control" />
                    <br />
                    <br />
                    <button onClick={savedata} style={{background: "blue"}}>Register</button>
                </div>
                </div>
            </div>
    )
}

export default UserLogin;