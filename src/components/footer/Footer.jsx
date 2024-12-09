import React from 'react'

function Footer() {
    const container_style = "container m-auto h-auto"

    return (
        <div>
            <footer className='w-full bg-custom-footer pt-24 pb-6'>
                <div className={`${container_style} flex justify-between flex-wrap xl:flex-nowrap text-custom-white gap-8 p-8 items-start`}>
                    <div className='xl:w-1/4'>
                        <h1 className='text-custom-white xl:text-2xl text-sm mt-2 mb-2'>ABOUT COMPANY</h1>
                        <p className='opacity-60'>Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur feugiat</p>
                    </div>
                    <div className='xl;w-1/4 flex flex-col items-center'>
                        <h1 className='mt-2 mb-2'>Our Services</h1>
                        <ul className='flex flex-col opacity-60'>
                            <li>Online class</li>
                            <li>Baby care</li>
                            <li>Shop</li>
                            <li>Kids Playzone</li>
                            <li>Nurse</li>
                        </ul>
                    </div>
                    <div className='xl:w-1/4'>
                        <h1 className='mt-2 mb-2'>Our Services</h1>
                        <ul className='flex flex-col opacity-60'>
                            <li>Online class</li>
                            <li>Baby care</li>
                            <li>Shop</li>
                            <li>Kids Playzone</li>
                            <li>Nurse</li>
                        </ul>
                    </div>
                    <div className='xl:w-1/4'>
                        <h1 className='mt-2 mb-2'>Newsletter</h1>
                        <p className='opacity-60 mb-4'>Aplications prodize before front end ortals visualize front end</p>
                        <input className='bg-custom-black p-2 px-4 w-full outline-none' type="text" placeholder='Your email' />
                        <button className='w-full flex justify-center items-center bg-custom-yellow p-2 m-2 ml-0'>Join</button>
                    </div>
                </div>
                <hr className='bg-custom-hr opacity-60 h-0.5 w-5/6 m-auto' />
                <h1 className='text-center text-custom-white opacity-60 mt-6'>Powerd by "Baby massage"</h1>
            </footer>
        </div>
    )
}

export default Footer