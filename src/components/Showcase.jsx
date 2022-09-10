import React, { useState } from 'react'
import { data } from '../../data'
import arrow from '../assets/icon-arrow.svg'
import left from '../assets/icon-angle-left.svg'
import right from '../assets/icon-angle-right.svg';

const Showcase = () => {
    const [items, setItems] = useState(data)
    const [slideIndex, setSlideIndex] = useState(1)

    function nextSlide() {
        if (slideIndex !== items.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === items.length) {
            setSlideIndex(1)
        }
     }
    
    function prevSlide() { 
        if (slideIndex === items.length) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(items.length);
        }
    }
    return (
			<div>
				{items.map((item, index) => (
					<article
						key={item.id}
						className={
							slideIndex === index + 1
								? 'grid grid-cols-1 lg:grid-cols-2'
								: 'hidden'
						}>
						<div className='relative '>
							<img src={item.img} alt='furniture' className='w-full' />
							<ul className='absolute -bottom-2 right-0 flex ul-container'>
								<li className=''>
									<button
										className=' bg-black hover:bg-neutral-700 transistion-all duration-200 '
										onClick={prevSlide}>
										<img src={left} alt='left-arrow' className='p-6 ' />
									</button>
								</li>
								<li className='lg:left-full'>
									<button
										className='bg-black hover:bg-neutral-700 transistion-all duration-200'
										onClick={nextSlide}>
										<img
											src={right}
											alt='right-arrow'
											className='p-6'
										/>
									</button>
								</li>
							</ul>
						</div>
						<div className='p-4 lg:py-32'>
							<h2 className='text-slate-900 text-2xl lg:text-5xl font-bolder'>
								{item.title}
							</h2>
							<p className='text-slate-900 opacity-50 my-6 leading-10 text-md font-bold'>
								{item.description}
							</p>
							<button
								className='flex items-center gap-4 hover:opacity-75 text-base'
								style={{ letterSpacing: '0.7rem' }}>
								SHOP NOW <img src={arrow} alt='arrow' />
							</button>
						</div>
					</article>
				))}
			</div>
		);
    }

    export default Showcase