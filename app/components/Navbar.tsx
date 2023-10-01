import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/photo-1534528741775-53994a69daeb.jpg'
import Link from 'next/link'
import SwichTheme from './SwichTheme'
const Navbar = () => {
  return (
    <div>
  <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/users">Users</Link></li>
      <li><Link href="/users">New</Link></li>
    
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar