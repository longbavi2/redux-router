import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../productCart";
var TongTien = 0;
// var TongTien1 = 0;
function Cart(){
    const result = useSelector(state => state.product)
    const arrResult=result.map(item => {
        const PriceNew = (item.data.price - (item.data.price)*(item.data.discountPercentage)/100).toFixed(0); 
        const Tong = PriceNew*(item.quantity)
        return Tong;
    });
    // const arrTest =()=>{
    //     TongTien1=0;
    //     arrResult.forEach(item => {
    //         TongTien1 +=item;
    //     });
    //     return TongTien1;
    // }
    // console.log(arrTest())
    const Price =()=>{
        const arrFinal = arrResult.reduce((item,tong)=>{
            tong +=item;
            TongTien=tong;
             return TongTien
        },0)
        return arrFinal;
    }
    const PriceFinal =Price();
    return (
        <>
           {result.length > 0 ? (
            <>
            <div style={{marginBottom:"5px"}}>
                    Tổng Tiền :
                    {TongTien > 0 ? (<>{PriceFinal}$</>) : (<>0 $</>)}
                </div>
            {result.map(item =>(
                <ProductCart item={item} key={item.id}/>
            ))}
            </>
           ):(<>Chưa có gì</>)}
        </>
    )
}
export default Cart;
