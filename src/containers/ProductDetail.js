import React,{useCallback, useRef,useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getProductsDetail, imageUrl} from "../controller/WebController";
import Carousel from 'react-bootstrap/Carousel';
import {addQuantity, addToCart, deleteQuantity, removeQuantity, selectCart} from "../redux/cartSlice";
import {NotificationManager} from "react-notifications";
import {useDispatch, useSelector} from "react-redux";

const ProductDetail = () => {
    const {id} = useParams();
    const cart = useSelector(selectCart)
    const dispatch = useDispatch()
    const [pData,setPData] = useState({});
    useEffect(() => {
        getProductDetails(id)
    }, []);

    const getProductDetails = async (id) => {
        const res = await getProductsDetail(id);
        setPData(res.productDetails);
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

    const  convertToPlain = (html) => {

        // Create a new div element
        const tempDivElement = document.createElement("div");

        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;

        // Retrieve the text property of the element
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }



    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`${imageUrl}/products/${pData.ProductThumbnail}`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`${imageUrl}/products/${pData.ProductImage1}`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`${imageUrl}/products/${pData.ProductImage2}`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`${imageUrl}/products/${pData.ProductImage3}`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`${imageUrl}/products/${pData.ProductImage4}`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"detailsection"}>
                            <div className={"row"}>
                               <div className={"col-md-12 pb-3"}>
                                   <h4>Name: </h4>
                                   <span>{pData.ProductName}</span>
                               </div>
                                <div className={"col-md-8"}>
                                    <h6>Price: </h6>
                                    <span>{pData.ProductPrice}</span>
                                    <br/>
                                    <h6>Weight: </h6>
                                    <span>{pData.ProductWeight}</span>
                                    <br/>
                                    <h6>Quantity: </h6>
                                    <span>{pData.ProductQuantity}</span>
                                </div>
                                <div className={"col-md-4"}>
                                    <button className={"btn btn-danger btn-cus"} onClick={()=>{addToCard(pData)}}>
                                        Add To Card <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                                <div className={"col-md-12 pt-3"}>
                                    <span style={{fontWeight:"bolder"}}>Description</span>
                                    <p>
                                        {
                                            convertToPlain(pData.ProductDescription)
                                        }
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail