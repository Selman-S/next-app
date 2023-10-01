import Image from 'next/image'
import React from 'react'

function Hero(){
  return(
      <div className="hero py-32 bg-base-100">
          <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
              <Image alt='sad' width={100} height={100} src="https://images.pexels.com/photos/18254094/pexels-photo-18254094/free-photo-of-isik-safak-peyzaj-gokyuzu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
              </div>
          </div>
      </div>
  )    
}

export default Hero