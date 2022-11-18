import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import View from './View'
/* import { Button,Navbar,Nav} from 'react-bootstrap' */
import './Loginpage.css';
import Header from '../components/Header'
function Buyerlogin() {
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
    useEffect(() => {
        fetch("http://localhost:3000/persons").then((result) => {
            result.json().then((resp) => {
                setlog(resp)
            })
        })
    }, [])
    return (
        <div >
            <Header />
            <div className="contant">
                <h1 style={{ margin: " 10px 150px", color: "red", background: "black" }}>Buyer Login</h1>
                <div className="data">
                    <h3>user name</h3>
                    <input type="text" placeholder="email" onChange={getData} className="form-control"></input>
                    <h3>pass</h3>
                    <input type="text" placeholder="user password" onChange={getpass} className="form-control" />
                    <br />
                    <br />
                    
                </div>
                <div style={{margin: "0 100px 20px 150px",border: "5px inset yellow"}}>
                {
                    log.map((log) =>
                        (data == log.name && password == log.password) ? (navigate('/view?user=' + { data })) : <p>Login your account <span style={{ color: "red" }} > with correct it</span></p>)
                }
                </div>
            </div>
        </div>
    )
}

export default Buyerlogin