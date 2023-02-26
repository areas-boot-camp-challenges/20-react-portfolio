// Requirements: https://courses.bootcampspot.com/courses/2188/assignments/38662?module_item_id=749357.

// React.
import React, { useState } from "react"

// Child components.
import Header from "./components/Header"
import ContentHeader from "./components/ContentHeader"
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"
import Footer from "./components/Footer"

// Component.
function App() {
	// Current page.
	const [currentPage, setCurrentPage ] = useState("About")
	
	// Render page.
	function renderPage() {
		switch (currentPage) {
			case "About":
				return <About />
			case "Portfolio":
				return <Portfolio />
			case "Contact":
				return <Contact />
			case "Resume":
				return <Resume />
			default:
				return <About />
		}
	}

	// Set page.
	function setPage(page) {
		setCurrentPage(page)
	}

	// JSX.
	return (
	<main>
		<Header currentPage={currentPage} setPage={setPage} />
		<section>
			<article
        className="grid grid-cols-1 lg:grid-cols-5 justify-items-center lg:justify-items-start gap-5 m-5"
      >
				<ContentHeader currentPage={currentPage} />
				<section
          className="col-span-1 lg:col-span-4 lg:border-l-4 lg:border-black lg:pl-5"
        >
					{renderPage()}
				</section>
			</article>
		</section>
		<Footer />
	</main>
	)
}

export default App
