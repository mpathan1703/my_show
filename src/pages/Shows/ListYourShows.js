import React from 'react'
import Flickity from 'react-flickity-component'
import { BannerCard } from './BannerCard'
import "./ListYourShow.css"

export const ListYourShows = () => {
    return (

        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            // options={{ ...flickityOptions, wrapAround: true }} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false,
        >
        <BannerCard />
        </Flickity>

    )
}
