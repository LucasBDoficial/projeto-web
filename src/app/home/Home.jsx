import { Outlet } from 'react-router-dom'

import Menuhome from '../components/navbar/Menuhome'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Menuhome />
      <Outlet />
    </div>
  )
}
