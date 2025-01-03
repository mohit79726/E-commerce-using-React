import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DocumentTitle from "./Component-Title";

function Login() {
  let navigate = useNavigate()
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userdata, setuserdata] = useState([]);
  const [error, seterror] = useState("");

  const id = localStorage.getItem("data")

  useEffect(() => {
    if (id != null){
      navigate("/myAccount")
    }
  }, [id]);
  // useEffect(() => {
  //   localStorage.setItem('dataKey', JSON.stringify(userdata));
  // }, [userdata]);


  // const handlesubmit= ()=> {
  // //   fetch('https://dummyjson.com/user/login', {
  // //     method: 'POST',
  // //     headers: { 'Content-Type': 'application/json' },
  // //     body: JSON.stringify({
        
  // //       username: 'emilys',
  // //       password: 'emilyspass',
  // //       expiresInMins: 30, // optional, defaults to 60
  // //     })
  // //   })
  // //   .then(res => res.json())
  // //   .then(console.log);
  // // }
  // }

  DocumentTitle("Login/E-Shop");
    return ( 
        <>
  {/* Breadcrumb Start */}
  <div className="breadcrumb-wrap">
    <div className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">User</a>
        </li>
        <li className="breadcrumb-item active">Login</li>
      </ul>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Login Start */}
  <div className="login">
    <div className="container">
      <div className="section-header">
        <h3>User Registration &amp; Login</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="login-form">

              {error.length>0 && <h3 className="alert alert-danger">{error}</h3>}
            <div className="row">
              <div className="col-md-6">
                <label>E-mail / Username</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e)=> setusername(e.target.value)}
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6">
                <label>Password</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e)=> setpassword(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              <div className="col-md-12">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="newaccount"
                  />
                  <label className="custom-control-label" htmlFor="newaccount">
                    Keep me signed in
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn" onClick={()=> {
                     fetch('https://dummyjson.com/user/login', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        
                        username: username,
                        password: password,
                        expiresInMins: 30, // optional, defaults to 60
                      })
                    })
                    .then(res => res.json())
                    .then((obj)=> {
                      if('message' in obj) {
                        // seterror(obj.message)
                        seterror("username or password is wrong")
                      }
                      else {
                       navigate(`/myAccount/`)
                          localStorage.setItem('data',obj.id);
                      }
                    });
                }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="register-form">
            <div className="row">
              <div className="col-md-6">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6">
                <label>Last Name"</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-md-6">
                <label>E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-md-6">
                <label>Mobile No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Mobile No"
                />
              </div>
              <div className="col-md-12">
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Login End */}
</>

     );
}

export default Login;