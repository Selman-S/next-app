import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Hero from './components/landingPage/Hero'
import Features from './components/landingPage/Featues'
import Testimonials from './components/landingPage/Testimonials'

export default function Home() {
  return (
   <main>
   
   <Hero />
   <Features />
        <Testimonials />
   </main>
  )
}
