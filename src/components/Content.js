// React.
import React from "react"

// This needs to be a stateful component. The page will be passed in as a prop.

// Component.
function Content() {
  // JSX.
	return (
		<section>

			<article className="grid grid-cols-1 lg:grid-cols-5 justify-items-center lg:justify-items-start gap-5 m-5">
        <header className="lg:justify-self-end">
          <h2 id="who" className="text-3xl sm:text-5xl border-b-4 lg:border-b-0 border-black px-16 py-1 lg:px-0">Who</h2>
        </header>
        <section className="lg:col-span-4 text-center lg:text-left lg:border-l-4 lg:border-black lg:pl-5">
          <img className="max-w-xs sm:max-w-md rounded-full" src="/images/christian.jpeg" alt="" />
          <p className="text-3xl sm:text-5xl px-5 py-1 font-bold">Hello 👋🏽</p>
          <p className="text-2xl sm:text-4xl px-5 py-1">My name’s Christian</p>
          <p className="text-xl sm:text-2xl px-5 py-1 font-thin">I help developers communicate.</p>
        </section>
      </article>

      <article className="grid grid-cols-1 lg:grid-cols-5 justify-items-center lg:justify-items-start gap-5 m-5">
        <header className="lg:justify-self-end">
          <h2 id="portfolio" className="text-3xl sm:text-5xl border-b-4 lg:border-b-0 border-black px-16 py-1 lg:px-0">Portfolio</h2>
        </header>
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-4 lg:border-l-4 lg:border-black lg:pl-5">
          <article className="relative sm:col-span-2">
            <a href="https://github.com/areas-boot-camp-projects/karaoke/" alt="">
              <img src="/images/karaoke-app.jpg" alt="" />
              <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 bg-white py-1 pl-2 pr-6 sm:py-2 sm:pl-3 sm:pr-10 opacity-90">
                <h3 className="text-xl sm:text-4xl font-bold">Karaoke Finder</h3>
                <p className="text-base sm:text-3xl font-thin">JavaScript, HTML, and CSS</p>
              </div>
            </a>
          </article>
          <article className="relative">
            <a href="https://github.com/areas-boot-camp-projects/safe-travels" alt="">
              <img src="/images/safe-travels.png" alt="" />
              <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 bg-white py-1 pl-2 pr-6 sm:py-2 sm:pl-3 sm:pr-10 opacity-90">
                <h3 className="text-xl lg:text-4xl font-bold">Safe Travels</h3>
                <p className="text-base lg:text-3xl font-thin">JavaScript, HTML, and CSS</p>
              </div>
            </a>
          </article>
        </section>
      </article>

      <article className="grid grid-cols-1 lg:grid-cols-5 justify-items-center lg:justify-items-start gap-5 m-5">
        <header className="lg:justify-self-end">
          <h2 id="contact" className="text-3xl sm:text-5xl border-b-4 lg:border-b-0 border-black px-16 py-1 lg:px-0">Contact</h2>
        </header>
        <section className="lg:col-span-4 lg:border-l-4 lg:border-black lg:py-5 lg:pl-5">
        {/* todo: center text no matter the viewport size (using padding right now, which isn’t the best) */}
          <a className="text-lg sm:text-3xl text-blue-400 underline px-5 lg:px-16 xl:px-28" href="http://linkedin.com/in/christianareas">LinkedIn</a>
          <a className="text-lg sm:text-3xl text-blue-400 underline px-5 lg:px-16 xl:px-28" href="https://github.com/christianareas">GitHub</a>
          <a className="text-lg sm:text-3xl text-blue-400 underline px-5 lg:px-16 xl:px-28" href="mailto:me@areas.me">Email</a>
        </section>
      </article>

		</section>
	)
}

export default Content
