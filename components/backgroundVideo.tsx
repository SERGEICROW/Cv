const BackgroundVideo = () => {
  return (
      <video autoPlay loop muted className="fixed z-10 min-h-screen sm:w-auto min-w-full min-h-full max-w-none">
          <source src={"/videos/background-video.mp4"} type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
  )
}

export default BackgroundVideo