import React from "react";
import ProductCardAll from "../components/ProductCardAll";

const ProductListing = () => {
    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <div className={"four"}>
                            <h1><span>UMME ABDULLAH'S GLUTEN FREE</span> Top <em>Selling</em> Products</h1>
                        </div>
                    </div>
                    <div className={"col-md-12"}>
                        <div className={"row"} id="cards_landscape_wrap-2">
                            <ProductCardAll/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductListing