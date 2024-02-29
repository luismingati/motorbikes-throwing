import Card from "./components/Card"
import Header from "./components/Header"
import Hero from "./components/Hero"

const Home = () => {
  return (
    <div className="flex h-screen flex-col">
      <header>
        <Header/>
      </header>

      <main className="flex flex-1 flex-col">
        <Hero/>

        <div>DESCRIÇÃO + cards</div>
        <Card />
        <div>FORMS </div>

      </main>

      <footer className="flex flex-col bg-white p-6 text-black">
        <p>Desenvolvido por: </p>
      </footer>
    </div>
  );
}

export default Home
