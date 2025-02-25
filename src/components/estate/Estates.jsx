import { useEffect, useState } from "react";
import EstateDetails from "./EstateDetails";
import 'animate.css'

const Estates = () => {
    const [estate,setEstate]=useState([]);


    useEffect(()=>{
          fetch('RealEstate.JSON')
          .then((res)=>res.json())
          .then((data)=>setEstate(data))
          .catch((error)=>console.log(error));
    },[])



    return (
        <div id="thisone" className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mb-[40px] animate__slideInUp animate__animated">
             {
                  estate.map((aEstate)=> <EstateDetails key={aEstate.id} estate={aEstate}></EstateDetails>)
             }
        </div>
    );
};

export default Estates;