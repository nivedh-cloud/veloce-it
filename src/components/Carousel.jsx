import React, {useEffect, useState} from 'react'
import img1 from '../../images/Gemini_Generated_Image_bxl7jhbxl7jhbxl7.png'
import img2 from '../../images/Gemini_Generated_Image_dlgogedlgogedlgo.png'
import img3 from '../../images/Gemini_Generated_Image_mryroomryroomryr.png'
import img4 from '../../images/Gemini_Generated_Image_s8rucns8rucns8ru.png'

const slides = [
  { src: img1, caption: 'We provide software solutions' },
  { src: img2, caption: 'Building your digital future' },
  { src: img3, caption: 'Data-driven architecture' },
  { src: img4, caption: 'Advanced AI implementations' }
]

export default function Carousel(){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i+1) % slides.length), 5000)
    return () => clearInterval(id)
  },[])

  return (
    <section className="w-full py-0">
      <div id="carousel" className="relative w-full h-[50svh] sm:h-[55dvh] lg:h-[60vh] rounded-xl sm:rounded-none overflow-hidden bg-slate-950 ring-1 ring-slate-800/30 sm:ring-0 shadow-sm sm:shadow-none">
        {slides.map((s,i)=> (
          <div key={s.src} className={`carousel-slide absolute inset-0 flex items-end justify-end transition-opacity duration-1000 ${i===index? 'opacity-100':'opacity-0'}`}>
            <img src={s.src} alt={s.caption} loading="lazy" decoding="async" className="absolute left-3 right-3 top-0 bottom-0 sm:left-0 sm:right-0 w-full h-full object-cover opacity-40" />
            <div className="hidden sm:block relative z-10 p-6 sm:p-8 lg:p-10 max-w-2xl text-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{s.caption}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
