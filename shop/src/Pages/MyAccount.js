import React, { useState, useEffect } from "react";
import { useNavigate, useParams ,useLocation} from "react-router-dom";
import "./useDatail.css"
import DocumentTitle from "./Component-Title";

function getdate(obj) {
  var date = new Date(obj);
  var datesting = date.toGMTString();
  return datesting;
}

function MyAccount() {



  const navigate = useNavigate();

  const [pD, setpD] = useState([]);


  const [oderList, setoderList] = useState(JSON.parse(localStorage.getItem('productList')));


  console.log(localStorage.getItem('productList'));
  


  // const stripe = require('stripe')('sk_test_51Pms0TGtJl70aseuPKX9l7gdD4DYVNxfveXIs2RAn4zBZ0GQF1IzwEpz42ueu4I3MmR01J0lhfZ6eEGFgYmWQ9TY00R6TW57Qu');
  // console.log(stripe);
  

  // // const navigate = useNavigate();
  const location = useLocation();

  // const query = new URLSearchParams(location.search);
  // const token = query.get('session_id')
  // localStorage.setItem("sessionId", token)

  // console.log(localStorage.getItem('sessionId'));
  


  // const get_session_data = async () => {
  //     const lineItems = await stripe.checkout.sessions.listLineItems(`${ localStorage.getItem("sessionId") }`);
  //     setoderList(lineItems.data)
  //     console.log(lineItems.data);

      
  // }

  // useEffect(() => {
  //     get_session_data()
  // }, []);





  // let {id} = useParams();
  // localStorage.clear(id)
  const id = localStorage.getItem('data')

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then((s) => setpD(s));
  }, [])
  // console.log(pD);

  // console.log(localStorage.getItem('data'));

  
  // console.log(localStorage.getItem('sessionId'));


  DocumentTitle(`${pD.firstName}`);

  
  return (
    <>

      {id == undefined ? <h2 className="alert alert-danger">Login Again</h2> : <>
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
              <li className="breadcrumb-item active">My Account</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* My Account Start */}
        <div className="my-account">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="nav flex-column nav-pills"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="dashboard-nav"
                    data-toggle="pill"
                    href="#dashboard-tab"
                    role="tab"
                  >
                    Dashboard
                  </a>
                  <a
                    className="nav-link"
                    id="orders-nav"
                    data-toggle="pill"
                    href="#orders-tab"
                    role="tab"
                  >
                    Orders
                  </a>
                  <a
                    className="nav-link"
                    id="payment-nav"
                    data-toggle="pill"
                    href="#payment-tab"
                    role="tab"
                  >
                    Payment Method
                  </a>
                  <a
                    className="nav-link"
                    id="address-nav"
                    data-toggle="pill"
                    href="#address-tab"
                    role="tab"
                  >
                    address
                  </a>
                  <a
                    className="nav-link"
                    id="account-nav"    
                    // id="account-nav"
                    data-toggle="pill"
                    href="#account-tab"
                    role="tab"
                  >
                    Account Details
                  </a>
                  <a className="nav-link" onClick={() => { localStorage.clear("data"); navigate("/login"); window.location.reload(); }}>
                    Logout
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="dashboard-tab"
                    role="tabpanel"
                    aria-labelledby="dashboard-nav"
                  >
                    <h4>Dashboard</h4>
                    {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                condimentum quam ac mi viverra dictum. In efficitur ipsum diam,
                at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                Nulla tristique viverra nisl, sit amet bibendum ante suscipit
                non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu
                diam eros. Aliquam et sapien eget arcu rhoncus scelerisque.
              </p> */}
                    <div style={{ backgroundColor: "#3F69AA", display: "flex", margin: "30px", color: "white", padding: "30px", borderRadius: '20px', justifyContent: 'space-around' }}>
                      <div>
                        <img src={pD.image} alt="" style={{ float: 'right' }} />
                      </div>
                      <div>
                        <h3 style={{ color: "white" }}>{pD.firstName + " " + pD.lastName}</h3>
                        <p>Age : {pD.age}</p>
                        <p>Gender : {pD.gender}</p>
                        <p>Email : {pD.email}</p>
                        <p>Phone-No : {pD.phone}</p>
                        <p>Blood-Grp : {pD.bloodGroup}</p>
                        <p>Height : {pD.height} cm</p>
                        <p>Weight : {pD.weight} kg</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="orders-tab"
                    role="tabpanel"
                    aria-labelledby="orders-nav"
                  >
                    <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                          <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          {oderList?.map((obj)=> (
                          <tr>
                            <td>{oderList.indexOf(obj)+1}</td>
                            <td>{obj.description}</td>
                            <td>{getdate(obj.price.created * 1000)}</td>
                            <td>${obj.price.unit_amount / 100}</td>
                            <td>Approved</td>
                            <td>
                              <button onClick={()=> {
                                navigate(`/search`, {state: {name: obj.description}})
                              }}>View</button>
                            </td>
                          </tr>

))}

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="payment-tab"
                    role="tabpanel"
                    aria-labelledby="payment-nav"
                  >
                    <h4>Payment Method</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      condimentum quam ac mi viverra dictum. In efficitur ipsum diam,
                      at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                      Nulla tristique viverra nisl, sit amet bibendum ante suscipit
                      non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu
                      diam eros. Aliquam et sapien eget arcu rhoncus scelerisque.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="address-tab"
                    role="tabpanel"
                    aria-labelledby="address-nav"
                  >
                    <h4>Address</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Payment Address</h5>
                        <p>123 Payment Street, Los Angeles, CA</p>
                        <p>Mobile: 012-345-6789</p>
                        <button>Edit Address</button>
                      </div>
                      <div className="col-md-6">
                        <h5>Shipping Address</h5>
                        <p>123 Shipping Street, Los Angeles, CA</p>
                        <p>Mobile: 012-345-6789</p>
                        <button>Edit Address</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-tab"
                    role="tabpanel"
                    aria-labelledby="account-nav"
                  >
                    <h4>Account Details</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Mobile" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" placeholder="Address" />
                      </div>
                      <div className="col-md-12">
                        <button>Update Account</button>
                        <br />
                        <br />
                      </div>
                    </div>
                    <h4>Password change</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="password" placeholder="Current Password" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="New Password" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Confirm Password" />
                      </div>
                      <div className="col-md-12">
                        <button>Save Changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* My Account End */}
      </>
      }</>

  );
}

export default MyAccount;