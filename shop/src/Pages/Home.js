import DocumentTitle from "./Component-Title";

function Home() {
  DocumentTitle("Home/E-Shop");
    return ( 
        <>
  
  {/* Feature Start*/}
  <div className="feature">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-shield" />
            <h2>Trusted Shopping</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-shopping-bag" />
            <h2>Quality Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-truck" />
            <h2>Worldwide Delivery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-phone" />
            <h2>Telephone Support</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End*/}
  {/* Category Start*/}
  <div className="category">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="category-img">
            <img src="img/category-1.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="category-img">
            <img src="img/category-3.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
          <div className="category-img">
            <img src="img/category-4.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="category-img">
            <img src="img/category-2.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Category End*/}
  {/* Featured Product Start */}
  <div className="featured-product">
    <div className="container">
      <div className="section-header">
        <h3>Featured Product</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="row align-items-center product-slider product-slider-4">
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-1.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-2.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-3.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-4.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-5.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Featured Product End */}
  {/* Newsletter Start */}
  <div className="newsletter">
    <div className="container">
      <div className="section-header">
        <h3>Subscribe Our Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="form">
        <input type="email" defaultValue="Your email here" />
        <button>Submit</button>
      </div>
    </div>
  </div>
  {/* Newsletter End */}
  {/* Recent Product Start */}
  <div className="recent-product">
    <div className="container">
      <div className="section-header">
        <h3>Recent Product</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="row align-items-center product-slider product-slider-4">
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-2.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-4.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-6.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-8.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="product-item">
            <div className="product-image">
              <a href="product-detail.html">
                <img src="img/product-9.png" alt="Product Image" />
              </a>
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
                <a href="#">Phasellus Gravida</a>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Recent Product End */}
  {/* Brand Start */}
  <div className="brand">
    <div className="container">
      <div className="section-header">
        <h3>Our Brands</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="brand-slider">
        <div className="brand-item">
          <img src="img/brand-1.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-2.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-3.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-4.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-5.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Brand End */}
</>

     );
}

export default Home;