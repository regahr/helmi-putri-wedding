import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div data-aos="fade-up" data-aos-delay={300} className='w-full h-[400px] relative'>
      <Image data-aos={"fade-up"} src={"/macbook-pro.jpg"} fill/>
      <p className="font-mono text-neutral-200 w-full h-full text-center text-[100px] absolute flex items-center justify-center">
                Helmi
                </p>
      </div>
      <div data-aos="fade-up" data-aos-delay={900} className='absolute min-h-screen flex items-center z-30'>
      <p className="font-mono text-neutral-200 w-full text-center text-[100px] absolute flex justify-center">
                Wedding
                </p>
      </div>
      <div data-aos="fade-up" data-aos-delay={600} className='w-full h-[400px] relative'>
      <Image data-aos={"fade-up"} src={"/money.jpg"} fill/>
      <p className="font-mono text-neutral-200 w-full h-full  text-center text-[100px] absolute flex items-center justify-center">
                Putri
                </p>
      </div>
      
    </main>
  )
}
