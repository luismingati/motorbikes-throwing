import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <header className="flex bg-white p-6 text-black">
        <p>HEADER</p>
        <Image 
        />
      </header>

      <main className="flex flex-col flex-1 p-6">
        <p>A espera acabou, a campeã de vendas vai voltar e agora você está ainda mais perto de conquistar a sua.</p>
        IMAGEM
        <div>
          DESCRIÇÃO + cards
        </div>
        <div>
          FORMS
        </div>
      </main>

      <footer className="flex flex-col bg-white text-black p-6">
        <p>Desenvolvido por: </p>
      </footer>
    </div>
  );
}
