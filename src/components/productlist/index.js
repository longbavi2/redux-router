import { useEffect, useState } from "react";
import "./style.scss"
import ProductItem from "../productItem";
function ProductList(){
    const [data ,setData]= useState([]);
    useEffect(()=>{
        const getApi = async()=>{
            const result = await fetch("https://dummyjson.com/products");
            const resultFinal= await result.json();
            return resultFinal.products;
        }
        const fetApi = async()=>{
            const result = await getApi();
            setData(result);
        }
        fetApi();
    },[])
    return (
        <>
         {data.length >0 && (<>
        <div className="product__list">
            {data.map(item => (
                <ProductItem key={item.id} item ={item}/>
            ))}
        </div>
        </>)}
        </>
    )
}
export default ProductList;