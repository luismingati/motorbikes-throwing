import Card from "./components/Card"
import { Montserrat } from 'next/font/google'
import Header from "./components/Header"
import Hero from "./components/Hero"

const inter = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {
  return (
    <div className="flex h-screen flex-col">
      <header>
        <Header/>
      </header>

      <main className="flex flex-1 flex-col">
        <Hero/>
        <div className="mb-7"></div>
        <Card />
      </main>

      <footer className="flex flex-col bg-white p-6 text-black">
        <p>Desenvolvido por: </p>
      </footer>
    </div>

  );
}

export default Home
