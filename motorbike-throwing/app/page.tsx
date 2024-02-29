import Card from "./components/Card"
import { Roboto } from 'next/font/google'

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {
  return (
    <main className={inter.className}>
      <div className="flex h-screen flex-col">
        <header className="flex bg-white p-6 text-black">
          <p>HEADER</p>
        </header>

        <main className="flex flex-1 flex-col p-6 text-white">
          <p>
            A espera acabou, a campeã de vendas vai voltar e agora você está ainda
            mais perto de conquistar a sua.
          </p>

          <div>DESCRIÇÃO + cards</div>
          <Card />
          <div>FORMS </div>

        </main>

        <footer className="flex flex-col bg-white p-6 text-black">
          <p>Desenvolvido por: </p>
        </footer>
      </div>
    </main>
  );
}

export default Home
