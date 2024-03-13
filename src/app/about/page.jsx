import { itemsAbout } from "@/assets/about";

function About() {
    return (
        <div className="grid grid-cols-4 pt-40 pl-5 pb-40 fade-in">
            {itemsAbout.map((item, index) => (
                <div className="relative grid-cols-1 p-5" key={index}>
                    <div className="relative">
                        <img src={item.img} className="w-56 h-56 object-cover rounded-lg shadow shadow-lg shadow-slate-500" />
                        <p className="absolute bottom-0 left-0 w-56 text-white bg-black bg-opacity-50 py-3 rounded-b-lg text-center">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default About;
