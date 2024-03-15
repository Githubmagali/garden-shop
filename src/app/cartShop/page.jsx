"use client"
import { useCart } from "../context/cartProvider"
import { useState } from "react"
import Link from "next/link";


function CartShop() {

    const { cart, totalCost, getItemQuantity, getItemTotalPrice } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (<>
        <div className="pt-4 pl-3">
            <Link href="/shop/fertileLand"
                className="underline  decoration-solid "><i class='bx bx-left-arrow-alt'></i>Go back </Link>
        </div>

        <div className="flex items-center justify-center h-screen">

            <div className="flex flex-col  border border-inherit  mr-10 gap-y-2 ">
                <div className="grid grid-cols-4 border-b gap-x-6 text-center p-4 text-gray-600 ">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Amount</p>
                    <p>Subtotal</p>
                </div>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-4 items-center text-center lg:w-700 sm:w-auto h-96 overflow-x-scroll overflow-scroll pl-2 " >
                        {cart.map((item, index) => (
                            <>
                            <div className="flex items-center ">
                            <img src={item.img} className="lg:w-20 lg:h-20 sm:w-10 object-cover"/>
                                <p key={index} className="pl-2" >{item.name}</p>
                                </div>
                                <p>${item.price}</p>
                                <p>{getItemQuantity(item.id)}</p>
                                <p>${getItemTotalPrice(item.id)}</p>
                            </>

                        ))}
                    </div>
                ) : (
                    <p className="text-center p-20 py-18">No items in cart.</p>
                )}

            </div>


            <div className="grid grid-cols border border-inherit w-56 h-96  ">
                <h1 className=" underline decoration-inherit text-center text-xl text-gray-600 py-3">Cart total</h1>
              
                {cart.length > 0 ? (<>
           
                    <p  className="text-center">Products: {totalItems}</p>
                    <p className="text-center">Shipment</p>
             
                   
                </>

                ) : (
                    <></>
                )}

                <p className="text-center">Total ${totalCost}</p>
                <div className="text-center">
                <button className="bg-green-800 text-white py-3 px-4 hover:bg-green-700 rounded rounded-lg">Buy now</button>

                </div>
                
            </div>

        </div>
    </>)
}

export default CartShop