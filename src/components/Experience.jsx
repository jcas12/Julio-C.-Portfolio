const Experience = () => {
  return (
    <div id="experience" className="flex min-h-screen w-full
    flex-col items-center justify-center gap-20 p-14 lg:p-36">
      <h1 className="text-center text-5xl font-light ">Experience</h1>
      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10 ">
        <div className="flex-1">

          <div className="relative space-y-1 border-l-2 p-8
          text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Techno Inventors</h3>
            <p className="font-light text-lg text-gray-600">Professor (May 2025-Present)</p> 
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-600"></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8
          text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Polytechnic Univesity
              of Puerto Rico</h3>
            <p className="font-light text-lg text-gray-600">C++ Tutor (November 2024-May 2025) </p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-600"></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8
          text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Stryker</h3>
            <p className="font-light text-lg text-gray-600">I.T Intern (June 2024-August 2024)</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-600"></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience