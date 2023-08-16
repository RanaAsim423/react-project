import React from "react";
import {addQuantity, selectCart, removeQuantity, deleteQuantity} from '../redux/cartSlice'
import {useDispatch, useSelector} from "react-redux";
import {imageUrl} from "../controller/WebController";
import { NotificationManager} from "react-notifications";
import {Link} from "react-router-dom";
import {To_Checkout, To_home, To_Login} from "../helpers/Constants";

const Cart = () => {
    const cart = useSelector(selectCart)
    const dispatch = useDispatch()
    const UserCheck = localStorage.getItem("token")
    const addQuantityonly = (id) =>{
        const isFound = cart.some(element => {
            if(element.id === id) {
                return true;
            }
            return false;
        });
        if (isFound){
            const singleData = {
                id:id,
                cartQuantity:1
            }
            dispatch(addQuantity(singleData))
        }
        NotificationManager.success('Success message', 'Product Quantity Add Successfully');

    }
    const removeQuantityonly = (id) =>{
        const isFound = cart.some(element => {
            if(element.id === id && element.cartQuantity > 1) {
                return true;
            }
            return false;
        });
        if (isFound){
            const singleData = {
                id:id,
                cartQuantity:1
            }
            dispatch(removeQuantity(singleData))
            NotificationManager.success('Success message', 'Product Quantity Remove Successfully');
        }else{
            const singleData = {
                id:id,
            }
            dispatch(deleteQuantity(singleData))
            NotificationManager.success('Success message', 'Product Remove Successfully');
        }
    }
    const deleteQuantityonly = (id) =>{
        const singleData = {
            id:id,
        }
        dispatch(deleteQuantity(singleData))
        NotificationManager.success('Success message', 'Product Remove Successfully');
    }
    const sum = cart.reduce((accumulator, object) => {
        return accumulator + object.cartQuantity * object.Price;
    }, 0);

    const list = cart.map((data,index) => {
        return (
            <tr>
                <th scope="row">{index+1}</th>
                <td><img src={`${imageUrl}/products/${data.Thumbnail}`} width={"60px"} /></td>
                <td>{data.Name}</td>
                <td>Link</td>
                <td>{data.Price}</td>
                <td>
                    <button onClick={()=>{addQuantityonly(data.id)}} className={"btn btn-danger btn-sm themeBtn"}><i className="fas fa-plus"></i></button>
                    <span style={{padding:"10px 20px"}}>{data.cartQuantity}</span>
                    <button onClick={()=>{removeQuantityonly(data.id)}} className={"btn btn-danger btn-sm themeBtn"}><i className="fas fa-minus"></i></button>
                </td>
                <td>{data.cartQuantity * data.Price}</td>
                <td className={"align-content-center"}>
                    <button className={"btn btn-danger btn-sm themeBtn"} onClick={()=>{deleteQuantityonly(data.id)}}>
                        <i  className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        )
    })
    return(
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12 ptb80"} style={{marginBottom:"150px"}}>
                        <h2 style={{margin:"20px 0px"}}>Cart</h2>
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
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={6}><strong>Total Price</strong></td>
                                    <td><strong>PKR {sum}</strong></td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className={"row"}>
                            <div className={"col-md-12"} style={{textAlign:"right"}}>
                                <Link to={To_home} className={"btn btn-danger themeBtn"}>Continue Shopping &nbsp;  <i className="fas fa-shopping-cart"></i></Link> &nbsp; &nbsp; &nbsp;
                                {UserCheck === null &&
                                    <Link to={To_Login} className={"btn btn-danger themeBtn"}>Login First To Checkout  &nbsp;<i className="fas fa-shopping-bag"></i></Link>
                                }
                                {UserCheck !== null &&
                                    <Link to={To_Checkout} className={"btn btn-danger themeBtn"}>Checkout  &nbsp;<i className="fas fa-shopping-bag"></i></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Cart