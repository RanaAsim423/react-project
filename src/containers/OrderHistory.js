import React, {useState,useEffect} from "react";
import {imageUrl, orderHistory} from "../controller/WebController";
import jwt_decode from "jwt-decode";

const OrderHistory = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const token = localStorage.getItem("token")
        const id = jwt_decode(token);
        const res = await orderHistory(id.userID)
        console.log(res.orders)
        setData(res.orders)
    }

    const list  = [...data].reverse().map((order,index)=>{
        return(
            <>
                <div className={"col-md-12 m-3"}>
                    <div className={"orderBody"}>
                        <h5>Order Number : {index+1}</h5>
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Sr.No #</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Product Link</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {order.orderDetails.map((d,index)=>{
                                return(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td><img src={`${imageUrl}/products/${d.Thumbnail}`} width={"60px"} /></td>
                                        <td>{d.Name}</td>
                                        <td>Link</td>
                                        <td>{d.Price}</td>
                                        <td>
                                            <span style={{padding:"10px 20px"}}>{d.cartQuantity}</span>
                                        </td>
                                        <td>{d.cartQuantity * d.Price}</td>
                                    </tr>
                                )
                            })
                            }
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={6}><strong>Delivery Charges</strong></td>
                                <td><strong>PKR {order.charges}</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={6}><strong>Total Price</strong></td>
                                <td><strong>PKR {order.total}</strong></td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </>
        )
    })
    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <h3>Order History</h3>
                    </div>

                    {list}

                </div>
            </div>
        </>
    )
}
export default OrderHistory