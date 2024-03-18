"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { items } from "@/assets/shop";
import { useCart } from "@/app/context/cartProvider";



function Navbar() {

    const [isFakeDark, setIsFakeDark] = useState(false);

    useEffect(() => {
      if (isFakeDark) {
        document.documentElement.classList.add("fake-dark-mode");
      } else {
        document.documentElement.classList.remove("fake-dark-mode");
      }
    }, [isFakeDark]);
  


    const { cart } = useCart();

    // Calcula la cantidad total de artículos en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


    return (<>
     <button onClick={() => setIsFakeDark(prev => !prev)}>
        {isFakeDark ? "☀️" : "🌙"}
      </button>
        <div className="flex gap-x-20 pt-9 pl-10 shadow shadow-lg shadow-slate-500 w-full justify-between items-center">
        <div className="flex gap-x-20">
        <Link href="/" className="text-sm  py-2 "><i class='bx bx-leaf text-xl text-green-800'></i></Link>
            <Link href="/contact" className="text-sm  py-2 ">Contact</Link>
            <Link href="/about" className="text-sm  py-2 ">About</Link>
            <Link href="/fertilizer" className="text-sm  py-2 ">Fertilizer</Link>
            <div className="relative mb-4">
                <select
                    className={`w-full cursor-pointer py-2 text-sm placeholder:text-gray-500 ${isFakeDark ? 'fake-dark-mode' : ''}`}
                    onChange={(event) => {
                        const selectedItemId = parseInt(event.target.value);
                        const selectedItem = items.find((item) => item.id === selectedItemId);

                        if (selectedItem) {
                            window.location.href = selectedItem.href;
                        }
                    }}
                >
                    <option value="" >
                        Shop
                    </option>
                    {items.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            </div>
           <div className="flex items-center">
          
           <Link href="/cartShop" className="pr-4"> <i className='bx bx-cart text-xl pr-2'></i></Link>
           <p className="pr-4"> {totalItems}</p>
           </div>
              
         
           
        </div>

    </>);
}

export default Navbar;
