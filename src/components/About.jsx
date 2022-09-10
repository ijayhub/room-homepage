import React from 'react'
import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'

const About = () => {
  return (
		<section className="grid grid-cols-1 lg:grid-cols-3">
			<div>
				<img src={aboutDark} alt='about' className='w-full' />
			</div>
			<div className=' p-8 lg:p-14'>
				<h2 className=" text-2xl lg:text-3xl uppercase font-bolder " style={{letterSpacing:'0.5rem'}}>About our furniture</h2>
				<p className="text-slate-700 opacity-50 leading-10 text-justify mt-4 text-md font-bold">
					Our multifunctional collection blends design and function to suit your
					individual taste. Make each room unique, or pick a cohesive theme that
					best express your interests and what inspires you. Find the furniture
					pieces you need, from traditional to contemporary styles or anything
					in between. Product specialists are available to help you create your
					dream space.
				</p>
          </div>
          <div>
              <img src={aboutLight} alt="about" className="w-full" />
          </div>
		</section>
	);
}

export default About
