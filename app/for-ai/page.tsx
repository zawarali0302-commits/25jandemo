const ForAI = () => {
  return (
   <div className="flex flex-col gap-4">
    <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Upload File</h1>
        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">Upload</button>
    </div>

    <div className="flex flex-col gap-4 mx-5">
        <h1>API Response</h1>
        <p className="border border-gray-300 rounded-md p-2 w-full h-70">{}</p>
    </div>
    <div className="flex mx-auto">
        <form action="" className="flex gap-4 items-center">
        <input type="text" placeholder="Enter your prompt" className="border border-gray-300 rounded-md w-96 p-2" />
        <button type="submit" className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">Ask</button>
    </form>
    </div>
    
   </div>
  )
}

export default ForAI
