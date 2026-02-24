import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spicy from "./Spicy";
import NotSpicy from "./NotSpicy";

function Menu(){
    return(
    <div data-theme="cupcake" className="min-h-screen flex flex-col">
    <Navbar/>
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <header className="mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent p-2 mb-4">
              คลังเมนูทั้งหมด
            </h1>
            <p className="text-lg opacity-70">รวบรวมเมนูตามสั่งยอดฮิต ทั้งแบบเผ็ดและไม่เผ็ด</p>
          </header>

          <section className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">🌶️</span>
              <h2 className="text-3xl font-bold border-b-4 border-error pb-1">เมนูเผ็ดร้อน</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Spicy.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-error group">
                  <div className="card-body p-4 md:p-6 items-center text-center">
                    <p className="font-medium text-lg group-hover:text-error transition-colors">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">🥦</span>
              <h2 className="text-3xl font-bold border-b-4 border-success pb-1">เมนูไม่เผ็ด</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {NotSpicy.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-success group">
                  <div className="card-body p-4 md:p-6 items-center text-center">
                    <p className="font-medium text-lg group-hover:text-success transition-colors">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
    )
}
export default Menu;