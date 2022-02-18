import Typewriter from 'typewriter-effect';

export const Hero = () => {
    return (
        <>
            {/* <Navbar /> */}
                <div className='flex h-screen mx-auto justify-center items-center max-w-2xl'>
                    <h1 className='text-6xl md:text-8xl font-chasm'>
                        <Typewriter
                            options={{
                            strings: ['we are', 'mnml'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </h1>
                </div>
        </>
    );
}

export default Hero;
