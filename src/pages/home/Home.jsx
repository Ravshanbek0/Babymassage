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
            <header className={`${container_style} overflow-hidden justify-center flex-col px-4 flex mt-24 xl:justify-between xl:px-8 xl:items-center xl:flex-row 2xl:justify-between 2xl:flex-row 2xl:px-8 2xl:items-center`}>
                <div>
                    <h1 className='xl:text-5xl md:text-4xl text-xl xl:text-left font-semibold text-center 2xl:text-left'>Katta sarlavhalar uchun <br />
                        <span className='text-custom-orange'>Asosiy mavzu</span></h1>
                    <p className='xl:font-base md:text-base xl:text-sm text-sm text-center xl:text-left opacity-60 xl:mt-8 xl:mb-8 2xl:text-left 2xl:text-base'>Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500 - <br />yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer  galleyni olib, kitob namunasini yaratish uchun shifrlagan.</p>
                    <div className="flex justify-center mt-2 2xl:justify-start xl:justify-start">
                        <button className='bg-custom-blue xl:p-4 text-center p-4 text-custom-white xl:px-6 text-sm rounded-full'>Batafsil video</button>
                        <button className='bg-custom-orange rounded-full xl:p-5 p-4 px-5 ml-2'><span className='text-custom-white'><FaPlay /></span></button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='object-contain' src="./imgs/home/header-hero.png" alt="" />
                </div>
            </header>
            <div className={`${container_style}`}>
                <section className='xl:flex xl:justify-between justify-center flex flex-wrap xl:flex-nowrap  flex-row  w-full mt-8 xl:p-4 xl:w-4/5 bg-custom-white rounded-xl m-auto xl:gap-2 gap-0.5'>
                    <div className='flex xl:w-1/4 items-center gap-1 xl:gap-4 bg-custom-tg px-3  text-custom-white rounded-lg'>
                        <img className='h-1/2 xl:socails-img' src="./imgs/home/image 24.png" alt="" />
                        Telegram</div>
                    <div className='flex items-center gap-1  xl:gap-4 instagram-gradient text-custom-white px-3 xl:w-1/4 rounded-lg'>
                        <img className='h-1/2 xl:socails-img' src="./imgs/home/image 25.png" alt="" />
                        Instagram</div>
                    <div className='flex xl:w-1/4  gap-1 items-center xl:gap-4 facebook-gradient text-custom-white px-3  rounded-lg'>
                        <img className='h-1/2 xl:socails-img' src="./imgs/home/image 26.png" alt="" />
                        Facebook</div>
                    <div className='flex xl:w-1/4 gap-1   items-center xl:gap-4 bg-custom-blue text-custom-white px-3   rounded-lg'>
                        <img className='h-1/2 xl:socails-img' src="./imgs/home/image 27.png" alt="" />
                        Twitter</div>
                </section>
                <h1 className='font-bold xl:text-3xl xl:absolute text-center xl:hidden mt-10'>Bizning qulayliklar</h1>
                <section className='w-4/5 gap-4 xl:mt-40 mt-10 xl:p-36 m-auto flex flex-wrap items-center justify-center xl:relative'>
                    <img className='xl:block hidden' src="./imgs/home/Ellipse 23.png" alt="" />
                    <h1 className='font-bold hidden xl:text-3xl xl:absolute text-center xl:bloc'>Bizning qulayliklar</h1>
                    <div className='find-course rounded-full z-40 p-3 text-custom-black flex flex-col justify-center items-center top-0 xl:absolute'>
                        <span className='rounded-full text-2xl text-custom-white bg-custom-orange p-5'><HiOutlineDocumentSearch className='text-lg' /></span>
                        <h1 className='xl:text-xl font-bold'>Find your course</h1>
                        <p className='xl:text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className='find-course rounded-full p-3 z-40  text-custom-black flex flex-col justify-center items-center left-0 xl:absolute'>
                        <span className='rounded-full text-xl text-custom-white bg-custom-blue p-5'><GrPlan className='text-lg' /></span>
                        <h1 className='xl:text-xl font-bold'>Find your course</h1>
                        <p className='xl:text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className='find-course p-3 rounded-full z-40  text-custom-black flex flex-col justify-center items-center  right-0 xl:absolute'>
                        <span className='rounded-full text-xl text-custom-white bg-custom-tg p-5'><FaBookOpen className='text-lg' /></span>
                        <h1 className='xl:text-xl font-bold'>Find your course</h1>
                        <p className='xl:text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                    <div className='p-3 find-course rounded-full z-40  text-custom-black flex flex-col justify-center items-center bottom-0 xl:absolute'>
                        <span className='rounded-full text-xl text-custom-white bg-custom-green-bold p-5'><FaAward className='text-lg' /></span>
                        <h1 className='xl:text-xl font-bold'>Find your course</h1>
                        <p className='xl:text-base opacity-60 text-center'>Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </section>
            </div>
            <section className='bg-custom-back w-full h-auto mt-40 pt-2 pb-10'>
                <div className={`${container_style}`}>
                    <h1 className='text-custom-white text-center text-3xl ' >MUTAHASISLAR</h1>
                    <div className='flex justify-center xl:gap-6 mt-10 p-3 xl:flex-row flex-col gap-2'>
                        <div className='bg-custom-white rounded-lg p-4 flex items-start gap-4 xl:gap-10'>
                            <img className='flex justify-center items-center' src="./imgs/home/Ellipse 79.png" alt="" />
                            <div className=''>
                                <h1 className='font-bold text-lg'>Iroda Karimova</h1>
                                <p className='opacity-60 mt-2 mb-2 xl:text-sm text-xs'>Contrary to popular belief, Lorem Ipsum is  not simply random text. It has roots in a  piece of classical Latin literature from 45  BC, making it over 2000 years old.</p>
                                <button className='bg-custom-green-bold text-custom-white xl:p-4 xl:px-10 p-2 rounded-full mt-2'>Karimova haqida </button>
                            </div>
                        </div>
                        <div className='bg-custom-white rounded-lg xl:p-4 p-2 flex items-start gap-4 xl:gap-10'>
                            <img className='flex justify-center items-center' src="./imgs/home/Ellipse 79.png" alt="" />
                            <div className=''>
                                <h1 className='font-bold text-lg'>Iroda Karimova</h1>
                                <p className='opacity-60 mt-2 mb-2 text-xs xl:text-sm'>Contrary to popular belief, Lorem Ipsum is  not simply random text. It has roots in a  piece of classical Latin literature from 45  BC, making it over 2000 years old.</p>
                                <button className='bg-custom-green-bold text-custom-white xl:p-4 xl:px-10 p-2 rounded-full mt-2'>Karimova haqida </button>
                            </div>
                        </div>
                        <div className='bg-custom-white rounded-lg p-4 flex items-start xl:gap-10 gap-4'>
                            <img className='flex justify-center items-center' src="./imgs/home/Ellipse 79.png" alt="" />
                            <div className=''>
                                <h1 className='font-bold text-lg'>Iroda Karimova</h1>
                                <p className='opacity-60 mt-2 mb-2 xl:text-sm text-xs' >Contrary to popular belief, Lorem Ipsum is  not simply random text. It has roots in a  piece of classical Latin literature from 45  BC, making it over 2000 years old.</p>
                                <button className='bg-custom-green-bold text-custom-white xl:p-4 xl:px-10 p-2 rounded-full mt-2'>Karimova haqida </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`${container_style} flex mt-10 justify-between xl:p-8 xl:px-6 p-3 flex-col xl:flex-row gap-14 items-center`}>
                <div className='w-3/4'>
                    <h1 className='xl:text-4xl text-lg font-semibold xl:mb-8 mb-4'>Lorem Ipsum is simply dummy text of the printing <span className='text-custom-orange'>and typesetting industry.</span> </h1>
                    <p className='xl:text-sm text-xs'>Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer galleyni olib, kitob namunasini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o'zgarishsiz qoldi. U 1960-yillarda Lorem Ipsum parchalarini oʻz ichiga olgan Letraset varaqlarining chiqarilishi va yaqinda Aldus PageMaker kabi ish stoli nashriyot dasturlari, shu jumladan Lorem Ipsum versiyalari bilan ommalashgan.</p>
                    <div className='xl:w-2/3 w-full xl:mt-8 mt-4 flex gap-2'>
                        <button className='w-1/2 bg-custom-yellow h-12 rounded-2xl'></button>
                        <button className='w-1/2 bg-custom-orange h-12 rounded-2xl'></button>
                    </div>

                </div>
                <div className='xl:w-2/4'>
                    <img className='w-full' src="./imgs/home/image.png" alt="" />
                </div>
            </div>
            <div className="xl:w-full hidden xl:flex justify-center">
                <img src="./imgs/home/Group 55898.png" alt="" />
            </div>
            <section className='relative  home-height bg-custom-orange mt-28'>
                <img className='z-10 absolute xl:-top-20 -top-8' src="./imgs/home/Group 55901.png" alt="" />
                <div className='w-full  absolute pt-32 z-0 xl:top-20 xl:px-6 px-3'>
                    <h1 className='text-custom-white text-center xl:text-4xl text-lg font-bold mb-8'>Lorem ipsum</h1>
                    <p className='text-center xl:text-base text-sm text-custom-white'>Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq matni bo'lib kelgan, o'shandan beri noma'lum printer galleyni olib, kitob namunasini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o'zgarishsiz qoldi. U 1960-yillarda Lorem Ipsum parchalarini oʻz ichiga olgan Letraset varaqlarining chiqarilishi va yaqinda Aldus PageMaker kabi ish stoli nashriyot dasturlari, shu jumladan Lorem Ipsum versiyalari bilan ommalashgan.</p>
                </div>
                <img className='z-10 absolute xl:-bottom-20 -bottom-8' src="./imgs/home/Group 55901.png" alt="" />
            </section>

        </>
    )
}

export default Home