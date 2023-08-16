import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {GetProductForHome,imageUrl} from "../controller/WebController"
import { NotificationManager} from 'react-notifications';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,selectCart,addQuantity } from '../redux/cartSlice'
import {To_Product_Details, To_Product_List} from "../helpers/Constants";
const ProductCard = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([]);
    const cart = useSelector(selectCart)
    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = async () => {
        const res = await GetProductForHome();
        setProduct(res.products);
    }
    const addToCard = async (productData) => {
        // 👇️ check if array contains object
        const isFound = cart.some(element => {
            if(element.id === productData._id) {
                return true;
            }
            return false;
        });
        if (isFound){
            const singleData = {
                id:productData._id,
                cartQuantity:1
            }
            await dispatch(addQuantity(singleData))
        }else{
                const singleData = {
                    id:productData._id,
                    Name:productData.ProductName,
                    Slug:productData.ProductSlug,
                    Price:productData.ProductPrice,
                    Thumbnail:productData.ProductThumbnail,
                    cartQuantity:1
                }
               await dispatch(addToCart(singleData))
        }
        NotificationManager.success('Success message', 'Product Add To Cart Successfully');
    }
    const list = [...product].reverse().map((pro, index)=>{
        return(
            <>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <Link to={To_Product_List+To_Product_Details+"/"+pro.ProductSlug}>
                                    <img src={`${imageUrl}/products/${pro.ProductThumbnail}`} alt=""/>
                                </Link>
                            </div>
                            <div className="text-container">
                                <h6>{pro.ProductName}</h6>
                                <div className={"btn btn-danger btn-cus"}>
                                    <i className="fas fa-money-bill-wave"></i> Price : PKR <strong>{pro.ProductPrice}</strong>
                                </div>
                                &nbsp;
                                <button className={"btn btn-danger btn-cus"} onClick={()=>{addToCard(pro)}}>
                                    Add To Card <i className="fas fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return(
        <>
            {list}
        </>
    )
}
export default ProductCard