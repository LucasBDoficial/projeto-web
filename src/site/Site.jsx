import Banner from './components/Banner'
import Menu from './components/Menu'
import Features from './components/Features'
import Testemunho from './components/Clientes'
import Planos from './components/Planos'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Site.css'

export default function Site() {
  return (
    <div>
      <Menu />
      <Banner />
      <Features />
      <Testemunho />
      <Planos />
    </div>
  )
}
