import React from 'react'
import DestinationCard from './components/DestinationCard'

import popularDestinations from './data/popularDestinations'

export default function App() {
  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md sm:max-w-xl mx-auto lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src={require('./img/logo-brand.svg').default} alt="Workcation"/>
            <img className="mt-6 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={require("./img/beach-work.jpg").default} alt="Woman workcatioing on the beach"/>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl font-headline">
              You can work from anywhere. 
              <br className="hidden lg:inline"/>
              <span className="text-brand">Take advantage from it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
            </p>
            <div className="mt-4 space-x-3 sm:mt-6">
              <a className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" href="no-link">Book your escape</a>
              <a className="btn btn-secondary" href="no-link">Learn more</a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block 2xl:col-span-3">
          <img src={require("./img/beach-work.jpg").default} alt="Women workvocationing on the beach" className="absolute inset-0 w-full h-full object-cover object-center"/>
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A slection of great work-friendly cities with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-col-2 xl:grid-cols-3">

          {popularDestinations.map(destination => (
            <DestinationCard destination={destination} key={destination.city}/>
          ))}

        </div>
      </div>
    </div>
  )
}