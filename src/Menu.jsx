import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spicy from "./Spicy";
import NotSpicy from "./NotSpicy";

function Menu(){
    return(
    <>
    <Navbar/>
      <div className="mt-24 text-slate-700">
        <div className="text-center">
        <h1 className="text-5xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold p-3">เมนูทั้งหมด</h1>
          <h2 className="text-3xl mt-5 underline">เผ็ด</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mx-5">
            {Spicy.map((item,index)=>(
                <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
                    {item}
                </div>
            ))}
          </div>
          <h2 className="text-3xl mt-5 underline">ไม่เผ็ด</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mx-5">
            {NotSpicy.map((item,index)=>(
                <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
                    {item}
                </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
    )
}
export default Menu;