import React, {useState} from 'react'
import img2 from "../asserts/back.png";
import img1 from "../asserts/aceOfClub.png";

const MainPage = () => {
  const [activeCard, setActiveCard] = useState(false)

  const handleFlip = () => {
    setActiveCard(!activeCard)
  }
  return (
    <React.Fragment>
    <main>
      <div className='h-screen centered'>
        <div 
        onClick={handleFlip}
        className={`relative card ${activeCard? 'cardFlip':''}`}>
            {/* front */}
            <div className='front'>
            <img src={img2} alt="image" className="w-60 h-96" />
            </div>

            {/* back */}
            <div className="absolute top-0 back">
            <img src={img1} alt="image" className="w-60 h-96" />
            </div>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage