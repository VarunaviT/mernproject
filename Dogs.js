// import axios from "axios";
// import { useEffect, useState } from "react";
// import"../App.css";

// function Dogs(){
//   const [myData,setMyData]=useState([]);
//   useEffect(()=>{
//     axios.get("http://localhost:8082/product/dog").then((res)=>setMyData(res.data)
//   );
//   },[]);
//   return(
//     <>
//   {myData . map((post)=>{
//     const{id,title,subtitle,price,category}=post;
//     return <div className="card" key={id}>
//     <h2> {title }</h2>
//     <p>{subtitle}</p>
//     <p>{price}</p>
//     <p>{category}</p>
//     </div>
//   })}
//   </>
//   )
// }
// export default Dogs;

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
 function Dogs(){
const[arr,setArr]=useState([]);
const [kart, setKart] = useContext(UserContext);

  const AddToKart=(el)=>{
    setKart([...kart,el]);
    alert("added");
    alert(JSON.stringify(kart));

  }
 useEffect(()=>{
  axios.get("http://localhost:8082/product/dog").then((res)=>setArr(res.data)
  );
 },[]);

return (
  <>
    <Link to={"/kart"}>Show Kart</Link>
  <div>
    {arr.map((el) => {
const{id,title,subtitle,price,category}=el;



return <div className="card" style={{width: "40rem"}}key={id} >
        { <img src={'./img/dogacc1.webp'} class="card-img-top" alt="image"/> }
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">{subtitle}</h6>
          <p className="card-text"> Sale price: Rs.{price}</p>
          <p className="card-text"> Category: {category}</p>
          <button
          onClick={(ev) => {AddToKart(el);ev.preventDefault()}}
          className="btn btn-primary"
        >
          Add to Kart
        </button>
        </div>
      </div>
    })}
</div>
  </>
);


}

export default Dogs;