import React from 'react'
import { FaPlay } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GrPlan } from "react-icons/gr";
import { FaAward } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

function Home() {
    const container_style = "container m-auto h-auto"

    return (
        <>
            <header className={`${container_style} overflow-hidden  flex mt-24 justify-between px-8 items-center`}>
                <div>
                    <h1 className='text-6xl font-semibold'>Katta sarlavhalar uchun <br />
                        <span className='text-custom-orange'>Asosiy mavzu</span></h1>
                    <p className='font-base opacity-60 mt-8 mb-8'>Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500 - <br />yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer  galleyni olib, kitob namunasini yaratish uchun shifrlagan.</p>
                    <button className='bg-custom-blue p-4 text-custom-white px-6 rounded-full'>Batafsil video</button>
                    <button className='bg-custom-orange rounded-full p-5 ml-2'><span className='text-custom-white'><FaPlay /></span></button>
                </div>
                <div>
                    <img className='object-contain' src="./imgs/home/header-hero.png" alt="" />
                </div>
            </header>
            <div className={`${container_style}`}>
                <section className='flex justify-between mt-8 p-4 w-4/5 bg-custom-white rounded-xl m-auto gap-2'>
                    <div className='flex w-1/4 items-center gap-4 bg-custom-tg px-5  text-custom-white rounded-lg'>
                        <img className='socails-img' src="./imgs/home/image 24.png" alt="" />
                        Telegram</div>
                    <div className='flex items-center gap-4 instagram-gradient text-custom-white px-5 w-1/4 rounded-lg'>
                        <img className='socails-img' src="./imgs/home/image 25.png" alt="" />
                        Instagram</div>
                    <div className='flex w-1/4 items-center gap-4 facebook-gradient text-custom-white px-5  rounded-lg'>
                        <img className='socails-img' src="./imgs/home/image 26.png" alt="" />
                        Facebook</div>
                    <div className='flex w-1/4 items-center gap-4 bg-custom-blue text-custom-white px-5 p-2  rounded-lg'>
                        <img className='socails-img' src="./imgs/home/image 27.png" alt="" />
                        Twitter</div>
                </section>
                <section className='w-4/5 mt-40 p-36 m-auto flex items-center justify-center relative'>
                    <img className='' src="./imgs/home/Ellipse 23.png" alt="" />
                    <h1 className='font-bold text-3xl absolute text-center'>Bizning <br /> qulayliklar</h1>
                    <div className='find-course rounded-full z-40 p-3 text-custom-black flex flex-col justify-center items-center top-0 absolute'>
                        <span className='rounded-full text-2xl text-custom-white bg-custom-orange p-5'><HiOutlineDocumentSearch className='text-lg' /></span>
                        <h1 className='text-xl font-bold'>Find your course</h1>
                        <p className='text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className='find-course rounded-full p-3 z-40  text-custom-black flex flex-col justify-center items-center left-0 absolute'>
                        <span className='rounded-full text-xl text-custom-white bg-custom-blue p-5'><GrPlan className='text-lg' /></span>
                        <h1 className='text-xl font-bold'>Find your course</h1>
                        <p className='text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className='find-course p-3 rounded-full z-40  text-custom-black flex flex-col justify-center items-center  right-0 absolute'>
                        <span className='rounded-full text-xl text-custom-white bg-custom-tg p-5'><FaBookOpen className='text-lg' /></span>
                        <h1 className='text-xl font-bold'>Find your course</h1>
                        <p className='text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className='p-3 find-course rounded-full z-40  text-custom-black flex flex-col justify-center items-center bottom-0 absolute'>
                        <span className='rounded-full text-xl text-custom-white bg-custom-green-bold p-5'><FaAward className='text-lg' /></span>
                        <h1 className='text-xl font-bold'>Find your course</h1>
                        <p className='text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </section>
            </div>
            <section className='bg-custom-back w-full h-auto mt-40 pt-2 pb-10'>
                <div className={`${container_style}`}>
                    <h1 className='text-custom-white text-center text-3xl ' >MUTAHASISLAR</h1>
                    <div className='flex justify-center gap-6 mt-10 p-3'>
                        <div className='bg-custom-white rounded-lg p-4 flex items-start gap-10'>
                            <img className='flex justify-center items-center' src="./imgs/home/Ellipse 79.png" alt="" />
                            <div className=''>
                                <h1 className='font-bold text-lg'>Iroda Karimova</h1>
                                <p className='opacity-60 mt-2 mb-2 text-sm'>Contrary to popular belief, Lorem Ipsum is  not simply random text. It has roots in a  piece of classical Latin literature from 45  BC, making it over 2000 years old.</p>
                                <button className='bg-custom-green-bold text-custom-white p-4 px-10 rounded-full mt-2'>Karimova haqida </button>
                            </div>
                        </div>
                        <div className='bg-custom-white rounded-lg p-4 flex items-start gap-10'>
                            <img className='flex justify-center items-center' src="./imgs/home/Ellipse 79.png" alt="" />
                            <div className=''>
                                <h1 className='font-bold text-lg'>Iroda Karimova</h1>
                                <p className='opacity-60 mt-2 mb-2 text-sm'>Contrary to popular belief, Lorem Ipsum is  not simply random text. It has roots in a  piece of classical Latin literature from 45  BC, making it over 2000 years old.</p>
                                <button className='bg-custom-green-bold text-custom-white p-4 px-10 rounded-full mt-2'>Karimova haqida </button>
                            </div>
                        </div>
                        <div className='bg-custom-white rounded-lg p-4 flex items-start gap-10'>
                            <img className='flex justify-center items-center' src="./imgs/home/Ellipse 79.png" alt="" />
                            <div className=''>
                                <h1 className='font-bold text-lg'>Iroda Karimova</h1>
                                <p className='opacity-60 mt-2 mb-2 text-sm' >Contrary to popular belief, Lorem Ipsum is  not simply random text. It has roots in a  piece of classical Latin literature from 45  BC, making it over 2000 years old.</p>
                                <button className='bg-custom-green-bold text-custom-white p-4 px-10 rounded-full mt-2'>Karimova haqida </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`${container_style} flex mt-10 justify-between p-8 px-6 gap-14 items-center`}>
                <div className='w-3/4'>
                    <h1 className='text-4xl font-semibold mb-8'>Lorem Ipsum is simply dummy text of the printing <span className='text-custom-orange'>and typesetting industry.</span> </h1>
                    <p className='text-sm'>Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer galleyni olib, kitob namunasini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o'zgarishsiz qoldi. U 1960-yillarda Lorem Ipsum parchalarini oʻz ichiga olgan Letraset varaqlarining chiqarilishi va yaqinda Aldus PageMaker kabi ish stoli nashriyot dasturlari, shu jumladan Lorem Ipsum versiyalari bilan ommalashgan.</p>
                    <div className='w-2/3 mt-8 flex gap-2'>
                        <button className='w-1/2 bg-custom-yellow h-12 rounded-2xl'></button>
                        <button className='w-1/2 bg-custom-orange h-12 rounded-2xl'></button>
                    </div>

                </div>
                <div className='w-2/4'>
                    <img className='w-full' src="./imgs/home/image.png" alt="" />
                </div>
            </div>
            <div className="w-full  flex justify-center">
                <img src="./imgs/home/Group 55898.png" alt="" />
            </div>
            <section className='relative  home-height bg-custom-orange mt-28'>
                <img className='z-10 absolute -top-20' src="./imgs/home/Group 55901.png" alt="" />
                <div className='w-full  absolute pt-32 z-0 top-20 px-6'>
                    <h1 className='text-custom-white text-center text-4xl font-bold mb-8'>Lorem ipsum</h1>
                    <p className='text-center text-custom-white'>Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer galleyni olib, kitob namunasini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o'zgarishsiz qoldi. U 1960-yillarda Lorem Ipsum parchalarini oʻz ichiga olgan Letraset varaqlarining chiqarilishi va yaqinda Aldus PageMaker kabi ish stoli nashriyot dasturlari, shu jumladan Lorem Ipsum versiyalari bilan ommalashgan.</p>
                </div>
                <img className='z-10 absolute -bottom-20' src="./imgs/home/Group 55901.png" alt="" />
            </section>
            <footer className='w-full bg-custom-footer pt-24 pb-6'>
                <div className={`${container_style} flex justify-between text-custom-white gap-8 p-8 items-start`}>
                    <div className='w-1/4'>
                        <h1 className='text-custom-white mt-2 mb-2'>ABOUT COMPANY</h1>
                        <p className='opacity-60'>Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur feugiat</p>
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                        <h1 className='mt-2 mb-2'>Our Services</h1>
                        <ul className='flex flex-col opacity-60'>
                            <li>Online class</li>
                            <li>Baby care</li>
                            <li>Shop</li>
                            <li>Kids Playzone</li>
                            <li>Nurse</li>
                        </ul>
                    </div>
                    <div className='w-1/4'>
                        <h1 className='mt-2 mb-2'>Our Services</h1>
                        <ul className='flex flex-col opacity-60'>
                            <li>Online class</li>
                            <li>Baby care</li>
                            <li>Shop</li>
                            <li>Kids Playzone</li>
                            <li>Nurse</li>
                        </ul>
                    </div>
                    <div className='w-1/4'>
                        <h1 className='mt-2 mb-2'>Newsletter</h1>
                        <p className='opacity-60 mb-4'>Aplications prodize before front end ortals visualize front end</p>
                        <input className='bg-custom-black p-2 px-4 w-full outline-none' type="text" placeholder='Your email' />
                        <button className='w-full flex justify-center items-center bg-custom-yellow p-2 m-2 ml-0'>Join</button>
                    </div>
                </div>
                <hr className='bg-custom-hr opacity-60 h-0.5 w-5/6 m-auto' />
                <h1 className='text-center text-custom-white opacity-60 mt-6'>Powerd by "Baby massage"</h1>
            </footer>

        </>
    )
}

export default Home