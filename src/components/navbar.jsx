"use client"
import Link from "next/link";
import { items } from "@/assets/shop";



function Navbar() {
    return (<>
        <div className="flex gap-x-20 pt-9 pl-10 shadow shadow-lg shadow-slate-500 w-full justify-between items-center">
        <div className="flex gap-x-20">
            <Link href="/contact" className="text-sm  py-2 ">Contact</Link>
            <Link href="/about" className="text-sm  py-2 ">About</Link>
            <div className="relative mb-4">
                <select
                    className=" w-full cursor-pointer py-2 text-sm placeholder:text-gray-500"
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
                <i className='bx bx-cart text-3xl pr-8'></i>
           
        </div>

    </>);
}

export default Navbar;
