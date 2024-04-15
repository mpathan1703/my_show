import React from 'react'

const Parteners = () => {
  const imgData= ["hp-logo.avif","icici-logo.png","mastercard-logo.png","axis-logo.png","ola-logo.png"]
  return (
    <div className='container bg-white my-3 p-5 text-center m_patners'>
      <h2 style={{letterSpacing:"2px", fontWeight:"300"}}>OUR PARTNERES</h2>
      <div className='row justify-content-center mt-5'>
       {imgData.map(function (ele,index){
        return  <div key={index} style={{width:"19%"}}>
        <div>
          <img src={`corporates/${ele}`}alt="" />
        </div>
      </div>
       })}
      </div>
    </div>
  )
}

export default Parteners