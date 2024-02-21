import React from 'react'
import Chart from '../../assets/Chart.png'
import Chartone from '../../assets/Chartone.png'
import Plus from '../../assets/Plus.png'
import { IoIosArrowRoundForward } from 'react-icons/io'


export function Wallets(){
    return (
        <div className='flex flex-row gap-6 '>
            <p className='flex text-gray-600 text-lg font-bold leading-7 items-start'>Total Wallet</p>
            <div className='flex bg-gradient-to-r from-indigo-200 to-blue-500 rounded-xl h-40 w-72 mt-7 -ml-32'>
                <div className='flex flex-col justify-start items-start p-4'>
                    <p className='text-white pr-96'>₦</p>
                    <p className='text-white text-4xl font-medium pb-4'>1,820</p>
                </div>
                <img src={Chart} className='flex w-24 h-16 -ml-64 mt-8' alt=''/>
                <div className='flex mt-28 -ml-60 gap-12'>
                    <div>
                        <p className='text-blue-800 text-sm'>Profit</p>
                        <p className='text-green-600 font-medium leading-5 tracking-wider'>+2.87%</p>
                    </div>                 
                    <div>
                        <p className='text-blue-800 text-sm'>Loss</p>
                        <p className='text-red-500 font-medium leading-5 tracking-wider'>-0.17</p>
                    </div>
                    <div>
                        <p className='text-blue-800 text-sm'>Neutral</p>
                        <p className='text-gray-50 font-medium leading-5'>0.00%</p>

                    </div>                                    
                </div>
            </div>

            <div>
                <p className='flex text-gray-600 text-lg font-bold leading-7 items-start'>Ethereum</p>
                <div className='bg-indigo-100 rounded-xl h-40 w-72'>
                    <div className='flex flex-col justify-start items-start p-4'>
                        <p className='text-white pr-96'>₦</p>
                        <p className='text-blue-700 text-4xl font-medium pb-4'>1,100</p>
                    </div>
                    <img src={Chartone} className='flex ml-40 -mt-20' alt=''/>
                    <div className='flex mt-1 ml-2 gap-12'>
                        <div>
                            <p className='text-blue-800 text-sm'>Profit</p>
                            <p className='text-green-600 font-medium leading-5 tracking-wider'>+2.87%</p>
                        </div>                 
                        <div>
                            <p className='text-blue-800 text-sm'>Loss</p>
                            <p className='text-red-500 font-medium leading-5 tracking-wider'>-0.17</p>
                        </div>
                        <div>
                            <p className='text-blue-800 text-sm'>Neutral</p>
                            <p className='text-gray-50 font-medium leading-5'>0.00%</p>

                        </div>                                     
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='bg-indigo-100 rounded-xl h-40 w-72 mt-7 flex flex-col p-8'>
                    <div className='flex flex-col justify-start items-center gap-3'>
                        <img src={Plus} className='' alt=''/>

                        <div className='flex flex-col align-text-center gap-2'>
                            <p className='text-blue-300 text-base font-bold leading-6 text-center'>Convert</p>
                            <p className='text-blue-300 text-base font-xs leading-5 text-center'>Cash - ETH</p>  
                        </div>
                                              
                    </div>
                </div>
            </div>
          
    

           
        </div>
    )
}
