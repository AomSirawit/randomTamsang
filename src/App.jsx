import "./App.css";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { useState } from "react";
import Spicy from './Spicy';
import NotSpicy from './NotSpicy';
import logo from './assets/logo.png';
import Swal from "sweetalert2";

function App() {
  const [selectedItem, setSelectedItem] = useState('');
  const [isSpicy, setIsSpicy]  = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const HandleRandomSelect = () => {
    if(isSpicy === null){
      Swal.fire({
        title: "โปรดเลือกก่อนที่จะสุ่ม !!",
        text: "คุณชอบเผ็ดหรือไม่ชอบเผ็ด?",
        icon: "question",
        confirmButtonColor: '#fb923c'
      });
      return;
    }

    setIsSpinning(true);
    
    // Simulate a "spinning" effect
    setTimeout(() => {
      const items = isSpicy ? Spicy : NotSpicy;
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
      setIsSpinning(false);
      document.getElementById('my_modal_1').showModal();
    }, 1500);
  }
  
  return (
    <div data-theme="cupcake" className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow flex items-center justify-center p-4 pt-24">
        <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-primary/10">
          <figure className="px-10 pt-5">
            <img src={logo} alt="Logo" className="rounded-xl w-32 animate-bounce-slow" />
          </figure>
          <div className="card-body items-center text-center p-6">
            <h1 className="card-title text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
              สุ่มอาหารตามสั่ง
            </h1>
            <p className="text-base-content/70 mb-4 text-sm">วันนี้กินอะไรดี? ให้เราช่วยคุณเลือกสิ!</p>
            
            <div className="form-control w-full max-w-xs mb-6">
              <label className="label py-1">
                <span className="label-text font-medium text-base">สไตล์ที่ต้องการ</span>
              </label>
              <select 
                className="select select-bordered select-primary w-full"
                onChange={(e) => setIsSpicy(e.target.value === 'spicy')}
                defaultValue="default"
              >
                <option value="default" disabled>
                  -- เลือกประเภทอาหาร --
                </option>
                <option value="spicy">🌶️ เมนูเผ็ดร้อน</option>
                <option value="not-spicy">🥦 เมนูไม่เผ็ด</option>
              </select>
            </div>

            <div className="card-actions w-full max-w-xs">
              <button
                className={`btn btn-primary w-full text-white shadow-lg transition-all duration-300 ${isSpinning ? '' : 'hover:scale-105 active:scale-95'}`}
                style={{ background: 'linear-gradient(45deg, #fb923c, #facc15)', border: 'none' }}
                onClick={HandleRandomSelect}
                disabled={isSpinning}
              >
                {isSpinning ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    กำลังสุ่ม...
                  </>
                ) : 'สุ่มเลย!'}
              </button>
            </div>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-base-100 border-4 border-primary">
                <h3 className="font-bold text-2xl mb-4">✨ เมนูที่ได้คือ... ✨</h3>
                <div className="py-8 flex flex-col items-center justify-center bg-primary/5 rounded-2xl mb-6">
                  <div className="text-6xl mb-4">🍱</div>
                  <p className="text-4xl font-bold text-primary animate-pulse">{selectedItem}</p>
                </div>
                <div className="modal-action flex justify-center">
                  <form method="dialog" className="w-full">
                    <button className="btn btn-primary text-white w-full text-lg">เย้! เอาเมนูนี้แหละ</button>
                  </form>
                </div>
                <p className="text-center mt-4 text-sm opacity-50">หรือจะสุ่มใหม่อีกรอบก็ได้นะ</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
