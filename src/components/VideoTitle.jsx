const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex space-x-4">
       <button className="bg-white text-black p-4 px-12 text-lg rounded-lg transition duration-300 hover:bg-gray-300 hover:scale-105">
  ▶ Play
</button>

        <button className="bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
