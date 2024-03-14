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

            <div className="flex flex-col  border border-inherit  mr-10 gap-y-2">
                <div className="grid grid-cols-4 border-b gap-x-6 text-center p-4 text-gray-600">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Amount</p>
                    <p>Subtotal</p>
                </div>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-4 items-center text-center lg:w-96 lg:h-96 overflow-scroll" >
                        {cart.map((item, index) => (
                            <>
                                <p>{item.name}</p>
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


            <div className="grid grid-cols border border-inherit lg:w-96 lg:h-96 ">
                <h1 className=" text-center text-xl text-gray-700 py-3">Cart total</h1>
                {cart.length > 0 ? (<>
           
                    <p  className="text-center">Products: {totalItems}</p>
                    <p className="text-center">Shipment</p>
             
                   
                </>

                ) : (
                    <></>
                )}

                <p className="text-center">Total ${totalCost}</p>
            </div>

        </div>
    </>)
}

export default CartShop