import { useState,useEffect } from "react";
import { useNavigate,useLocation, Link } from "react-router-dom";
import DocumentTitle from "./Component-Title";

function Cart() {
  const navigate = useNavigate();
  // let location = useLocation()
  const id = localStorage.getItem("data")
  const [usercart, setusercart] = useState([]);
  const [cartdetail, setcartdetail] = useState([]);
  const [error, seterror] = useState("");


  useEffect(()=> {
    {id == null && navigate("/login")}
    // console.log(id);
    if (id != undefined) {
    fetch(`https://dummyjson.com/carts/user/${id}`)
    .then(res => res.json())
  //.then(console.log)
    .then((d)=> {

      if(d.carts.length>0){
      setusercart(d.carts[0].products)
      setcartdetail(d.carts[0])}
      else{
        seterror("No items in the cart !")
      }
    });
    }
  },[id])




console.log(cartdetail);
console.log(usercart);
DocumentTitle("Cart/E-shop");
return ( 
  <>
  {}
  {/* Breadcrumb Start */}
  <div className="breadcrumb-wrap">
    <div className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Products</a>
        </li>
        <li className="breadcrumb-item active">Cart</li>
      </ul>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Cart Start */}
  <div className="cart-page">
    <div className="container">

  {error.length>0 ? <><h1 className="alert alert-danger">{error}</h1>
  <div class="d-grid gap-2">
  <Link to={"/products"} style={{backgroundColor:"#3F69AA"}} class="btn btn-primary w-100" type="button">Shop More</Link>
</div>
  </> : <>
  
  <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
      {usercart.map((obj)=> (

        
                <tr>
                  <td>
                    <a href="#">
                      <img src={obj.thumbnail} alt="Image" />
                    </a>
                  </td>
                  <td>
                    <a href="#">{obj.title}</a>
                  </td>
                  <td>${Math.floor(obj.price-obj.price*(0.01*obj.discountPercentage)) + " "}<span style={{textDecoration:"line-through"}}>{obj.price}</span>
                  <p style={{color:"red"}}>{obj.discountPercentage}%off</p></td>
                  <td>
                    <div className="qty">
                      <button className="btn-minus">
                        <i className="fa fa-minus" />
                      </button>
                      <input type="text" defaultValue={obj.quantity} />
                      <button className="btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </td>
                  <td> ${Math.floor(obj.price-obj.price*(0.01*obj.discountPercentage))*obj.quantity}</td>
                  <td>
                    <button>
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>

                 
) )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Code</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="cart-summary">
            <div className="cart-content">
              <h3>Cart Summary</h3>
              <p>
                Sub Total<span>${cartdetail.discountedTotal}</span>
              </p>
              <p>
                Shipping Cost<span>$0</span>
              </p>
              <h4>
                Grand Total<span>${cartdetail.discountedTotal}</span>
              </h4>
            </div>
            <div className="cart-btn">
              <button>Update Cart</button>
              <button type="button" onClick={()=> navigate("/checkout")}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
  </>}

    </div>
  </div>
  {/* Cart End */}
</>
     );
    
}

export default Cart;