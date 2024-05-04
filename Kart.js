import { useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export default function Kart(){
    const [kart, setKart] = useContext(UserContext);
    alert(JSON.stringify(kart));
    //return <div>{kart.map((el)=><h1>{el.title+" "+el.subtitle+" "+el.price+" "+el.category}</h1>)}</div>;
     const placeorder=(()=>{
        axios.post("http://localhost:8082/order").then((user)=>setKart(user.data)
        );     
   },[]);
    return (
        <>
         <button onClick={placeorder}>Order
                
                </button>
        <div>
          {kart.map((el) => {
      const{id,title,subtitle,price,category}=el;
      
      return <div className="card" style={{width: "40rem"}}key={id} >
              {/* <img src={image} class="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">{subtitle}</h6>
                <p className="card-text"> Sale price: Rs.{price}</p>
                <p className="card-text"> Category: {category}</p>
                
              
              </div>
            </div>
          })}
         
      </div>
      
        </>
      );
      
} 
