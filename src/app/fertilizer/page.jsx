import { fertileShop} from "@/assets/shop"
import Link from "next/link"

export default function Fertilizer(){

    return(
        <div className="flex flex-col items-center">
             <h1 className=" py-20 text-3xl">What fertilizer to use?</h1>
            <div className="grid grid-cols-4 gap-y-10 gap-x-10 ">
               
                {fertileShop.map((item, index)=>(
                    <div className="grid-col-1" key={index}>
                        <Link href="/fertilizer/[fertilizerId]" as={`/fertilizer/${item.id}`} passHref>
                        <img src={item.img} className="w-64 h-20 object-cover"/>
                        <h1 className="text-center text-xl">{item.name}</h1>
                        <p className="text-center text-gray-500">{item.quantity}</p>
                        </Link>

                    </div>

                ))}
                

            </div>

        </div>
    )
}