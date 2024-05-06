'use client';

import {useCompletion} from 'ai/react';

export default function Page() {

  const {completion, input, handleInputChange, handleSubmit, error } = useCompletion();

  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-start items-center  bg-cover bg-center' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url("https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg")'}}>

      <h1 className='text-center mt-10 text-white font-bold text-6xl tracking-wider'>Text <span className=' bg-gradient-to-tr from-orange-800 via-orange-500 to-orange-300 bg-clip-text text-transparent'>Magic </span>Forge</h1>
      <p className='text-center text-white font-light text-3xl tracking-wider'>Crafting Words with OpenAI&#39;s Alchemy</p>

      {error && (
        <div className='fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white'>
          {error.message}
        </div>
      )}
      <div className='  p-4 overflow-scroll  w-[56%] rounded-xl h-[26rem]'>
        <p className='text-white text-center text-3xl tracking-wider font-light'>{completion}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='fixed bottom-0 left-1/2 mb-6 mt-3 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start w-[45%]'>
        <label className='text-white text-xl font-bold tracking-wider mb-2' htmlFor="prompt">Enter Your Prompt</label>
        <input onChange={handleInputChange} value={input} placeholder='Say something...' className=' w-full  p-2  border border-gray-300 rounded-xl shadow-xl shadow-amber-600' type="text" id='prompt' />
        </div>
      </form>
    </div>
  )
}
