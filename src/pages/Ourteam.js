import "./Loginpage.css"
import Header from "../components/Header";
function Ourteam() {
    return (

        <div>
            <Header/>
            <div className="alignment">

                <div style={{ float: "left", margin: "100px 0 0 0 " }}>
                    <img src="book1.jpg"></img>
                    <h5 style={{ margin: "20px" }}>Madhav Shivastava</h5>
                </div>
                <div style={{ float: "left", margin: "100px 0 0 30px " }}>
                    <img src="book1.jpg"></img>
                    <h5 style={{ margin: "20px 0 0 60px" }}>Rajat Patil</h5>
                </div>

                <div style={{ float: "left", margin: "100px 0 0 30px " }}>
                    <img src="book1.jpg"></img>
                    <h5 style={{ margin: "20px 0 0 40px" }}>Abhishekh vyas</h5>
                </div>
                <div style={{ float: "left", margin: "100px 0 0 30px " }}>
                    <img src="book1.jpg"></img>
                    <h5 style={{ margin: "20px 0 0 40px" }}>Harendra pratab</h5>
                </div>
            </div>
        </div>


    )
}

export default Ourteam;