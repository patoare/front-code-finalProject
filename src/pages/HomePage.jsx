import video from '../assets/video.mp4'

const HomePage = () => {
    
return (
<>
<h1 className="titlePage">PhysioMove</h1>
<p className='textHomePAge'>Welcome to PhysioMove
Your trusted database for managing your clinic. PhysioMove provides therapists with a personalized user account to efficiently track and manage their patients’ daily progress. Below, you’ll find an image showcasing what the platform looks like once you’re logged in. We hope you’ll join our growing community and take your practice to the next level!</p>
<video className="backgroundHome" autoPlay loop muted playsInline >
        <source src={video} type="video/mp4" />
        {/* Mensaje para navegadores que no soportan video */}
        Tu navegador no soporta videos HTML5.
      </video>

<h3 className="titlePage">Become a new member !</h3>

</>

)
}
export default HomePage


