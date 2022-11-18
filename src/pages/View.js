import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Payment from './Payment'
import { useSearchParams } from 'react-router-dom'
function View() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    
    const pass = searchParams.get('password');
    const navigate = useNavigate();
    const [data, setdata] = useState([])
    
    const [bookdata, set] = useState("")
    const [price, setcount] = useState("")
    const [search,dosearch] = useState("")
    let loggin = false;
    useEffect(() => {
        fetch("http://localhost:3000/seller").then((result) => {
            result.json().then((resp) => {
                setdata(resp)
            })
        })
    }, [])
    
    function getsearch(val) {
        dosearch(val.target.value)
        (navigate('/view?user=' + { search }))
    }
    return (
        <div>
            <div>
                <input onchange={getsearch} style={{float:"right",margin:"10px 20px"}}></input>
            </div>
            
            <div>
                <h1>hello{name}!</h1>
                <table border="9">
                    <tbody>
                        <tr>
                            <td width="10%">Book price</td>
                            <td width="40%">email of user</td>
                            <td width="40%">Image</td>
                            <td>Book Name</td>
                        </tr>
                        {
                            data.map((data, index) =>
                                <tr key={index}>
                                    <td width="10%">{data.price}</td>

                                    <td width="40%">{data.email}</td>
                                    <td width="40%"><img src={data.book} alt="" /></td>
                                    <td>{data.bookname}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div style={{ margin: "10px 350px 10px 300px", border: "5px solid red" }}>
                    <h1 style={{ color: "red", background: "black" }}>Select Your Cardinals for book buying</h1>
                    <div style={{ margin: "10px 0 10px 250px" }}>
                        <select onChange={(e) => set(e.target.value)}>
                            <option>Choose your fab. one</option>
                            {
                                data.map((data, index) =>
                                    <option>{data.bookname}</option>
                                )
                            }
                        </select>
                    </div>
                    <div style={{ margin: "10px 0 10px 300px" }}>
                        <select onChange={(e) => setcount(e.target.value)}>
                            {
                                data.map((data) =>
                                    <option>{data.price}</option>)

                            }
                        </select>
                    </div>
                    <button style={{ margin: "10px 0 10px 220px" }} onClick={() => navigate('/payment?user=' + bookdata + '&price=' + price)}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default View;