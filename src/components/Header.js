// React.
import React from "react"

// Child components.
import Navigation from "./Navigation"

// Component.
function Header({ currentPage, setPage }) {
	// JSX.
	return (
		<header className="grid grid-cols-1 lg:grid-cols-3 bg-white justify-items-center gap-2">
			<button
				onClick={() => setPage("About")}
				className="text-5xl sm:text-7xl text-black lg:justify-self-start mt-5 lg:mt-0 px-5 py-1"
			>
				areas.me
			</button>
			<Navigation currentPage={currentPage} setPage={setPage} />
		</header>
  )
}

export default Header
