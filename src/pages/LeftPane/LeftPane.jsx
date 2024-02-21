import logo from "../../assets/Tranxact only.png";
import profile from "../../assets/profileimage.png";
import {TbCurrencyNaira} from "react-icons/tb";
import {IoIosArrowDown} from "react-icons/io";
import {SideNav} from "../SideNav/SideNav";
import {CiSquareAlert} from "react-icons/ci";


export function LeftPane(){

    return (
        <div className="flex flex-col h-screen gap-4 bg-fffaf8 py-12 px-8 items-center ">
            <div className="flex flex-col justify-center items-center gap-5 border-b-2 py-8 max-w-fit">
                <div className='flex gap-4 max-w-full align-middle justify-center'>
                    <img src={logo} className='max-w-[180px]'/>
                </div>

                <div className='flex px-[17px] py-[8px] rounded-2xl bg-blue-100 p-4 gap-4'>
                    <img src={profile}/>
                    <div className='flex w-fit gap-2 justify-center items-center'>
                        <div>
                            <p className=" flex text-black font-[16px] font-lato text-base leading-6 tracking-wider">Ayodele
                                Joel</p>
                            <p className='flex text-gray-500 font-[13px] font-lato text-xs leading-5 tracking-tight justify-center items-center'>Wallet
                                Balance:
                                <span className="flex">
                                    <TbCurrencyNaira/>
                                </span>
                                <span className="flex font-[13px]">
                                    400
                                </span>
                            </p>
                        </div>
                        <IoIosArrowDown/>
                    </div>
                </div>

            </div>

            <SideNav/>

            <div className="flex justify-center items-center p-6 mt-[100px] bg-guild-bg bg-no-repeat bg-contain">
                <button className="bg-blue-200 flex justify-center items-center rounded-lg px-12 py-2 gap-1 ">
                    <CiSquareAlert/>
                    <p>Guide</p>
                </button>
            </div>

        </div>
    )
}
