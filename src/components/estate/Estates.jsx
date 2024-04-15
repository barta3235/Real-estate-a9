import { useEffect, useState } from "react";
import EstateDetails from "./EstateDetails";

const Estates = () => {
    const [estate,setEstate]=useState([]);


    useEffect(()=>{
          fetch('RealEstate.JSON')
          .then((res)=>res.json())
          .then((data)=>setEstate(data))
          .catch((error)=>console.log(error));
    },[])



    return (
        <div id="thisone" className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mb-[40px]">
             {
                  estate.map((aEstate)=> <EstateDetails key={aEstate.id} estate={aEstate}></EstateDetails>)
             }
        </div>
    );
};

export default Estates;