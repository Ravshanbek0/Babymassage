import React from 'react'

function Navbar() {
    const container_style = "container m-auto h-auto"
    return (
        <div className={`fixed w-full top-0 z-50  bg-custom-green rounded-xl border  border-custom-green-bold p-4 px-10`}>
            <div className={`${container_style} flex items-center justify-between`}>
                <div className='flex items-center'>
                    <div className='text-custom-blue text-4xl font-bold'>Logo</div>
                    <div className='text-base font-semibold flex gap-10 items-center ml-28'>
                        <li className='cursor-pointer'>Bosh sahifa</li>
                        <li className='opacity-60 cursor-pointer'>Qabul</li>
                        <li className='opacity-60 cursor-pointer'>Biz haqimizda</li>
                        <li className='opacity-60 cursor-pointer'>Bog’lanish
                        </li>
                        <li className='opacity-60 cursor-pointer'>Barchasi</li>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className='text-custom-orange text-base font-bold'>Kirish</button>
                    <button className='bg-custom-blue text-custom-white p-2 rounded-3xl px-6'>Ro’yxatdan o’tish</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar