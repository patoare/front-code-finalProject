import video from '../assets/video.mp4'

const HomePage = () => {
    
return (
<>
<h1 className="titlePage">PhysioMove</h1>
<video
        className="backgroundHome"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        {/* Mensaje para navegadores que no soportan video */}
        Tu navegador no soporta videos HTML5.
      </video>

<h3 className="titlePage">Become a new member !</h3>

</>

)
}
export default HomePage


