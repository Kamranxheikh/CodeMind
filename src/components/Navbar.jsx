import React from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from "../constants"
import { useState } from 'react'
import logo from "../assets/logo.png"


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <>
            
        
            <nav className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
              <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex  justify-between items-center'>
                    <div className="flex item-center  flex-shrink-0">
                    <img className='h-10 w-10 mr-2 ' src={logo} alt="logo" /> 
                    
                        
                    <span className='text-xl tracking-tight mt-2'>CodeMinds</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12 '>
                        {navItems.map((item, index) => (
                            <li key={index} className=''>
                                <a href={item.href} >{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center item-center space-x-12">
                        <a href='#' className=' px-3 py-2 border rounded-md'>Sign In</a>
                        <a href='#' className='bg-gradient-to-r from-red-500 to-purple-500 px-3 py-2 border rounded-md'>Create an account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar} className='flex items-center justify-center w-10 h-10 rounded-full bg-neutral-700/80 hover:bg-neutral-700/90'>
                        {mobileDrawerOpen? <X  /> : <Menu  />}

                        </button>
                    </div>
                </div>



              {mobileDrawerOpen && (
                  <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                     <ul>
                         {navItems.map((items, index) => (
                            <li key={index} className='py-4'>
                                <a href={items.href}>{items.label}</a>
                            </li>
                         ))}
                     </ul>
                     <div className='flex space-x-6'>
                        <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-red-500 0 to-purple-500  py-2 px-3 border rounded-md'>Create an account</a>

                         
                     </div>


                  </div>
              )}
              
            </div>
            </nav>

        </>
    )
}

export default Navbar
// const MyComponent = (parameters) => {
//     // You can have state or other logic here using hooks

//     return (
//         <>
//             <nav className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//                 <div className='container px-4 mx-auto relative text-sm'>
//                     <div className='flex  justify-between items-center'>
//                         <div className="flex item-center flex-shrink-0">
//                             <img className='h-10 w-10 mr-2' src="/public/asset/logo.png" alt="logo" />
//                             <span className='text-xl tracking-tight mt-2'>CodeMinds</span>
//                         </div>
//                         <ul className='hidden lg:flex ml-14 space-x-12'>
//                             {navItems.map((item, index) => (
//                                 <li key={index} className=''>
//                                     <a href={item.href}>{item.label}</a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };
