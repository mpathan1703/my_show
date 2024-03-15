import React from 'react'

export const Discription = () => {

const data = [
    {
        title:"Enjoy Online Ticket Booking for Movies in selu With BookMyShow",
        discription:"If you are planning for movie ticket bookings for the latest movies in Mumbai, don't look any further. Now it is easy to get on with online ticket booking with BookMyShow. Your one-stop solution for movies to watch this weekend. Everyone enjoys watching their favorite movies on the big screen, and the excitement of watching it with friends is unparalleled. If you have been eagerly waiting for a movie that you can watch with your friends and family, now you know where to get the tickets from. When you watch a film in a cinema theatre, you get to watch it on a massive screen with surround-sound, and that enhances your movie-watching experience. Thus, allowing you to be a part of the actual movie. Get to know about all movies and movie trailers to watch here. Also, know how to book movie tickets."
    },
    {
        title:"Latest Movies To Watch in selu With Family And Friends",
        discription:"Each year the cinema world is enlightened with the latest movie trailers, increasing the excitement among everyone. This year, just like the previous year, you have been waiting for some of the biggest Bollywood movies to be released with the biggest star cast. Enjoy your favourite movie, not just with your friends, but in a cinema hall Mumbai that will be filled with like-minded people. Be a part of everyone's reaction. Dates are already announced, and all you need to do is book the tickets for the preferred date so that you don't end up missing the first-day first show! Don’t worry we have the list of shows near you and movie showtimes."
    },
    {
        title:"Upcoming Bollywood & Hollywood Movies That You Can’t Miss",
        discription:"Have you checked out the latest movie reviews of some of the best Hollywood movies? If so, we bet you would want to watch them all in the nearest movie theatre! With the anticipation of the release of"
    },
    {
        title:"Exciting Tollywood & Kollywood Movies To Book Tickets",
        discription:"Just like Bollywood and Hollywood movies, Tollywood seems to have a few good movie showtimes as well. You can plan for movies to watch this Friday with these Tollywood movies because the star cast is superb, and the storylines of these movies have already started making news. It will be super interesting to watch"
    },
    {
        title:"The Joy Of Movie Tickets Bookings with Just a Few Clicks",
        discription:"Grab on your popcorn because there are many movies to watch today in Mumbai. If you want to save some money, don't miss out on our movie offers and discounts. Check out the movies running in cinemas time, and call all your friends to enjoy the best movie-watching experience together. There are many big releases in the pipeline, and it is expected that these movies will have the perfect casting and direction. Get ready for upcoming movies in theatres."
    },


]
  return (
<section className='container'>
    {data.map((value)=>{
        return (
            <div className='my-2 text-muted'>
            <h6 className='m_h13'>{value.title}</h6>
            <p className='m_h11'>
            {value.discription}
            </p>
        </div>
        )
    })}
 
</section>
  )
}
