import { useState,useEffect } from "react";
import { useNavigate,useLocation, Link } from "react-router-dom";
import DocumentTitle from "./Component-Title";

function Checkout() {
  const navigate = useNavigate();
  const id = localStorage.getItem("data")
  const [usercart, setusercart] = useState([]);
  const [cartdetail, setcartdetail] = useState([]);

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
      // else{
      //   seterror("No items in the cart !")
      // }
    });
    }
  },[id])

  DocumentTitle("Checkout/E-Shop");
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
          <a href="#">Products</a>
        </li>
        <li className="breadcrumb-item active">Checkout</li>
      </ul>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Checkout Start */}
  <div className="checkout">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="billing-address">
            <h2>Billing Address</h2>
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
                <label>Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="col-md-6">
                <label>Country</label>
                <select   defaultValue={'DEFAULT'} className="custom-select">
                  <option  value="DEFAULT" disabled>United States</option>
                  <option value="af">Afghanistan</option>
                  <option value="al">Albania</option>
                  <option value="alg"> Algeria</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="col-md-6">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="col-md-6">
                <label>ZIP Code</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ZIP Code"
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
                    Create an account
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="shipto"
                  />
                  <label className="custom-control-label" htmlFor="shipto">
                    Ship to different address
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="shipping-address">
            <h2>Shipping Address</h2>
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
                <label>Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="col-md-6">
                <label>Country</label>
                <select className="custom-select">
                  <option selected="">United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="col-md-6">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="col-md-6">
                <label>ZIP Code</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ZIP Code"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="checkout-summary">
            <h2>Cart Total</h2>
            <div className="checkout-content">
              <h3>Products</h3>
              {usercart.map((obj,item)=> (
                <div key={item}>
              <p>
                {obj.title}<span>${Math.floor(obj.price-obj.price*(0.01*obj.discountPercentage))*obj.quantity}</span>
              </p>
              </div>))}
              
              <p className="sub-total">
                Sub Total<span>${cartdetail.discountedTotal}</span>
              </p>
              <p className="ship-cost">
                Shipping Cost<span>$0</span>
              </p>
              <h4>
                Grand Total<span>${cartdetail.discountedTotal}</span>
              </h4>
            </div>
          </div>
          <div className="checkout-payment">
            <h2>Payment Methods</h2>
            <div className="payment-methods">
              <div className="payment-method">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="payment-1"
                    name="payment"
                  />
                  <label className="custom-control-label" htmlFor="payment-1">
                    Paypal
                  </label>
                </div>
                <div className="payment-content" id="payment-1-show">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt orci ac eros volutpat maximus lacinia quis
                    diam.
                  </p>
                </div>
              </div>
              <div className="payment-method">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="payment-2"
                    name="payment"
                  />
                  <label className="custom-control-label" htmlFor="payment-2">
                    Payoneer
                  </label>
                </div>
                <div className="payment-content" id="payment-2-show">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt orci ac eros volutpat maximus lacinia quis
                    diam.
                  </p>
                </div>
              </div>
              <div className="payment-method">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="payment-3"
                    name="payment"
                  />
                  <label className="custom-control-label" htmlFor="payment-3">
                    Check Payment
                  </label>
                </div>
                <div className="payment-content" id="payment-3-show">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt orci ac eros volutpat maximus lacinia quis
                    diam.
                  </p>
                </div>
              </div>
              <div className="payment-method">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="payment-4"
                    name="payment"
                  />
                  <label className="custom-control-label" htmlFor="payment-4">
                    Direct Bank Transfer
                  </label>
                </div>
                <div className="payment-content" id="payment-4-show">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt orci ac eros volutpat maximus lacinia quis
                    diam.
                  </p>
                </div>
              </div>
              <div className="payment-method">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="payment-5"
                    name="payment"
                  />
                  <label className="custom-control-label" htmlFor="payment-5">
                    Cash on Delivery
                  </label>
                </div>
                <div className="payment-content" id="payment-5-show">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt orci ac eros volutpat maximus lacinia quis
                    diam.
                  </p>
                </div>
              </div>
            </div>
            <div className="checkout-btn">
              <button>Place Order</button>

              <form action="http://localhost:1111/create-checkout-session" method="POST">
              <input type="text" name="total" value={JSON.stringify(cartdetail)} />
              <button type="submit">Checkout</button>
          </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Checkout End */}
</>

     );
}

export default Checkout;