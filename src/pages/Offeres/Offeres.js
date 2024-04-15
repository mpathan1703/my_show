import React from 'react'
import "./Offeres.css"
import { CiSearch } from "react-icons/ci";
// import OffersCard from './OffersCard';
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { PiCreditCardFill } from "react-icons/pi";
import { SiBookmyshow } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
// import offersCardData from "../../offersCardData"
export const Offeres = () => {
    const data = [
        {
            icon: <BsFillCreditCard2FrontFill size={30} />,
            title: "Credit Card",
            cardType: "creditCard"
        },
        {
            icon: <PiCreditCardFill size={30} />,
            title: "Debit Card",
            cardType: "debitCard"
        },
        {
            icon: <SiBookmyshow size={30} />,
            title: "BookMyShow",
            cardType: "BookMyShowCard"
        },

        {
            icon: <GiWallet size={30} />,
            title: "Wallet",
            cardType: "WalletCard"
        },
        {
            icon: <FaAward size={30} />,
            title: "Rewards",
            cardType: "RewardsCard"
        },
        {
            icon: <FaRupeeSign size={30} />,
            title: "Paylater",
            cardType: "upiCard"
        },

    ]
    return (
        <section className='m_offers'>
            <div className='bg-white py-3'>
                <div className='m_offers_img_box'>
                    <img src="offeres/1712582661091_123.jpg" alt="" />
                </div>
                <div className='container'>
                    <div className='m_search my-3'>
                        <input type="text"
                            placeholder='search for offers for bank or name ' />
                        <div className='m_search_icon'>
                            <CiSearch />
                        </div>

                    </div>
                    <div className='m_filters display-flex mx-auto '>
                        <h6>FILTER OFFERES BY</h6>
                        <div className='d-flex justify-content-betwen mt-2'>
                            {data.map(({ icon, title, cardType }, index) => {
                                return <div key={index} className='m_card_Wrapper'>
                                    <div className='m_cards'>{icon}</div>
                                    <small className='m_small'>{title} </small>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap container gap-3'>
                <div className='m_offersCard_col'>
                    {/* <OffersCard /> */}
                </div>
            </div>
        </section>
    )
}
