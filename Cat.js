// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Outlet,Link } from "react-router-dom";
// export default function Cat(){
// const[arr,setArr]=useState([]);
//  useEffect(()=>{
//   productList();
//  },[]);
//  const productList=async()=>{

//   try {
//     const response = await axios.get("http://localhost:8083/products/cat");
//     setArr(response.data[0].prod);
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//   }
// };
// return (
//   <div>
//     {arr.map((el) => (
//       <div className="card ms-7" style={{ width:"18rem",margin: "10px" }} key={el.id}>
//         <div className="row g-0">
//           { <div className="col-md-4"> 
//             <img src={el.image} className="card-img" alt="transaction" />
//             </div> }
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-text">{el.id}</h5>
//               <p className="card-text">{el.title}</p>
//               <p className="card-text">{el.subtitle}</p>
//               <p className="card-text">{el.price}</p>
//               <Link to="/Update" className="btn btn-primary" ></Link> 
//               <button className="btn btn-primary"><Link to="/Remove" style={{textDecoration:"none",color:"white"}}>Remove</Link></button> 
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//      <Outlet/>
//   </div>
// );


//}


import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
 function Cat(){
const[arr,setArr]=useState([]);
const [kart, setKart] = useContext(UserContext);

  const AddToKart=(el)=>{
    setKart([...kart,el]);
    alert("added");
    alert(JSON.stringify(kart));

  }
 useEffect(()=>{
  axios.get("http://localhost:8082/product/cat").then((res)=>setArr(res.data)
  );
 },[]);

return (
  <>
    <Link to={"/kart"}>Show Kart</Link>
  <div>
    {arr.map((el) => {
const{id,title,subtitle,price,category}=el;


return <div className="card" style={{width: "40rem"}}key={id} >
        { <img src={'./images/dogacc4.webp'} class="card-img-top" alt="image"/> }
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

export default Cat;