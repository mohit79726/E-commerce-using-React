import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ColorRing} from 'react-loader-spinner'

function SearchProducts() {
    const location = useLocation()
    const [sp, setSp] = useState([]);
    // const [sm, setsm] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${location.state.name}`)
        .then(res => res.json())
        .then((t)=> setSp(t.products));
    },[location.state.name]);

    console.log(sp);
    
    return ( 
        <>
{sp.length==0 && <>
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}

  />
  <h1 style={{display:"inline"}}>loading... </h1>
  </>
}


       <div className="container" style={{marginTop:"100px",paddingBottom:"100px"}}>
        <div className="row">

            
{sp.map((ty)=>(



<div className="col-lg-4">
  <div className="product-item">
    <div className="product-image">
      <Link to={`/productDetail/${ty.id}`}>
        <img src={ty.thumbnail} alt="Product Image" />
      </Link>
      <div className="product-action">
        <a href="#">
          <i className="fa fa-cart-plus" />
        </a>
        <a href="#">
          <i className="fa fa-heart" />
        </a>
        <a href="#">
          <i className="fa fa-search" />
        </a>
      </div>
    </div>
    <div className="product-content">
      <div className="title">
        <a href="#"> {ty.title}</a>
      </div>
      <div className="ratting">
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
      </div>
      <div className="price">
        {ty.price}<span>$25</span>
      </div>
    </div>
  </div>
</div>

) )}

        </div>
       </div>
        </>
     );
}

export default SearchProducts;