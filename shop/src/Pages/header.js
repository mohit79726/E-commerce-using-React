import { useEffect, useState } from "react";
import { Outlet, Link ,useLocation, useNavigate} from "react-router-dom";
import Slider from "react-slick";

function Header() {
  let location = useLocation()
  const navigate = useNavigate();
  const [search, setsearch] = useState("");

  const id = localStorage.getItem("data");
  const [cartDetails, setcartDetails] = useState(0);

  useEffect(()=> {
    if(id != null){
      // getting carts by user with id 5
fetch(`https://dummyjson.com/carts/user/${id}`)
.then(res => res.json())
.then((obj)=> {if (obj.carts.length>0) {
  setcartDetails(obj.carts[0].products.length)
}
else {
  setcartDetails(0)
}});
    }
  },[id])

  const getSearch = () => {
    navigate("/search",{state:{name:search}});
    //alert("Please enter");
  }
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
  };

    return ( 
        <>
        
  {/* Top Header Start */}
  <div className="top-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3">
          <div className="logo">
            <Link href="">
              <img src="img/logo.png" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="search">
            <input type="text" placeholder="Search" onChange={(e)=>setsearch(e.target.value)}  onKeyDown={(e)=> 
            {
              if(e.key == 'Enter' ) {
                getSearch();
              }
            }
            }  />
            <button onClick={getSearch}>
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="user">
            <div className="dropdown">
              <Link  className="dropdown-toggle" data-toggle="dropdown">
                My Account
              </Link>
              <div className="dropdown-menu">
                {localStorage.getItem("data") != undefined && ( <Link to="/myAccount" className="dropdown-item">
                  DhashBoard
                </Link>
              )}

              {localStorage.getItem("data") == undefined && (
                <>
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
                <Link to="/login" className="dropdown-item">
                  Register
                </Link>
                <Link to="/user" className="dropdown-item">
                 User  <img src="https://assets.dummyjson.com/public/img/icons/user.svg" alt="user img" />
                </Link>
                </>
              )}
              </div>
            </div>
            <div className="cart">
            <Link to="/cart">
              <i className="fa fa-cart-plus" />
              <span>({cartDetails})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Top Header End */}
  {/* Header Start */}
  <div className="header">
    <div className="container">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link href="#" className="navbar-brand">
          MENU
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav m-auto">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>

            <Link to="/Products" className="nav-item nav-link">
              Products
            </Link>
            
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu">
                <Link to="/products" className="dropdown-item">
                  Product
                </Link>

                {/* <Link to="/productDetail" className="dropdown-item">
                  Product Detail
                </Link> */}

                <Link to="/cart" className="dropdown-item">
                  Cart
                </Link>

                <Link to="/wishlist" className="dropdown-item">
                  Wishlist
                </Link>

                <Link to="/checkout" className="dropdown-item">
                  Checkout
                </Link>

                <Link to="/login" className="dropdown-item">
                  Login &amp; Register
                </Link>

                <Link to="/myAccount" className="dropdown-item">
                  My Account
                </Link>

              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact Us
            </Link>

          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Header End */}



{location.pathname=="/"  && 

  
  <Slider {...settings}>
                <div class="main-slider-item"><img src="img/slider-1.jpg" alt="Slider Image" /></div>
                <div class="main-slider-item"><img src="img/slider-2.jpg" alt="Slider Image" /></div>
                <div class="main-slider-item"><img src="img/slider-3.jpg" alt="Slider Image" /></div>
    </Slider>
}

  <Outlet />


</>



     );
}

export default Header;