import React, {
	useState,
	useContext
} from 'react'
import sublinks from './data'


const AppContext = React.createContext()

export const AppProvider = ({
	children
}) => {

	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [submenuOpen, setSubmenuOpen] = useState(false)
	const [page, setPage] = useState({
		page: "",
		links: []
	})
	const [location, setLocation] = useState({})



	const openSidebar = () => {
		setSidebarOpen(true)
	}
	const closeSidebar = () => {
		setSidebarOpen(false)
	}



	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find( link=> link.page === text )
		setPage( page )
		setLocation( coordinates )
		setSubmenuOpen(true)
	}
	const closeSubmenu = () => {
		setSubmenuOpen(false)
	}





	return ( 
		<	AppContext.Provider value = {{
				sidebarOpen,
				submenuOpen,
				page,
				location,
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu
			}}>
		{ children } 
		</AppContext.Provider>
	)}


	export const useGlobalContext = () => {
		return useContext( AppContext )
	}