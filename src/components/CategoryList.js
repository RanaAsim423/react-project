import React, {useState,useEffect} from "react";
import Carousels from "react-multi-carousel";
import {Link} from "react-router-dom";
import {getAllCategoriescard, imageUrl} from "../controller/WebController";
const CategoryList = () => {
    const [category,setCategory] = useState([{}]);
    useEffect(() => {
        getAllCategoriesHome()
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const getAllCategoriesHome = async () => {
        const res = await getAllCategoriescard();
        setCategory(res.categories)
    }
    const list = [...category].reverse().map((cat,index)=>{
        return(
            <>
                <div id="cards_landscape_wrap-2" style={{margin:"30px"}}>
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <Link to={"/"}>
                                    <img src={`${imageUrl}/categories/${cat.CategoryImg}`} alt=""/>
                                </Link>
                            </div>
                            <div className="text-container" >
                                <h6>{cat.CategoryName}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return(
        <>
            <Carousels swipeable={true} draggable={false} showDots={true} responsive={responsive} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={4000} keyBoardControl={true} customTransition="all .8" transitionDuration={800} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
                {list}
            </Carousels>
        </>
    )
}
export default CategoryList