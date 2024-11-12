import Link from 'next/link'
import '../globals.css'

export default function Navbar() {
  return (
    <>
        <div className='flex justify-between bg-custom-gradient px-10 py-4 items-center font-nunito text-sm absolute z-50 w-full'>
            <div>
                <h1 className='font-nunito  text-lg font-semibold'>Balaji RO Service </h1>
            </div>

            <div>
                <ul className='flex gap-x-5 text-lg'>
                    <Link href= "/"><li>Home</li></Link>
                  <Link href= "/services">  <li>Services</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                  <Link href={"/contact"}><li>Contact</li></Link>
                  
                </ul>
            </div>

            <div className='flex gap-x-4'>
                
               <p> Rajendra Nagar,<br/> Bareilly</p>
               <p> Call Us : <br /> +91 123456789</p> 
            </div>

        </div>
    </>
  )
}
