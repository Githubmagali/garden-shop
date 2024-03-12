"use client"
import { useCart } from  '@/app/context/cartProvider'
import Link from 'next/link';


function NavbarCart(){
    const { cart, totalCost } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


    return(
        <div className="flex fixed bottom-0 w-full py-4 bg-black bg-opacity-50 text-white justify-between px-4 ">
            <div className='flex gap-x-3'>
            <p><i class='bx bx-cart-add'></i> {totalItems}</p>
            <p>Total Cost: ${totalCost}</p>
            </div>
            <div>
                <p>Open to cart</p>

            </div>

        </div>
    )
}

export default NavbarCart