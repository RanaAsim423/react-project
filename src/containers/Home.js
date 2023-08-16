import React, {useState} from "react";
import Slider1 from "../assets/images/slider1hh.png"
import Slider2 from "../assets/images/slider2h.png"
import Carousel from 'react-bootstrap/Carousel';
import AboutImg from "../assets/images/about_us.png"
import CategoryList from "../components/CategoryList";
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "../components/ProductCard";
const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return(
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-md-12 p-0"}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slider1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h2>Umme Abdullah's Gluten Free</h2> <br/>
                                    <h2 className={"h22"}>Homemade Cuisine</h2> <br/>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slider2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h2>Homemade Gluten Free</h2> <br/>
                                    <h2 className={"h22"}>Doughnut & Cakes</h2> <br/>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

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
                    <div className={"col-md-12"}>
                        <div className={"four"}>
                            <h1><span>UMME ABDULLAH'S GLUTEN FREE</span> Top <em>Selling</em> Products</h1>
                        </div>
                    </div>
                    <div className={"col-md-12"}>
                        <div className={"row"} id="cards_landscape_wrap-2">
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <section className="parallax1">
                <div className={"container ptb80"}>
                    <div className={"row"}>
                        <div className={"col-md-12"}>
                            <h2 className={"cheading"}>Best Categories We Deal's With</h2>
                        </div>
                        <div className={"col-md-12"}>
                            <CategoryList/>
                        </div>
                    </div>
                </div>
            </section>

            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12 text-center pb-5"}>
                        <div className="nine">
                            <h1>JOIN UMME ABDULLAH'S CLASSES<span>Umme Abdullah's Gluten Free</span></h1>
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

        </>
    )
}
export default Home