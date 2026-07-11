import React from 'react'

const items = [
    {
    title: 'World Atlas & Info',
    img: 'https://play-lh.googleusercontent.com/X1b0p58uUAoBq63wtBj4wmzuWGz75YyIY4T3a5213xzP8rGL-9pF-e-Wulo3mAhhg7_wDS7-rAHmD3_ZKxcj2w=w832-h470-rw',
    desc: 'Comprehensive global data repository with detailed country borders.',
    link: 'https://play.google.com/store/apps/details?id=com.nivedhLabs.WorldBordersnCountryInfoApp'
  },
  {
    title: 'Bible Trace Maps',
    img: 'https://play-lh.googleusercontent.com/VAmXRb4wBfkQX_I9_Eg_Yhkz86573LQ5G9b75-Vqq_Dn3LBy0yQc8T3q-SCUAvIXhtwPJseda5sarhYeZvDoXw=w832-h470-rw',
    desc: 'Hybrid mobile app with complex mapping visualizations.',
    link: 'https://play.google.com/store/apps/details?id=com.nivedh.bibletracemaps'
  },  
  {
    title: 'Bible Journey',
    img: 'https://play-lh.googleusercontent.com/F8znqRAbxgyMIwr00Ql5JLRwM6IYiYUwabQh0Et4feGgckbHhQiX3V8_lzVGNyQHrOvZIXzND-gKe2QH3D_1MQ=w480-h960-rw',
    desc: 'Engaging educational platform for exploring historical narratives.',
    link: 'https://play.google.com/store/apps/details?id=com.jeevan.biblejourney.myapp'
  }
]

export default function Portfolio(){
  return (
    <section className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Portfolio Highlights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map(it=> (
          <div key={it.title} className="glass p-6 rounded-2xl hover:scale-105 transition-transform flex flex-col">
            <img src={it.img} alt={it.title} className="rounded-xl w-full h-48 object-cover" />
            <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
            <p className="text-slate-400 text-sm mt-3 flex-grow">{it.desc}</p>
            <a href={it.link} target="_blank" rel="noreferrer" className="mt-4 text-blue-400 font-semibold hover:underline">View App →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
