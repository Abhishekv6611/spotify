import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

const Plyalist = () => {
  const [{token,playlists}, dispatch ] = useStateProvider();
  console.log(token);
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/users/smedjan/playlists",
        {
          headers: {
            Authorization: "Bearer "+token,
            "Content-Type": "application/json",
          },
        }
      );
      const{items}=response.data
      const playlists=items.map(({name,id})=>{return{name,id}})
      dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
    };
    getPlaylistData();
  }, [token, dispatch]);
  return (
  <div className="h-full overflow-hidden">
<ul className="list-none flex flex-col gap-4 p-1 h-[55vh] max-h-full overflow-x-hidden wesc">
  {
    playlists.map(({name,id})=>{
    return <li className="text-gray-400 ml-1 hover:text-white flex gap-1 cursor-pointer transition ease-in-out  " key={id}>{name}</li>
})}
</ul>
  </div>

  )
};

export default Plyalist;
