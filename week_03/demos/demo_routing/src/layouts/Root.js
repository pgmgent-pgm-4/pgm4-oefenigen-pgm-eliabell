import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <div> navigation bar </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
