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
  
  const HandleRandomSelect = () => {
    const items = isSpicy ? Spicy : NotSpicy;
    if(isSpicy === null){
      Swal.fire({
        title: "โปรดเลือกก่อนที่จะสุ่ม​ !!",
        icon: "warning"
      });
      return;
    }
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
    document.getElementById('my_modal_1').showModal();
  }
  
  return (
    <>
    <Navbar/>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
        <img className="w-80 mb-3 mx-auto" src={logo} alt="" />
          <h1 className="text-5xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold p-3">สุ่มอาหารตามสั่ง</h1>
          <div className="mt-5 p-2 text-slate-700">
            <label htmlFor="select">เลือก เผ็ด/ไม่เผ็ด</label>
          </div>
          <select className="select select-bordered w-full max-w-xs text-slate-700"
           onChange={(e) => setIsSpicy(e.target.value === 'spicy')}>
            <option disabled selected>
              โปรดเลือก
            </option>
            <option value="spicy">เผ็ด</option>
            <option value="not-spicy">ไม่เผ็ด</option>
          </select>
          <div className="mt-6">
            <button
              className="btn min-w-xs w-full"
              style={{ backgroundColor: '#fcb040', color: '#fff' }} 
              onClick={HandleRandomSelect}
            >
              สุ่มเลย
            </button>
            <dialog id="my_modal_1" className="modal text-slate-700">
              <div className="modal-box">
              <h3 className="font-semibold text-xl m-3">เมนูที่ได้</h3>
              <hr />
              <i class="fa-solid fa-bowl-food text-5xl m-3"></i>
              <p className="py-4 text-3xl font-semibold text-orange-400">{selectedItem}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-error text-white">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
