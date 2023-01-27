import React, { useState } from 'react'
import toMoon from '../assets/undraw_to_the_moon.svg'
import Carousel from '../components/Carousel'
import DatePicker from '../components/DatePicker'
import SelectInput from '../components/SelectInput'
import TextInput from '../components/TextInput'

export const User: React.FC = () => {
  return (
    <div className="min-h-screen d ">
      <header className="w-full border-b py-5 shadow-sm	">
        <nav className="w-8/12 mx-auto flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <h1 className="text-2xl text-gray-700 font-thin">
              neverland<span className="font-bold text-black">rides</span>
            </h1>
            <ul className="text-gray-500 text-bold  flex gap-5 text-[14px] ">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Buy Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Check Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Rewards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700  focus:bg-gray-700  focus:outline-none focus:ring-0 active:bg-gray-800  transition duration-150 ease-in-out"
              >
                Connect
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-8/12 mx-auto mt-10">
        <Carousel
          items={[
            {
              imageSrc:
                'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
              imageAlt: '',
              title: 'Title',
              description: 'Description',
            },
            {
              imageSrc:
                'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
              imageAlt: '',
              title: 'Title',
              description: 'Description',
            },
            {
              imageSrc:
                'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg',
              imageAlt: '',
              title: 'Title',
              description: 'Description',
            },
          ]}
        />
      </div>
      <main className="w-8/12 mx-auto mt-20 flex justify-between items-center">
        <div className="w-5/12">
          <img src={toMoon} alt="to the moon" />
        </div>
        <div className="w-6/12 shadow-md p-5 rounded-md">
          <div className="flex justify-center flex-col">
            <TextInput
              label="From"
              id="from-station"
              placeholder="Select Station"
            />
            <TextInput
              label="To"
              id="to-station"
              placeholder="Select Destination"
            />

            <DatePicker id="date-picker" label="Journey Date" />
            <SelectInput
              options={[
                { label: 'Business', value: 'Business' },
                { label: 'Economy', value: 'Economy' },
              ]}
              id="class-select"
              label="Class"
            />

            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
