import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
		<header className='absolute z-10 w-full p-8 flex justify-center items-center lg:items-center lg:justify-start '>
			<div>
				<img src={logo} alt='logo' className='lg:mx-8 ' />
			</div>
			<div
				className={`${
					isOpen
						? 'bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen'
						: 'bg-transparent lg:bg-transparent'
				} lg:bg-transparent lg:h-auto lg:relative`}>
				<nav
					className={`${isOpen ? 'open w-full py-8 lg:py-0  lg:w-auto' : ''}`}>
					<ul className='flex justify-center items-center py-6 flex-wrap gap-4'>
						<li>
							<button className='border-b-2 border-transparent  hover:border-neutral-900 transition-all duration-300 lg:text-white text-md font-bold lg:hover:border-b-white'>
								home
							</button>
						</li>
						<li>
							<button className='border-b-2 border-transparent  hover:border-neutral-900 transition-all duration-300 lg:text-white text-md font-bold lg:hover:border-b-white '>
								shop
							</button>
						</li>
						<li>
							<button className='border-b-2 border-transparent  hover:border-neutral-900 transition-all duration-300 lg:text-white text-md font-bold lg:hover:border-b-white '>
								about
							</button>
						</li>
						<li>
							<button className='border-b-2 border-transparent  hover:border-neutral-900 transition-all duration-300 lg:text-white text-md font-bold lg:hover:border-b-white'>
								contact
							</button>
						</li>
					</ul>
				</nav>
			</div>

			<div className='absolute left-8 top-8 z-20 lg:hidden'>
				{isOpen ? (
					<button onClick={() => setIsOpen(false)}>
						<img src={close} alt='close' />
					</button>
				) : (
					<button onClick={() => setIsOpen(true)}>
						<img src={menu} alt='menu' />
					</button>
				)}
			</div>
		</header>
	);
}

export default Header
