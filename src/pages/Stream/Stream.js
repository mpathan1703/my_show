import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { PromotedBanner } from './PromotedBanner';
import "./Stream.css"
import { MultiMovies } from '../../components/MultiMovies/MultiMovies';

const data = [
  {
    posterpath: "Stream/panda.avif",
    path: "url(Stream/et00001563-flwjdhzdjp-horizontal_poster_still.jpg)",
    release: "Brand new releases every Friday",
    name: "Kung Fu Panda",
    language: "English",
    slug: "1h 32m • Adventure, Animation, Comedy • U",
    discription: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside."
  },
  {
    posterpath: "Stream/aazam.jpg",
    path: "url(Stream/et00343041-nkkkxczqvw-horizontal_poster_still.jpg)",
    release: "Brand new releases every Friday",
    name: "Aazam",
    isPremier: true,
    language: "Hindi",
    slug: "2h 8m • Crime, Mystery, Thriller • UA",
    discription: "Set in the underbelly of the Mumbai underworld, the story revolves around the succession battle of mafia don Nawab Khan, who is suffering from blood cancer and has only a few days to live. Who is the Aazam of this battle of defeat and victory?"
  },
  {
    posterpath: "Stream/dragon.jpg",
    path: "url(Stream/et00347867-xrnfkldssf-horizontal_poster_still.jpg)",
    release: "Brand new releases every Friday",
    name: "Dragon: Bruce Lee Story",
    isPremier: true,
    language: "English",
    slug: "2h 0m • Drama • A",
    discription: "Based on true events, Dragon: The Bruce Lee Story is the incredible journey of the life, love and unconquerable spirit of the martial arts legend."
  },
  {
    posterpath: "Stream/dune.avif",
    path: "url(Stream/et00122526-eqnsuankcp-horizontal_poster_still.jpg)",
    release: "Brand new releases every Friday",
    name: "Dune",
    language: "English",
    slug: "2h 35m • Action, Adventure, Drama, Sci-Fi • UA",
    discription: "Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis."
  },
  {
    posterpath: "Stream/getout.avif",
    path: "url(Stream/et00047349-nwyvywvcsq-horizontal_poster_still.jpg)",
    release: "Brand new releases every Friday",
    name: "Get Out",
    isPremier: true,
    language: "English",
    slug: "1h 44m • Drama, Horror, Thriller • A",
    discription: "Now that Chris and his girlfriend, Rose have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway in her parent`s home upstate. At first, Chris reads the family`s overly accommodating behavior as nervous attempts to deal with their daughter`s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he could have never imagined."
  },
]
export const Stream = () => {
  return (
    <section>
      <Carousel infiniteLoop autoPlay showStatus={false} className='h-100'>
        {data.map(function (value, index) {
          return <PromotedBanner key={index}{...value} />
        })}
      </Carousel>
      <div className='my-5 container'>
        <MultiMovies title={"New on Stream"}
          isShowAll="true"
          srcData={[
            "Stream/MultiMovie/et00027332-qdlvmpbsmg-portrait.avif",  
            "Stream/MultiMovie/et00027332-qdlvmpbsmg-portrait.avif",
          ]} 
          />
      </div>

    </section>
  )
}
