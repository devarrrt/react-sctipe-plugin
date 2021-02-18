import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'



const Submenu = () => {

const [columns, setColumns] = useState('col-2')
const containerRef = useRef( null )

const { 
submenuOpen, 
page: { page, links },
location
} = useGlobalContext()

useEffect(() => {
	setColumns('col-2')
  const submenu = containerRef.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
		if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
}, [page, location, links])



	return (
		<aside className={`${submenuOpen ? 'submenu show' : 'submenu'}`} ref={ containerRef } >
		<section>
		<h4> hello </h4>
			<div className={`submenu-center ${columns}`}>
				{ links.map(( link, index ) => (
						<Link to={ link.url } key = { index }> 
						{ link.icon }
						{ link.label }
						 </Link>
				))}
			</div>
		</section>
		</aside>
	)
}



export default Submenu
