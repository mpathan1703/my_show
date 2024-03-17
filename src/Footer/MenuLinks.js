import React from 'react'

export const MenuLinks = () => {
  const data = [
    {
      title:"MOVIES NOW SHOWING IN JALNA",
      discription:["Yodha","shaitan","bastar:the nexal story"]
    },
    {
      title:"Upcoming Movies in Jalna",
      discription:["Haddhu Ledhuraa","Bigul","Kaliyugam Pattanamlo","Swatantra Veer Savarkar","Dilkush","Rakshasa Tantra","Arthur The King","What A Kismat","Jajabara 2.0","Thooth Kaasu"]
    },
    {
      title:"Movie Updates and Celebrities",
      discription:["Upcoming Movies ","Movies Now Showing","Movie Celebrities"]
    },
    {
      title:"Movies Per Week",
      discription:["Movies Playing Today ","Movies Playing Tomorrow","Movies Playing This Weekend"]
    },
    {
      title:"Movies By Genre",
      discription:["Thriller Movies","Crime Movies","Adaptation Movies","Mythological Movies","Political Movies","Supernatural Movies","Sports Movies","Heist Movies","Tragedy Movies","Animation Movies"]
    },
    {
      title:"Upcoming Movies By Genre",
      discription:["Movies in Drama","Movies in Thriller","Movies in Action","Movies in Comedy","Movies in Romantic","Movies in Crime","Movies in Horror"," Movies in Adventure","Movies in Historical","Movies in Sci-Fi"]
    },
    {
      title:"Movies By Language",
      discription:["Movies in Hindi","Movies in Chattisgarhi","Movies in Khasi","Movies in Tulu","Movies in Portuguese","Movies in Japanese","Movies in Haryanavi","Movies in English","Movies in Assamese","Movies in Konkani"]
    },
    {
      title:"Movies By Format",
      discription:["Movies in 2D","Movies in 3D"," Movies in 2D SCREEN X ","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in 4DX 3D","Movies in MX4D 3D","Movies in Full Dome","Movies in IMAX 2D","Movies in 7D"]
    },
    {
      title:"Upcoming Movies By Format",
      discription:["Movies in 2D","Movies in 3D","Movies in 4DX 3D","Movies in 4DX","Movies in 2D SCREEN X","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in Full Dome","Movies in IMAX 2D"]
    },
    {
      title:"Movies in Top Cities",
      discription:["Movies in Mumbai","Movies in Delhi-NCR","Movies in Chennai","Movies in Bengaluru","Movies in Hyderabad","Movies in Pune","Movies in Ahmedabad","Movies in Kolkata","Movies in Kochi"]
    },
    {
      title:"Cinemas in Top Cities",
      discription:["Cinemas in Mumbai","Cinemas in Chennai","Cinemas in Bengaluru","Cinemas in Hyderabad","Cinemas in Pune","Cinemas in Ahmedabad","Cinemas in Kolkata","Cinemas in Kochi"]
    },
    {
      title:"COUNTRIES",
      discription:["Indonesia","Singapore","UAE","Sri Lanka","West Indies"]
    },
    {
      title:"HELP",
      discription:["About Us","Contact Us","Current Opening","Press Release","Press Coverage","Sitemap","FAQs","Terms and Conditions","Privacy Policy"]
    },
    {
      title:"BOOKMYSHOW EXCLUSIVES",
      discription:["Lollapalooza India","Superstar","BookASmile","Corporate Vouchers","Gift Cards","List My Show","Offers","Stream","Trailers"]
    },
  ]
  return (
  <section className='m_background '>
    <div className='container  py-3'>
{data.map((value,index)=>{
  return ( 
    <div key={index}className='py-3 '>
    <p className='m_h13 m_text_color'>{value.title.toUpperCase()}</p>
    <div className='m_h11 m_text_color2'>
      
  {value.discription.map((ele,index)=>{
    return(
      <span key={index} className={`${index!==0 ? "border-start border-secondary px-1" : "pe-2"}`}>{ele}</span>
    )
  })}
  
    </div>
  </div>
  )
})}

   
    </div>
  </section>
  )
}
