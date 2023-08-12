import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Pages/welcome.css'

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div>
      <button className='loginButton' onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}
