import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context'
import sublinks from '../data';
import { Link } from 'react-router-dom'


const Sidebar = () => {
	const { sidebarOpen, closeSidebar } = useGlobalContext()


	return (
		<div className={`${sidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}	>
			<aside className='sidebar'>
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((item, index) => (
						<article key={ index } > 
						 <h4> { item.page } </h4>
						 <div className='sidebar-sublinks'>
							{ item.links.map(( link, index ) => (
								<Link key={ index } to={ link.url } >  
								{ link.icon } &nbsp;
								{ link.label }
								</Link>
							))}
						 </div>
						 </article>
					))}
				</div>
			</aside>
		</div>
	)
}


export default Sidebar
