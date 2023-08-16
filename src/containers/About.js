import React from "react";
import AboutImg from "../assets/images/about_us.png";

const About = () => {
    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12 text-center pb-5"}>
                        <div className="nine">
                            <h1>About US<span>Umme Abdullah's Gluten Free</span></h1>
                        </div>
                    </div>
                    <div className={"col-md-6 text-center"}>
                        <img src={AboutImg} width={"80%"}/>
                    </div>
                    <div className={"col-md-6 text-center"}>
                        <p style={{width:"80%",fontSize:"20px",marginTop:"20px"}}>
                            Trust, honesty and integrity. These are the three principles our business is built on. By producing the very best in whole grain foods, we’re able to fulfill our commitment to help look after more and more people through better nutrition Umme Abdullah was developed to bring tasty, good for you breads and many more things to the market. Often people avoid bread or feel poorly after having a sandwich and this may be due to sensitivities to wheat or gluten But at Umme Abdullah it wasn’t enough to just create products that were just free from gluten and wheat, instead, we set out to develop a range of products that are free from all major allergens, that taste just as good as good as the normal conventional bread products AND have exceptional nutrition. Since using real, whole ingredients is the best way to bake, our products have an impressive list of high-quality, non-GMO ingredients. Whether it’s deriving protein and fiber from whole peas, apples and potatoes or using a unique blend of buckwheat and corn flours to provide gluten-like pliability, you’ll be impressed by our list of ingredients. Umme Abdullah’s products are not only high fiber and low fat, they’re also calorie-responsible.
                        </p>
                    </div>
                </div>
            </div>

            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12 text-center pb-5"}>
                        <div className="nine">
                            <h1>JOIN UMME ABDULLAH'S CLASSES<span>Umme Abdullah's Gluten Free</span></h1>
                        </div>
                    </div>
                    <div className={"col-md-6 text-center"}>
                        <p style={{width:"80%",fontSize:"20px",marginTop:"20px"}}>
                            Trust, honesty and integrity. These are the three principles our business is built on. By producing the very best in whole grain foods, we’re able to fulfill our commitment to help look after more and more people through better nutrition Umme Abdullah was developed to bring tasty, good for you breads and many more things to the market. Often people avoid bread or feel poorly after having a sandwich and this may be due to sensitivities to wheat or gluten But at Umme Abdullah it wasn’t enough to just create products that were just free from gluten and wheat, instead, we set out to develop a range of products that are free from all major allergens, that taste just as good as good as the normal conventional bread products AND have exceptional nutrition. Since using real, whole ingredients is the best way to bake, our products have an impressive list of high-quality, non-GMO ingredients. Whether it’s deriving protein and fiber from whole peas, apples and potatoes or using a unique blend of buckwheat and corn flours to provide gluten-like pliability, you’ll be impressed by our list of ingredients. Umme Abdullah’s products are not only high fiber and low fat, they’re also calorie-responsible.
                        </p>
                    </div>
                    <div className={"col-md-6 text-center"}>
                        <img src={AboutImg} width={"80%"}/>
                    </div>
                </div>
            </div>


        </>
    )
}
export default About