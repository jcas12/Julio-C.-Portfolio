import { BiRightArrowAlt, BiHome } from 'react-icons/bi'
import { RiBriefcase4Line } from "react-icons/ri"
import { FaLaptopCode } from "react-icons/fa6"
import { LuContact } from "react-icons/lu"

const HeaderLeft = () => {
  return (
    <div className='md:flex-[1]'>
      <div className='min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-blue-600 text-white'>
        <ul className='flex flex-col gap-10'>
          {["home", "experience", "projects", "contact"].map((item) => (
            <li
              key={item}
              className='flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl'
            >
              <BiRightArrowAlt
                className='text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0'
              />
              <a
                href={`#${item}`}
                className='transition-all duration-200 hover:translate-x-3'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-blue-600 p-5 text-white md:hidden'>
        <a href="#home" className='flex flex-col items-center justify-center'>
          <BiHome className='text-2xl' />
          <span className='text-xs'>home</span>
        </a>

        <a href="#experience" className='flex flex-col items-center justify-center'>
          <RiBriefcase4Line className='text-2xl' />
          <span className='text-xs'>experience</span>
        </a>

        <a href="#projects" className='flex flex-col items-center justify-center'>
          <FaLaptopCode className='text-2xl' />
          <span className='text-xs'>projects</span>
        </a>

        <a href="#contact" className='flex flex-col items-center justify-center'>
          <LuContact  className='text-2xl' />
          <span className='text-xs'>contact</span>
        </a>
      </div>
    </div>
  )
}

export default HeaderLeft