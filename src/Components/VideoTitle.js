import React from 'react'

const VideoTitle = ({title , overview }) => {
  return (<>
    <div className="absolute w-screen aspect-video pt-[14%] px-12 mr-4 text-white bg-gradient-to-r from-black ">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-4 text-large w-1/4"> {overview}</p>
    <div className="flex">
        <button className=" bg-white h-14 p-4 items-center  px-12 text-lg text-black hover:bg-opacity-80 rounded-lg"> ▶︎ Play</button>
        <button className =" item-center mx-2 bg-gray-500 h-14 p-4 text- px-12 text-lg text-white bg-opacity-50 rounded-lg"> More info</button>
    </div>
    </div>
    </>
  )
}

export default VideoTitle
