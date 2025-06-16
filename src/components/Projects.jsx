const Projects = () => {
  return (
    <div id='projects' className="min-h-screen w-full
    flex flex-col items-center justify-center gap-20
    p-10 md:p-16 xl:px-32">
      <h1 className="text-center text-5xl font-light">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* Polisports Card */}
        <div className="h-[280px] flex flex-col justify-between
        text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 
        cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50 overflow-hidden">
          <h1 className="text-3xl font-semibold">Polisports</h1>
          <h3 className="text-xl text-gray-700">Next.js, Tailwind, Node.js, Supabase</h3>
          <p className="text-sm text-gray-600">
            A responsive sports web app for PUPR, using modern tools 
            to manage content and display it cleanly.
          </p>
        </div>

        {/* Real Estate Manager Card */}
        <a
          href="https://github.com/jcas12/Real-Estate-Manager"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-[280px] flex flex-col justify-between
          text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 
          cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50 overflow-hidden">
            <h1 className="text-3xl font-semibold">Real Estate Manager</h1>
            <h3 className="text-xl text-gray-700">Python, PYQT5, MySQL</h3>
            <p className="text-sm text-gray-600">
              A desktop app to manage real estate listings.
            </p>
          </div>
        </a>

        {/* Placeholder Card */}
        <a
          href="https://github.com/jcas12/Exo-s-Adventure"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-[280px] flex flex-col justify-between
          text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 
          cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50 overflow-hidden">
            <h1 className="text-3xl font-semibold">Exo's Adventure</h1>
            <h3 className="text-xl text-gray-700">Python, Pygame, Aseprite</h3>
            <p className="text-sm text-gray-600">
              SNES inspired game created to reinforce Python concepts.
            </p>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects;