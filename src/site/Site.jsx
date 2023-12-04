import Banner from './components/Banner'
import Menu from './components/Menu'
import Features from './components/Features'
import Testemunho from './components/Clientes'
import Planos from './components/Planos'

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
