"use client"
import { flowersShop } from "@/assets/shop"
import { useCart } from "@/app/context/cartProvider"
import NavbarCart from "@/components/cart"
import Link from "next/link"

function Plants() {

    const {cart, addToCart, removeFromCart, getItemQuantity } = useCart()

    return (<>
      <div className="flex justify-between pt-8 pl-3">
    <Link href="/shop/trees" className="underline  decoration-solid"><i class='bx bx-left-arrow-alt'></i>Trees</Link>
    <Link href="/shop/fertileLand" className="underline  decoration-solid">Fertile section <i class='bx bx-right-arrow-alt'></i></Link>
    </div>
        <div className="lg:grid lg:grid-cols-4 pt-20 pb-10 fade-in ">

            {flowersShop.map((item) => (
                

                    <div key={item.id} className="lg:grid-cols-1 flex flex-col justify-center items-center">
                        <img src={item.img}
                            className={`w-56 h-56 object-cover shadow shadow-lg shadow-slate-500 ${item.soldOut ? "filter grayscale opacity-80" : ""}`}
                        />
                        <h1 className="text-gray-500 pt-3">{item.name}</h1>
                        <p className="text-gray-400"> ${item.price}</p>
                        {getItemQuantity(item.id) > 0 ? (
                            <div div className="flex gap-x-3 items-center justify-center">
                                <button onClick={() => addToCart(item)} className="bg-gray-300 rounded rounded-full px-2">+</button>
                                <p className="text-xs text-center">{getItemQuantity(item.id)}</p>
                                <button onClick={() => removeFromCart(item.id)}  className="bg-gray-200 rounded rounded-full px-2">-</button>
                            </div>
                        ) : (
                            <button onClick={() => addToCart(item)}
                                className={`border-2 rounded rounded-md border-gray-300 px-1 mb-3 hover:bg-gray-300 hover:text-white ${item.soldOut ? "hidden" : ""}`}>Add cart</button>

                        )}


                    </div>
            ))}
              {cart.length > 0 &&  <NavbarCart />}
        </div >
   </> )
}

export default Plants