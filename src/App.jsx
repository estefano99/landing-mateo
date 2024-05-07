import { useEffect, useState } from "react";
import useTypewriter from "react-typewriter-hook";
import Confetti from "react-confetti";

function App() {
  const [confetti, setConfetti] = useState(false);

  function MagicWriter(word) {
    const typing = useTypewriter(word);
    return typing;
  }

  const handleConfetti = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 5000);
  };

   const reproducirAudio = () => {
    const audio = document.getElementById('my-audio')
    audio.play()
  };

  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {confetti && <Confetti className="w-full h-full" />}

      <section>
        <div className="h-2/5 w-full flex justify-center items-center ">
          <h1 className="text-[100px] font-bold text-white shadow-lg shadow-red-600">
            MATEO
          </h1>
        </div>
        <p className="text-white w-full flex justify-center mt-8 text-3xl font-bold title">
          {MagicWriter("Mi cumpleaños")}
        </p>
      </section>
      <div className="w-full h-[10%] flex justify-center items-center  rounded-md my-8">
        <p className="text-white text-5xl font-bold">😎 13 😎</p>
      </div>
      <section className="h-2/5 text-white flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold text-xl">07 de Mayo | 20:30hs</h2>
        <p className="text-lg">Club "25 de Mayo"</p>
        <p className="text-lg">(Enfrente de mi casa)</p>
        <button
          className="bg-red-600 rounded-md p-5 font-semibold text-lg mt-4 hover:bg-red-800 transition-all"
          onClick={() => {
            handleConfetti();
            reproducirAudio();
          }}
        >
          Clickeá acá
        </button>
      </section>
      <audio src="./trompeta.mp3" id="my-audio"></audio>
    </div>
  );
}

export default App;
