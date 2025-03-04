'use client'

import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect, useState } from 'react';

export default function BlogPostContent({ post }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-gradient font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
        <div className={`transform transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} backdrop-blur-sm bg-gray-700/50 text-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20`}>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-bold text-purple-400">Projects I've made/contributed to</div>
            <p className="text-gray-400">(Probably not all of them but you get the point)</p>
            <hr className="border-t-2 border-purple-400/30 my-4"/>
            <div className="w-full space-y-6">
              <div className="rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-purple-400">WarriorKits</div>
                  <p className="text-purple-300 text-sm">Date: <span className="text-pink-200">Late 2024 - Early 2025</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Position: <span className="text-pink-200">Owner</span> and <span className="text-pink-200">Developer</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Status: <span className="text-red-600">Dead</span></p>
                  <hr className="border-t-2 border-purple-400/30 my-2"/>
                  <p className="text-pink-200">It was my first Minecraft Server, It's mostly written in <a className="text-purple-400" href="https://github.com/SkriptLang/Skript">Skript</a>. It has constant <a className="text-purple-400">updates</a> and new <a className="text-purple-400">features</a>. It peaked at 50 players online. But It died out in early 2025 because I lost interest.</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-purple-400">LunaBoxs</div>
                  <p className="text-purple-300 text-sm">Date: <span className="text-pink-200">Late 2024 - Early 2025</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Position: <span className="text-pink-200">Admin</span> and <span className="text-pink-200">Developer</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Status: <span className="text-lime-300">Alive</span></p>
                  <hr className="border-t-2 border-purple-400/30 my-2"/>
                  <p className="text-pink-200">I can't lie, I really enjoy making <a className="text-blue-300">LunaBoxs</a>. It's one of the best project I've made. It reached 50 players online and I'm proud of it. Without it, I wouldn't be where I am today. It's a simple yet effective project that I'm proud of.</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-purple-400">LunaSteals</div>
                  <p className="text-purple-300 text-sm">Date: <span className="text-pink-200">2025 - 2025</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Position: <span className="text-pink-200">Admin</span> and <span className="text-pink-200">Developer</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Status: <span className="text-yellow-300">Unknown</span></p>
                  <hr className="border-t-2 border-purple-400/30 my-2"/>
                  <p className="text-pink-200">Unreleased Lifesteal Server. Don't even talk about it. Please.</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col gap-2">
                <a href="https://github.com/osu-somtum/SomtumMC" className="text-2xl font-bold text-purple-400 hover:text-purple-600">SomtumMC</a>
                  <p className="text-purple-300 text-sm">Date: <span className="text-pink-200">Early 2024 - Late 2024</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Position: <span className="text-pink-200">Developer</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Status: <span className="text-red-600">Dead</span></p>
                  <hr className="border-t-2 border-purple-400/30 my-2"/>
                  <p className="text-pink-200">A Minecraft Server that's hosted on an osu! server? This project made me learn <a className="text-purple-300">Java</a>. I made a plugin for it. It was my first bukkit plugin and I am proud of even tho it's bad. Sadly It's dead now. and we have no plan to revive it.</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col gap-2">
                <a href="https://github.com/lovelytransgirl/mc-deeka-api" className="text-2xl font-bold text-purple-400 hover:text-purple-600">DeekaMC</a>
                  <p className="text-purple-300 text-sm">Date: <span className="text-pink-200">Late 2024 - Early 2025</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Position: <span className="text-pink-200">Owner</span> and <span className="text-pink-200">Developer</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Status: <span className="text-red-600">Dead</span></p>
                  <hr className="border-t-2 border-purple-400/30 my-2"/>
                  <p className="text-pink-200">Another Minecraft Server, This project exist because MCTham Drama. <a href="https://mindhas403.dev/post/mccooked" className="text-purple-300">(More Information Here)</a>, It died because I lost interest.</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/Minehut-Improvements/panel" className="text-2xl font-bold text-purple-400 hover:text-purple-600">Minehut Improvements</a>
                  <p className="text-purple-300 text-sm">Date: <span className="text-pink-200">2025 - 2025</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Position: <span className="text-pink-200">Researcher</span></p>
                  <p className="text-purple-300 text-sm -mt-2">Status: <span className="text-red-600">Dead</span></p>
                  <hr className="border-t-2 border-purple-400/30 my-2"/>
                  <p className="text-pink-200">It's a project made by my friend <a href="https://oddbyte.dev" className="text-purple-300">OddByte</a>. It's a project to make 3rd party Minehut Panels. I'm not really sure what to say about this project. It died out because <a className="text-purple-300">Tim Stiffler-Dean</a> decide to lock development env when we report an exploit. And <a href="https://oddbyte.dev" className="text-purple-300">OddByte</a> and <a className="text-purple-300">I</a> lost interest because of it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}