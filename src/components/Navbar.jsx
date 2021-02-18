import React from 'react'
import { useGlobalContext } from '../context'
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg'


const links = [
	'products', 'developers', 'company'
]

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()


	const displaySubMenu = ( e ) => {
    const page = e.target.textContent
		const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
		openSubmenu( page, { center, bottom } )
	}

	const handleSubmit = ( e ) => {
		if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
	}

	
	return (
		<nav className="nav" onMouseOver={ handleSubmit }  >
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} className='nav-logo' alt='' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					{links.map(link =>
						<li>
							<button className='link-btn' onMouseOver={ displaySubMenu } >
								{link}
							</button>
						</li>
					)}
				</ul>
        <button className='btn signin-btn'>Sign in</button>		
			</div>
		</nav>
	)
}

export default Navbar

