"use client"
import { useState, useEffect } from "react";
import { fertileShop} from "@/assets/shop"
import Link from "next/link";

export default function FertilizerId({params}){
    const [fertilizer, setFertilizer] = useState(null);

    useEffect(() => {
    
      const selectedFertilizer = fertileShop.find(fertilizer => fertilizer.id === parseInt(params.fertilizerId));
      setFertilizer(selectedFertilizer);
    }, [params.fertilizerId]);
  
    if (!fertilizer) {
      return <div>Cargando...</div>; 
    }

    return(
        <div className="flex pl-20 py-10">
            <img src={fertilizer.img} className="w-1/2 h-96 object-cover border rounded-lg"/>
            <div className="flex flex-col px-20">
                <p className="text-center text-xl">{fertilizer.name}</p>
                <p className="pt-10 text-gray-700">{fertilizer.components}</p>
                <p className="pt-10 text-gray-500 text-center">{fertilizer.description}</p>
                </div>
         
        </div>
    )
}