import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import'../Pages/welcome.css'

export default function LogoutButton() {
  const { logout } = useAuth0()
  return (
    <div>
      <button className='logoutButton' onClick={() => logout()}>Logout</button>
    </div>
  )
}
