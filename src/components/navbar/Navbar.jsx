import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const container_style = "container m-auto h-auto"
    return (
        <div className={`fixed w-full top-0 z-50  bg-custom-green rounded-xl border  border-custom-green-bold p-3 xl:p-4 xl:px-10`}>
            <div className={`${container_style} flex items-center justify-between`}>
                <div className='flex items-center'>
                    <Link to={'/'} ><div className='text-custom-blue text-xl xl:text-4xl font-bold'>Logo</div></Link>
                    <div className='text-base font-semibold xl:flex gap-10 items-center ml-28 hidden'>
                        <NavLink className='cursor-pointer opacity-60' to={'/'}>Bosh sahifa</NavLink>
                        <NavLink className='cursor-pointer opacity-60' to={'/register'}>Qabul</NavLink>
                        <NavLink className='cursor-pointer opacity-60 no-active' to={'/'} >Biz haqimizda</NavLink>
                        <NavLink className='cursor-pointer opacity-60 no-active' to={'/'}>Bog’lanish</NavLink>
                        <NavLink className='cursor-pointer opacity-60 no-active' to={'/'}>Barchasi</NavLink>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    {/* <Link to={'/register'}><button onClick={(() => {
                        window.scrollTo({
                            top: 51
                        })
                    })} className='text-custom-orange text-sm font-bold xl:text-lg'>Kirish</button></Link> */}
                    <Link to={'/register'}><button onClick={(() => {
                        window.scrollTo({
                            top: 51
                        })
                    })} className='bg-custom-blue text-custom-white p-1 px-3 xl:text-lg rounded-3xl text-sm xl:px-6'>Ro’yxatdan o’tish</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar