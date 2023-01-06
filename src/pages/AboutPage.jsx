import React, { useEffect, useState } from 'react'
import Arrow from "../assets/icons/Arrow"
import one from "../assets/images/ducks/1.png"
import two from "../assets/images/ducks/2.png"
import three from "../assets/images/ducks/3.png"
import four from "../assets/images/ducks/4.png"
import five from "../assets/images/ducks/5.png"

function AboutPage() {

  const authors = [
    {
      id:"1",
      name: "Azim",
      img: one,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable conteb sites still in their infancy. Various versions have evolved over the years"
    },
    {
      id:"2",
      name: "Kamal",
      img: two,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable conteb sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      id:"3",
      name: "Narmin",
      img: three,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable conteb sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      id:"4",
      name: "Shams",
      img: four,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable conteb sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      id:"5",
      name: "Turan",
      img: five,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable conteb sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }

  ]

  const [activeImage, setActiveImage] = useState(1);
  const [currentAuthor, setCuttentAuthor] = useState(authors[0]);

  useEffect(()=>{
    setCuttentAuthor(authors.find(author => +author.id === activeImage))
  },[activeImage])
 

  const nextImg = () => {
    activeImage === 5 ? setActiveImage(1) : setActiveImage(activeImage+1)   
    // window.scrollTo({ top: 100, behavior: 'smooth' });
  }

  const prevImg = () => {
    activeImage === 1 ? setActiveImage(5) :setActiveImage(activeImage-1)
    // window.scrollTo({ top: 100, behavior: 'smooth' });
  }



  return (
    <div className="no-back-page-wrapper">
      <div className="images">

        <div className="frame">
            <img key={activeImage} className="current-image" src={authors[activeImage-1].img} />            
            <img key={activeImage + 1} className="next-image" src={activeImage === 5 ? authors[activeImage-5].img : authors[activeImage].img} />
            <img key={activeImage + 2} className="next-2-image" src={activeImage === 4 || activeImage === 5 ? authors[activeImage-4].img : authors[activeImage + 1].img} />
        </div>

        <p>{activeImage}/5</p>
        <div className="buttons-wrapper">
          <button className='left' onClick={prevImg}><Arrow /></button>
          <button className='right' id='right' onClick={nextImg}><Arrow /></button>
        </div>
      </div>

      <div className="bio">
        <h1 className='name'>
          {currentAuthor.name}
        </h1>
        <p className='description'>
          {currentAuthor.description}
        </p>
      </div>
        
    </div>
  )
}

export default AboutPage