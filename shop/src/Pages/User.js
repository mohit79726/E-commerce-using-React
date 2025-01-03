import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "./Component-Title";

function User() {
    const [user, setuser] = useState([]);
    const [sort, setsort] = useState("");

    useEffect(()=> {
        fetch(`https://dummyjson.com/users${sort}`)
        .then(res => res.json())
        .then((d)=> setuser(d.users));
    },[sort])

    console.log(user);
  
    DocumentTitle("All-User/E-shop");
    return ( 
        <>
        <div className="container  mt-3">

        <select name="" id="" className="btn btn-primary" style={{backgroundColor:"#3F69AA"}} onChange={(e)=>{
        if(e.target.value=="ageASC"){
            return setsort("?sortBy=age&order=asc")
        } else  if(e.target.value=="ageDSC"){
            return setsort("?sortBy=age&order=desc")
        } else  if(e.target.value=="nameASC"){
            return setsort("?sortBy=firstName&order=asc")
        } else  if(e.target.value=="nameDSC"){
            return setsort("?sortBy=firstName&order=desc")
        } else {
            return setsort("")
        } 

      }}>
        <option value="all"> All</option>
        <option value="ageASC"> Asc age</option>
        <option value="ageDSC"> DSC age</option>
        <option value="nameASC"> Asc name</option>
        <option value="nameDSC"> Dsc name</option>
      </select>
</div>
  
        <div className="container" style={{marginTop:"70px",paddingBottom:"100px"}}>
        <div className="row">

        {user.map((user)=> (

        //     <div className="col-lg-4">
        //     <div className="product-item">
        //       <div className="product-image">
        //         <Link to={`/productDetail/${user.id}`}>
        //           <img src={user.image} alt="Product Image" />
        //         </Link>
        //       </div>
        //       <div className="product-content">
        //         <div className="title">
        //           <a href="#"> {user.title}</a>
        //         </div>
        //       </div>
        //     </div>
        //   </div>


        <div className="col-lg-4">
  <div className="product-item">
    <div className="product-image">
      <Link to={`/userDetail/${user.id}`}>
        <img src={user.image} alt="Product Image" />
      </Link>
      {/* <div className="product-action">
        <a href="#">
          <i className="fa fa-cart-plus" />
        </a>
        <a href="#">
          <i className="fa fa-heart" />
        </a>
        <a href="#">
          <i className="fa fa-search" />
        </a>
      </div> */}
    </div>
    <div className="product-content">
      <div className="title">
        <a href="#"> {user.title}</a>
      </div>
      {/* <div className="ratting">
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />    
      </div> */}
      <div className="price">
        {user.firstName}
        {user.lastName} 
        <br />
        {user.age} 

      </div>
    </div>
  </div>
</div>
        ))}
        </div>
        </div>
        </>
     );
}

export default User;