import Body from "./Body"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Spotify = () => {
  return (
    <div className="max-w-100vw max-h-screen	 overflow-hidden grid grid-rows-85-15	">
      <div className="grid grid-cols-15-85	h-full w-full bg-gradient-to-b bg-custom-gradient bg-customColor">
        <Sidebar/>
        <div className="h-full w-full overflow-auto">
          <Navbar/>
          <div className="body_content">
            <Body/>
          </div>
        </div>
      </div>
     <div className="spotify_footer">
      <Footer/>
     </div>
    </div>
  )
}

export default Spotify
