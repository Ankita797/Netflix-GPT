import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    const trailerVideo= useSelector(store=>store.movies?.trailerVideo);

    useMovieTrailer(movieId);
   
  return (
    <div className="">
    <iframe 
   className="w-screen aspect-video"
  src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0"}
  title="YouTube video player"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  />
    
    </div>
  )
}

export default VideoBackground;

