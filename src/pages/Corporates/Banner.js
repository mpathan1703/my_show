import React from 'react'
import { MdPlayCircleFilled } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";

function AppInput ({label, placeholder,type="text"}){
    return <div className='mb-3'>
        <label htmlFor="name" className='m_h13'>
            <span className='text-danger ' >*</span>{label}
        </label>
        <br />
        <input type={type}
        style={{padding: "6px 10px"}}
        className='border  w-100 rounded-1'
        placeholder={placeholder} />
    </div>
}

export const Banner = () => {
    return (
        <div style={{ background: "url(Corporates/corp-banner-bg.avif)" }} className='position-relative'>
            <div className='h-100 w-100 position-absoulute top-0 left-0 ' style={{ background: "rgba(0,0,0,0.6)", zIndex: 1 }}>
               <div className='container py-4 position-relative' style={{zIndex:2}}>
                 <div className='row text-white'>
                    <div className='col-12 col-md-6 text-center mt-5'>
                       <h1>Entertainment you can gift.</h1>
                       <p className='m_h18'>A variety of solutions to skyrocket your business with vouchers, promotions, loyalty, employee recognition & rewards.</p>
                       <div style={{width:"70%"}} className='mx-auto d-flex align-items-center justify-content-between mt-4'>
                         <div className='d-flex align-items-center gap-2'>
                         <MdPlayCircleFilled size={20}/>
                         <h6>Watch Vidio</h6>
                         </div>
                         <div className='d-flex align-items-center gap-2'>
                          <MdDownloadForOffline size={20}/>
                         <h6>Download Brochure</h6>
                         </div>
                       </div>
                    </div>
                    <div className='col-12 col-md-5 '
                    >
                        <form action=""
                        className='bg-white text-dark mx-auto p-4 rounded-1'
                        style={{width:"65%"}}>
                           <AppInput label={"Full Name "} placeholder={"Name"}/>
                           <AppInput label={"Company email "} placeholder={"Company email"} type='email'/>
                           <AppInput label={"Company Name"} placeholder={"Company Name"} type='Name'/>
                           <AppInput label={"Mobile Number "} placeholder={"eg.9140XXXXXX"} type='number'/>
                           <button className='btn btn-secondary w-100 py-2 my-2' style={{opacity:"0.6"}}>Receive a Callback</button>
                        </form>
                    </div>
                 </div>
               </div>
            </div>
        </div>
    )
}
