import React from 'react'
import Nav from './Nav'
import Moviehero from './Moviehero'
import MoviesPart1 from './Moviespart1'
import MoviesPart2 from './Moviespart2'

const Heromain = () => {
  return (
    <div className='main h-full w-full px-5   overflow-y-auto scroll-smooth scrollbar-none ' >
      <div className='min-h-[120%]'>
        <Nav/>
        <Moviehero/>
        <MoviesPart1/>
        <MoviesPart2/>
      </div>
    </div>
  )
}

export default Heromain
