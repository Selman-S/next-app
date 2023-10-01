
import React from 'react'
import pro1 from '../../public/tailwind-css-component-profile-2@56w.png'
import pro2 from '../../public/tailwind-css-component-profile-4@56w.png'
import pro3 from '../../public/tailwind-css-component-profile-3@56w.png'
import pro4 from '../../public/tailwind-css-component-profile-5@56w.png'
import Image from 'next/image'
let profList = [pro1, pro2, pro3, pro4]
interface User {
  id: number;
  name: string;
  email: string;
  adress: {
    street: string;
    city: string;
    suite: string;
  };
  company: {
    name: string;
    bs: string;
    catchPhrase: string;
  };
  website: string;
}
const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users : User[] = await res.json();


  return (
    <div>
      <h1 className="text-5xl font-bold">Users</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Website</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
        
        {users.map(user => (
           <tr key={user.id}>
           <th>
             <label>
               <input type="checkbox" className="checkbox" />
             </label>
           </th>
           <td>
             <div className="flex items-center space-x-3">
               <div className="avatar">
                 <div className="mask mask-squircle w-12 h-12">
                   <Image src={profList[user.id % 4]} alt={"Avatar Tailwind CSS Component"+ user.name} />
                 </div>
               </div>
               <div>
                 <div className="font-bold">{user.name}</div>
                 <div className="text-sm opacity-50">{user.company?.name}</div>
               </div>
             </div>
           </td>
           <td>
           {user.company?.catchPhrase}
             <br/>
             <span className="badge badge-ghost badge-sm">{user.company?.bs}</span>
           </td>
           <td>{user.website}</td>
           <th>
             <button className="btn btn-ghost btn-xs">details</button>
           </th>
         </tr>
        ))}
    
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Website</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
      
    </div>
  )
}

export default UsersPage