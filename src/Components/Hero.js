import Typewriter from 'typewriter-effect';

export const Hero = () => {

  return (

    <>

      <div className='flex h-screen mx-auto justify-center items-center max-w-8xl'>

        <div className="flex-col">

          <h1 className='text-6xl md:text-9xl text-gray-900'>

            <Typewriter
              options={{
                strings: ['Minimal.', 'Simple.', 'Creative.'],
                autoStart: true,
                loop: true,
              }}
            />

          </h1>

          <div className="mt-20 flex-col mx-auto uppercase text-center text-gray-900">

            <p className="animate-bounce">&darr;</p>
            <p className="text-xs">Scroll down</p>

          </div>

        </div>

      </div>

    </>

  );

}

export default Hero;
