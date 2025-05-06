import Link from 'next/link'

const page = () => {
  return (
    
    <div className=' container bg-amber-300 flex items-center justify-center flex-col h-[30vh]'>
    <h1 className=' text-black text-5xl font-bold'> Your Email is verifies please go to the login page</h1>
    <Link href="/login" className=' text-blue-600 font-3xl'>Please go to login page</Link>
    </div>
  )
}

export default page
