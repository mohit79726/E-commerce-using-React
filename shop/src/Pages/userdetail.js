import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./useDatail.css"
import DocumentTitle from "./Component-Title";

function UserDetail() {
    const [pD, setpD] = useState([]);

    let {id} = useParams();

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then((s)=> setpD(s));
    }, [])
    console.log(pD);

    DocumentTitle(`${pD.firstName}`);
    return ( 
        <>

<div className="page-content page-container ml-9" id="page-content">
  <div className="padding">
    <div className="row container d-flex justify-content-center">
      <div className="col-xl-6 col-md-12">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0"> 
            <div className="col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-white">
                <div className="m-b-25">
                  <img
                     src={pD.image}
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                </div>
                <h6 className="f-w-600" id="firstname">FirstName:{pD.firstName}</h6>
                <p>LastName:{pD.lastName}</p>
                <p>MaidenName:{pD.maidenName}</p>

                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                  Information
                </h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Age: {pD.age}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Gender: {pD.gender}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Email: {pD.email}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Phone: {pD.phone}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">UserName: {pD.username}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Password: {pD.password}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">BirthDate: {pD.birthDate}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">BloodGroup: {pD.bloodGroup}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Height: {pD.height}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Weight: {pD.weight}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">EyeColor: {pD.eyeColor}</p>
                  </div>
                  <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Hair Color:{pD.color},{pD.type}</p>
                  </div>
                </div>
                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                  Social Media
                </h6>
                <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <div className="contact-info">
              <div className="social"  style={{fontSize:"24px",display:"flex"}}>
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="">
                  <i className="fa fa-instagram" />
                </a>
                <a href="">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
                <ul className="social-link list-unstyled m-t-40 m-b-10">
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="facebook"
                      data-abc="true"
                    >
                      <i
                        className="mdi mdi-facebook feather icon-facebook facebook"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="twitter"
                      data-abc="true"
                    >
                      <i
                        className="mdi mdi-twitter feather icon-twitter twitter"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="instagram"
                      data-abc="true"
                    >
                      <i
                        className="mdi mdi-instagram feather icon-instagram instagram"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        
        </>
     );
}

export default UserDetail;