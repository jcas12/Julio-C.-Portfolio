const Experience = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">

          {/* Techno Inventors */}
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Techno Inventors</h3>
            <p className="font-light text-lg text-gray-600">Professor (May 2025–Present)</p>
            <p className="text-sm text-gray-600">
              Teaching programming and robotics concepts to students through project-based learning.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-600"></span>
          </div>

          {/* Polytechnic University */}
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Polytechnic University of Puerto Rico
            </h3>
            <p className="font-light text-lg text-gray-600">C++ Tutor (November 2024–May 2025)</p>
            <p className="text-sm text-gray-600">
              Mentored students in Programming Fundamentals, helping them improve homework 
              and test scores with a custom "APC" (Analyze, Pseudo, Code) method.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-600"></span>
          </div>

          {/* Stryker */}
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">Stryker</h3>
            <p className="font-light text-lg text-gray-600">I.T Intern (June 2024–August 2024)</p>
            <p className="text-sm text-gray-600">
              Set up secure devices, implemented Yubico authentication, 
              and supported over 45 employees with IT troubleshooting and configuration.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-600"></span>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="relative mt-10 flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-md group"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>
        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-ml-4 group-hover:-mb-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-600 rounded-md group-hover:translate-x-0" />
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          Download Resume
        </span>
      </a>
    </div>
  );
};

export default Experience;