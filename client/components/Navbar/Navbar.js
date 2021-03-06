import React from 'react'
import {menuStyle, userCard, dropdownStyle} from './menuStyle'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = ()=>{
    return(
        <div className="flex justify-around sm:justify-between px-px py-4 shadow-inner shadow-xl font-kanit relative z-50">
            <div className="flex my-auto sm:hidden"><ion-icon name="menu-outline" style={{'fontSize':'48px'}}></ion-icon></div>
            <div className="flex sm:ml-4">
                <Link to="/" className="flex">
                <svg className="w-12 h-12" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m469.334 34.133v341.333c0 18.848-15.285 34.133-34.133 34.133h-358.4c-28.273 0-51.2 22.911-51.2 51.2v-409.599c0-28.277 22.923-51.2 51.2-51.2h358.4c18.848 0 34.133 15.285 34.133 34.133z" fill="#ffebd2"/><path d="m430.934 0v337.067c0 18.848-15.285 34.133-34.133 34.133-390.099 0-362.221-.704-371.2 1.611v-321.611c0-28.277 22.923-51.2 51.2-51.2z" fill="#fff3e4"/><path d="m95.905 0v409.6h-19.104c-28.273 0-51.2 22.911-51.2 51.2v-409.6c0-28.277 22.923-51.2 51.2-51.2z" fill="#ea8692"/><path d="m469.334 247.467h-34.133c-23.564 0-42.667-19.102-42.667-42.667 0-23.499 19.038-42.667 42.667-42.667h34.133c9.426 0 17.067 7.641 17.067 17.067v51.2c0 9.426-7.641 17.067-17.067 17.067z" fill="#ffa4b8"/><path d="m469.334 375.467v136.533h-392.533c-45.85 0-68.119-55.523-36.203-87.403 9.259-9.269 22.059-14.997 36.203-14.997h358.4c18.848 0 34.133-15.285 34.133-34.133z" fill="#f2f2f2"/><path d="m358.401 110.933c0 48-76.8 85.333-76.8 85.333s-19.2-9.333-38.4-24.667c-18.953-15.132-38.4-36.52-38.4-60.667 0-23.567 18.336-42.667 40.96-42.667 15.424 0 28.856 8.875 35.84 22 7.125-13.39 20.943-22.37 36.88-21.983 22.179.578 39.92 19.479 39.92 42.651z" fill="#ea8692"/><g fill="#b2b2b2"><path d="m358.401 315.733h-153.6c-9.426 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067h153.6c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.067-17.067-17.067z"/><path d="m469.334 443.733v34.133h-392.533c-9.429 0-17.067-7.637-17.067-17.067 0-9.429 7.637-17.067 17.067-17.067h392.533z"/></g></svg>
                <span className="my-auto text-4xl ml-2 select-none">BoolEditor<hr className="border -mt-2"/><hr className="border mt-1"/></span>
                </Link>
                <div className="hidden sm:flex my-auto mx-2 text-xl text-blue-800">
                    <ul className="pt-4 flex">
                        <li className={menuStyle}><Link to="/Novelist">Novelist</Link></li>
                        <li className={dropdownStyle}>
                            <Dropdown content="Genre" list={
                                ['Action','Adventure','account setting']
                            }/></li>
                        <li className={menuStyle}><Link to="/Hot">Hot</ Link></li>
                        <li className={menuStyle}><Link to="/Lastest">Lastest</ Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="float-right hidden sm:block self-center">
                <p className={userCard}><Link to="/login">Login</Link></p>
                <p className={userCard}><Link to="/register">Register</Link></p>
            </div>
            <div className="flex my-auto sm:hidden"><ion-icon name="search-outline" style={{'fontSize':'24px'}}></ion-icon></div>

        </div>
    )
}

export default Navbar