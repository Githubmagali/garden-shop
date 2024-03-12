import { flowersShop } from "@/assets/shop"

function Plants() {

    return (
        <div className="lg:grid lg:grid-cols-4 pt-20 pb-10 ">
            
            {flowersShop.map((item, index) => (
            <>

                <div className="lg:grid-cols-1 flex flex-col justify-center items-center" key={index}>
                    <img src={item.img} className="w-56 h-56 object-cover  shadow shadow-lg shadow-slate-500"/>
                    <h1 className="text-gray-500 pt-3">{item.name}</h1>
                    <p className="text-gray-400"> ${item.price}</p>
                    <button className="border-2 rounded rounded-md border-gray-300 px-1 mb-3 hover:bg-gray-300 hover:text-white ">Add cart</button>

                </div>
            </>

        ))
    }
        </div >
    )
}

export default Plants