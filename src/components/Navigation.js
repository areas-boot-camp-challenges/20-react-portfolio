// React.
import React from "react"
import { NavLink } from "react-router-dom"

// Component.
function Navigation() {
	// Navigation items.
	const pageNames = [
		"About",
		"Portfolio",
		"Contact",
		"Resume",
	]
	// Navigation links.
	const navLinks = pageNames.map((pageName, index) => {
		return (
			<NavLink
				className="text-2xl sm:text-4xl text-white bg-black w-32 sm:w-36 mb-0 sm:mb-5 lg:mt-5 py-1"
				to={pageName === pageNames[0]
					? "/"
					: "/" + pageName.toLowerCase()
				}
				key={index}>
					{pageName}
			</NavLink>
		)
	})

	// JSX.
	return (
		<nav
			className="grid lg:col-span-2 grid-cols-1 sm:grid-cols-4 bg-white text-center lg:justify-self-end gap-2">
				{navLinks}
		</nav>
	)
}

export default Navigation
