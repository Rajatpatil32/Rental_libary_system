import {useSearchParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
function Payment() {
    const [searchParams,setSearchParams] = useSearchParams();
    const name = searchParams.get('user');
    const price = searchParams.get('price');

    const [data,setdata] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/seller").then((result)=>{
            result.json().then((resp)=>{
                setdata(resp)
            })
        })
    },[])
    return(
        <div style={{margin: "1500px 450px 200px 350px",border: "5px outset black"}} >
            <h1 style={{color: "red",background: "black",margin:"30px 100px 20px 130px"}}>{name}</h1>
            <div border = "1" style={{margin:"30px 50px 20px 100px"}}>
                
                    <h3>Book name = {name}</h3>
                    
                    <h4 style={{margin:"0 0 0 100px"}}>Price={price}</h4>
                    <button style={{margin: "10px 0 10px 60px"}}>Payment</button>
                
            </div>


        </div>
        
    )
}

export default Payment