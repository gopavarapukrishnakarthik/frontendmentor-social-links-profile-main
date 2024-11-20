import react from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import jessica from "./assets/images/jessica.jpeg";
import { Avatar, AvatarImage } from './components/ui/avatar';
import { Button } from './components/ui/button';


function App() {

  return (
    <div className='bg-[#141414] h-screen flex items-center justify-center'>
      <div className='bg-[#1f1f1f] w-96 p-2 h-auto text-center justify-items-center rounded-md' style={{ fontFamily: 'Inter, sans-serif' }}>
        <Avatar className="mt-5 w-20 h-20 justify-items-center">
          <AvatarImage src={jessica} alt="@shadcn" />
        </Avatar>
        <h1 className='text-2xl text-white'>Jessica Randall</h1>
        <p className='text-[#c5f729] text-sm'>London, United Kingdom</p>
        <p className='text-white mt-5'>"Front-end developer and avid reader."</p>
        <div className='flex flex-col gap-4 p-5'>
          <Button className='bg-[#333333] font-semibold text-white w-80 hover:bg-[#c5f729] hover:text-black'>GitHub</Button>
          <Button className='bg-[#333333] font-semibold text-white w-80 hover:bg-[#c5f729] hover:text-black'>Frontend Mentor</Button>
          <Button className='bg-[#333333] font-semibold text-white w-80 hover:bg-[#c5f729] hover:text-black'>Linkedin</Button>
          <Button className='bg-[#333333] font-semibold text-white w-80 hover:bg-[#c5f729] hover:text-black'>Twitter</Button>
          <Button className='bg-[#333333] font-semibold text-white w-80 hover:bg-[#c5f729] hover:text-black'>Instagram</Button>
        </div>
      </div>
    </div>

  )
}

export default App
