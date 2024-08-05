
const Login = () => {

  const handleClick=()=>{
     const clientId="5d487424895c455d826af1ddada2bb01";
     const redirectUrl="http://localhost:5173/";
     const apiUrl="https://accounts.spotify.com/authorize"
     const scope=[
       "user-read-email",
       "user-read-private",
       "user-read-playback-state",
       "user-read-recently-played",
       "user-read-currently-playing",
       "user-read-playback-position",
       "user-top-read"
     ]
     window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
       " "
     )}&response_type=token&show_daialog=true`
  }
  
  return (
    
    <div className="flex flex-col items-center justify-center bg-spoti p-4 h-screen">
    <div className="relative w-full max-w-lg">
      <img 
        className="w-full h-auto lg:h-[50vh] transition-all duration-700 hover:scale-90" 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/2024-spotify-brand-assets-media-kit.jpg" 
        alt="Spotify Brand" 
      />
      <button 
        onClick={handleClick}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 shadow-xl rounded-lg hover:bg-green-400 text-white py-2 px-4"
      >
        Connect to Spotify
      </button>
    </div>
  </div>
  )
}
export default Login
