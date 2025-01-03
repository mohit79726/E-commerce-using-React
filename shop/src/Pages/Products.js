import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ColorRing} from 'react-loader-spinner';
import DocumentTitle from "./Component-Title";

function Products() {
  const [product, setProduct] = useState([]);

  const [cat, setCat] = useState([]);

  const [skipCount, setskipCount] = useState(0);

  useEffect(()=> {
    fetch(`https://dummyjson.com/products?limit=10&skip=${skipCount}`)
    .then(res => res.json())
    .then((d)=>{setProduct(d.products)});
  },[skipCount])
  console.log(product);


  useEffect(()=> {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((c)=>{setCat(c)});
  },[])
  console.log(cat);

  DocumentTitle("Products/E-Shop");
    return ( 
        <>
  <div className="breadcrumb-wrap">
    <div className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Products</a>
        </li>
        <li className="breadcrumb-item active">product list</li>
      </ul>
    </div>
  </div>
  {/* Breadcrumb End */}
  
  {/* sort button sidebar canvas start */}
<div className="container mt-5">

  <button
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    Sort
  </button>
  <div
    className="offcanvas offcanvas-start"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        Offcanvas
      </h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
    <>
  {/* Shop Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-12 col-md-4">
        {/* Price Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="pr-3" style={{backgroundColor:"white",color:"black"}}>Filter by price</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-1"
              />
              <label className="custom-control-label" htmlFor="price-1">
                $0 - $100
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-2"
              />
              <label className="custom-control-label" htmlFor="price-2">
                $100 - $200
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-3"
              />
              <label className="custom-control-label" htmlFor="price-3">
                $200 - $300
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-4"
              />
              <label className="custom-control-label" htmlFor="price-4">
                $300 - $400
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-5"
              />
              <label className="custom-control-label" htmlFor="price-5">
                $400 - $500
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="pr-3 pt-3"style={{backgroundColor:"white",color:"black"}}>Filter by color</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="color-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Color
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-1"
              />
              <label className="custom-control-label" htmlFor="color-1">
                Black
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-2"
              />
              <label className="custom-control-label" htmlFor="color-2">
                White
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-3"
              />
              <label className="custom-control-label" htmlFor="color-3">
                Red
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-4"
              />
              <label className="custom-control-label" htmlFor="color-4">
                Blue
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-5"
              />
              <label className="custom-control-label" htmlFor="color-5">
                Green
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Color End */}
        {/* Size Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="pr-3 pt-3"style={{backgroundColor:"white",color:"black"}}>Filter by size</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">
                All Size
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-1"
              />
              <label className="custom-control-label" htmlFor="size-1">
                XS
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-2"
              />
              <label className="custom-control-label" htmlFor="size-2">
                S
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-3"
              />
              <label className="custom-control-label" htmlFor="size-3">
                M
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-4"
              />
              <label className="custom-control-label" htmlFor="size-4">
                L
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-5"
              />
              <label className="custom-control-label" htmlFor="size-5">
                XL
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
    </div>
  </div>
</>

    </div>
  </div>

  </div>
  {/* sort button sidebar canvas end */}

  {/* Product List Start */}
  <div className="product-view">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-8">
                  <div className="product-search">
                    <input type="email" defaultValue="Search" />
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-short">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Product short by
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">
                          Newest
                        </a>
                        <a href="#" className="dropdown-item">
                          Popular
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

{product.length==0 &&  <>
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
  </>}

{product.map((ty)=>(



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
                    <Link to={`/productDetail/${ty.id}`}> {ty.title}</Link>
                  </div>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="price">
                  ${Math.floor(ty.price-ty.price*(0.01*ty.discountPercentage))}<span>${ty.price}</span>
                  <p style={{color:"red"}}>{ty.discountPercentage}%off</p>
                  </div>
                </div>
              </div>
            </div>

) )}

            
          </div>
          <div className="col-lg-12">
            {/* <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled" onClick={()=> {setskipCount(skipCount-10)}}>
                  <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" onClick={()=> {setskipCount(0)}}>
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={()=> {setskipCount(10)}}>
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={()=> {setskipCount(20)}}>
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={()=> {setskipCount(skipCount+10)}}>
                    Next
                  </a>
                </li>
              </ul>
            </nav> */}
            <nav aria-label="Page navigation example">
  <ul class="pagination  justify-content-center">
    <li class="page-item"><a class="page-link" href="#"  tabIndex={-1}>Previous</a></li>
    <li className={`page-item ${skipCount == 0 ? "active" : ""}`}><a class="page-link" href="#"onClick={()=> {setskipCount(0)}}>1</a></li>
    <li className={`page-item ${skipCount == 10 ? "active" : ""}`}><a class="page-link" href="#"onClick={()=> {setskipCount(10)}}>2</a></li>
    <li className={`page-item ${skipCount == 20 ? "active" : ""}`}><a class="page-link" href="#"onClick={()=> {setskipCount(20)}}>3</a></li>
    <li className={`page-item ${skipCount == 10 ? "active" : ""}`}><a class="page-link" href="#"onClick={()=> {setskipCount(skipCount+10)}}>Next</a></li>
  </ul>
</nav>
          </div>
        </div>

        

       
        <div className="col-md-3">
          <div className="sidebar-widget category">
            <h2 className="title">Category</h2>
            <ul>
              {cat.map((ty)=>(


              <li>
                <Link to={`/caty/${ty.slug}`}>{ty.name}</Link>
                <span>(83)</span>
              </li>

              ))}
              
            </ul>
          </div>
          <div className="sidebar-widget image">
            <h2 className="title">Featured Product</h2>
            <a href="#">
              <img src="img/category-1.jpg" alt="Image" />
            </a>
          </div>
          <div className="sidebar-widget brands">
            <h2 className="title">Our Brands</h2>
            <ul>
              <li>
                <a href="#">Nulla </a>
                <span>(45)</span>
              </li>
              <li>
                <a href="#">Curabitur </a>
                <span>(34)</span>
              </li>
              <li>
                <a href="#">Nunc </a>
                <span>(67)</span>
              </li>
              <li>
                <a href="#">Ullamcorper</a>
                <span>(74)</span>
              </li>
              <li>
                <a href="#">Fusce </a>
                <span>(89)</span>
              </li>
              <li>
                <a href="#">Sagittis</a>
                <span>(28)</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-widget tag">
            <h2 className="title">Tags Cloud</h2>
            <a href="#">Lorem ipsum</a>
            <a href="#">Vivamus</a>
            <a href="#">Phasellus</a>
            <a href="#">pulvinar</a>
            <a href="#">Curabitur</a>
            <a href="#">Fusce</a>
            <a href="#">Sem quis</a>
            <a href="#">Mollis metus</a>
            <a href="#">Sit amet</a>
            <a href="#">Vel posuere</a>
            <a href="#">orci luctus</a>
            <a href="#">Nam lorem</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product List End */}


 

</>

     );
}

export default Products;