import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Home = () => {
  return (
    <div id="home" className="flex min-h-screen w-full items-center justify-center"> 

        <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
            <img src="/julioselfie.JPG" alt="" className='w-[250px] sm:w-[300px] rounded-full'/>

            <div className="space-y-1 sm:space-y-3">
                <h1 className='bg-gradient-to-r from-blue-500 to-blue-600
                bg-clip-text text-4xl font-semibold text-transparent md:text-5xl
                lg:text-6xl'>Julio Cuello</h1>
                <h2 className='bg-gradient-to-r from-blue-500 to-blue-600
                bg-clip-text text-4xl font-semibold text-transparent md:text-2xl
                lg:text-3xl'>Computer Science Senior</h2>
                <p className='max-w-[500px] text-sm text-gray-500'>
                    Hey! My name is Julio Cuello. I am a rising Senior
                    that is currently studying Computer Science at the
                    Polytechnic University of Puerto Rico. I have a deep interest
                    in expanding my portfolio with more industry experience, 
                    especially ones relating to software or cybersecurity.
                </p>
            </div>

            {/* Social Media Links! */}
            <div className="flex gap-3">
                <a 
                  href="https://github.com/jcas12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2
                  border-transparent bg-blue-600 p-2 text-white transition-all duration-200
                  hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600
                  md:h-12 md:w-12'/>
                </a>

                <a 
                  href="https://www.linkedin.com/in/julio-cuello-s/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2
                  border-transparent bg-blue-600 p-2 text-white transition-all duration-200
                  hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600
                  md:h-12 md:w-12'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home