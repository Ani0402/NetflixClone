import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-[vw] absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="w-1/3 mt-4">
       {overview}
      </p>
      <div className='mt-8 flex'>
        <button className="flex items-center gap-1 px-6 py-2 bg-white text-black rounded-md hover:opacity-85">
        <PlayArrowIcon/>
          Play
        </button>
        <button className="flex mx-2 items-center gap-1 px-6 py-2 bg-white text-black rounded-md  hover:opacity-85">
          <InfoIcon/>
          Watch More
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
