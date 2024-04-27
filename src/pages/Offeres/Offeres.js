import React, { useEffect, useState } from 'react'
import "./Offeres.css"
import { CiSearch } from "react-icons/ci";
import OffersCard from './OffersCard';
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { PiCreditCardFill } from "react-icons/pi";
import { SiBookmyshow } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { offersCardData } from '../../offersCardData';
export const Offeres = () => {
    const [activeFilters, setActiveFilters] = useState(["creditCard", "debitCard", "bookMyShow", "wallet", "rewards", "payLater"])
    const [SearchValue, setSearchValue] = useState("")
    const [CardData, setCardData] = useState(offersCardData)
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
    // creating a function 
    function FiltersHandler(cardType) {
        if (activeFilters.includes(cardType)) {
            const newData = activeFilters.filter((ele) => {
                return ele !== cardType
            })
            setActiveFilters(newData)
        }
        else {
            setActiveFilters([...activeFilters, cardType])
        }
    }

    // creating a  function this function will be returned the event object
    function inputHandler (event ){
        setSearchValue(event.target.value)
    } 

    useEffect(()=>{
        const searchTime = setTimeout(()=>{
            const newdata = offersCardData.filter(({ title})=>{
                return title.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
            })
            setCardData(newdata)
        },
    1000)
    return ()=> clearTimeout(searchTime)
    },[SearchValue])
    return (
        <section className='m_offers'>
            <div className='bg-white py-3'>
                <div className='m_offers_img_box'>
                    <img src="offeres/1712582661091_123.jpg" alt="" />
                </div>
                <div className='container'>
                    <div className='m_search my-3'>
                      <input 
                            onChange={inputHandler}
                            value={SearchValue}
                            type="text"
                            placeholder="Search for Offers by Name or Bank"
                        />
                        <div className='m_search_icon'>
                            <CiSearch />
                        </div>

                    </div>
                    <div className='m_filters display-flex mx-auto '>
                        <h6>FILTER OFFERES BY</h6>
                        <div className='d-flex justify-content-betwen mt-2'>
                            {data.map(({ icon, title, cardType }, index) => {
                                return <div onClick={() => FiltersHandler(cardType)} key={index} className='m_card_Wrapper'>
                                    <div className={`m_cards`}>{icon}</div>
                                    <small className="m_small"> </small>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap container gap-3'>
            {CardData?.map((ele,index)=>{
                       if (activeFilters.includes(ele.cardType)) {
                        return   <div className='m_offersCard_col'>
                            <OffersCard {...ele}/>
                        </div>
                       }
                       else {
                        return null
                       }
                    })}
              
            </div>
        </section>
    )
}
