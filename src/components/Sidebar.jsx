import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import Plyalist from './Plyalist'

const Sidebar = () => {
  return (
<div className="bg-black text-[#b3b3b3] flex flex-col h-full w-full">
<div className="flex flex-col gap-1">
        <div className="text-center my-4  max-inline-size-80 ">
            <img className="block-size-auto cursor-pointer " src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify" />
        </div>
        <ul className='ml-2 '>
            <li className='flex items-center  gap-2  cursor-pointer hover:bg-gray-50  hover:text-black rounded p-2'>
                <MdHomeFilled/>
                <span>Home</span>
                </li>
            <li className='items-center flex gap-2 cursor-pointer hover:bg-gray-50   hover:text-black rounded p-2'>
                <MdSearch/>
                <span>Search</span>
            </li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-50 hover:text-black rounded  p-2'>
                <IoLibrary/>
                <span>Your Library</span>
            </li>
        </ul>
      </div>
         <Plyalist/>
    </div>
  )
}

export default Sidebar
