import { useEffect ,useState} from 'react'
// import React {useEffect} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

function getdate(obj) {
    var date = new Date(obj);
    var datesting = date.toGMTString();
    return datesting;
}

function Success() {
    const stripe = require('stripe')('sk_test_51QJq52K3k7jnYePVH4JYACD3KXr4kqXaHDSzRQQRMKmV4YgUSbVh44xulTYL8frPfg5ClfjzvkINmqU1i50X6R6l00QHOT7xH5');

    const navigate = useNavigate();
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const token = query.get('session_id')
    localStorage.setItem("sessionId", token)

    console.log(localStorage.getItem('sessionId'));

  
    


    const get_session_data = async () => {
        // const session =  await stripe.checkout.sessions.retrieve(token);
        const lineItems = await stripe.checkout.sessions.listLineItems(`${ localStorage.getItem("sessionId") }`);
        // console.log(lineItems.data)
        setoderList(lineItems.data)
        localStorage.setItem('productList',JSON.stringify(lineItems.data))
    }
    useEffect(() => {
        get_session_data()
    }, []);

    const [oderList, setoderList] = useState([]);

console.log(oderList);

    return (
        <>
            <div className='container' style={{ textAlign: 'center' }}>


                <div className="m-5 content">
                    <svg width="400" height="400">
                        <circle
                            fill="none"
                            stroke="#68E534"
                            stroke-width="20"
                            cx="200"
                            cy="200"
                            r="190"
                            strokeLinecap="round"
                            transform="rotate(-90 200 200)"
                            className="circle"
                        />
                        <polyline
                            fill="none"
                            stroke="#68E534"
                            points="88,214 173,284 304,138"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tick"
                        />
                    </svg>
                </div>
                <h1 className='alert alert-success'> Payment Success</h1>
                <button className='btn btn-success btn-block mb-5' onClick={() => { navigate("/products") }}>Shop more</button>
          
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
                          
                          {oderList.map((obj)=> (
                          <tr>
                            <td>{oderList.indexOf(obj)+1}</td>
                            <td>{obj.description}</td>
                            <td>{getdate(obj.price.created*1000)}</td>
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
        </>
    );
}

export default Success;