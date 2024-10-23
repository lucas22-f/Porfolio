
import { Image } from "@nextui-org/react";
const Intro = (): JSX.Element => {
  return (
    <>
      <div className='container mx-auto flex justify-around items-center h-screen w-full'>

        <div className='flex w-full gap-6 justify-center'>
          <div className='flex flex-col justify-around w-1/3'>
            <h1 className='md:text-5xl text-3xl'>Hola! <p>I’m lucas</p></h1>
            <span className=''>Software Dev</span>
          </div>

          <Image
            className="md:w-full w-150"
            alt="lucas"
            src="/assets/image.png"
          />
        </div>


      </div>



    </>
  )
}

export default Intro