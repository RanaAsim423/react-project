import React,{useState,useEffect} from "react";
import CategoryList from "../components/CategoryList";
import Carousels from "react-multi-carousel";
import {getAllCategoriescard, imageUrl} from "../controller/WebController";
import {Link} from "react-router-dom";

const Categories = () => {
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
                <div className={"col-md-4"}>
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
                </div>
            </>
        )
    })
    return(
        <>
            <div className={"container ptb80"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <div className={"four"}>
                            <h1><span>UMME ABDULLAH'S GLUTEN FREE</span> Top <em>Selling</em> Categories</h1>
                        </div>
                    </div>
                    {list}
                </div>
            </div>
        </>
    )
}
export default Categories