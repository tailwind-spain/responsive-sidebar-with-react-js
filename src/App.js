import './App.css';
import React, {useState} from 'react';
import { AiFillAppstore} from "react-icons/ai";



function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
   {title : "Dashboard" , src: "Chart_fill", icon:"AiFillAppstore"},
   {title : "Inbox" , src: "Chat", icon: "AiFillAppstore"},
   {title : "Accounts" , src: "Uers", gap:true, icon: "AiFillAppstore"},
  ]
  return (
     <div className='flex'>
        <div className={`${open ? "w-72" : "w-20"} 
        duration-300 p-5 pt-8
        h-screen bg-dark-purple relative `}>
            <img  
              className={`absolute cursor-pointer -right-3 top-9 w-7 borde-dark-purple 
                        border-solid border-2 border-black
                        rounded-full ${!open && "rotate-180"}`}
             onClick={()=>setOpen(!open)}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JcbkTZVfniy4Z9ZU9jz7NiQ2cmFHmN5UNw&usqp=CAU" alt="" />
        
        
        <div className='flex gap-x-4 items-center'>
            <img 
               className={`cursor-pointer duration-500 w-20 ${open && "rotate-[360deg]"}`}
               alt=""
               src="https://www.eluniversal.com.mx/descuentos/static/shop/18633/logo/Nike.jpg" />
       
            <h1 className={`text-white origin-left font-medium text-x1 duration-300 ${!open && 'scale-0'}`}>Designer</h1>
       </div>

         <ul className='pt-6'>
               {Menus.map((menu, index)=>(
                  <li key={index} 
                      className={`text-gray-300 text-sm flex items-center 
                                 gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md
                                 ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-black'}
                                 `}>
                        <AiFillAppstore />
                        <span className={` ${!open && 'hidden'} `}> {menu.title} </span>
                  </li>
               ))}
         </ul>
        
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
            <h1>Home Page</h1>          
        </div>
     </div>
  );
}

export default App;
