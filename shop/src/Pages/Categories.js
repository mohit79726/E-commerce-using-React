import { useState,useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { useParams, Link } from "react-router-dom";
function Category() {
    const [caty, setCaty] = useState([]);
    let {cat} = useParams()

    useEffect(()=> {
        fetch(`https://dummyjson.com/products/category/${cat}`)
        .then(res => res.json())
        .then((c)=>{setCaty(c.products)});
      },[])
      console.log(caty);
    return ( 
     
        <>
        <div className="container" style={{marginTop:"100px",paddingBottom:"100px"}}>
        <div className="row">
            
        {caty.length==0 &&  <>
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}

  />
  {/* <h1 style={{display:"inline"}}>loading... </h1> */}
  </>}

        {caty.map((ty)=> 
           
            
    
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
       

     )}
     </div>
     </div>
      </>
    )
}


export default Category;