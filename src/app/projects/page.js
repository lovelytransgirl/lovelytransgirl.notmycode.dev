'use client'

import Navbar from '../Navbar';
import Footer from '../Footer';

export default function BlogPostContent({ post }) {
  return (
    <div className="font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
        <div className="backdrop-blur-sm bg-surface0 text-text p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-lavender/10">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-bold text-lavender">Projects I've made/contributed to</div>
            <p className="text-subtext1">(Probably not all of them but you get the point)</p>
            <hr className="border-t-2 border-lavender/30 my-4"/>
            <div className="w-full space-y-6">
              <div className="rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-lavender">WarriorKits</div>
                  <p className="text-text text-sm">Date: <span className="text-mauve">Late 2024 - Early 2025</span></p>
                  <p className="text-text text-sm -mt-2">Position: <span className="text-mauve">Owner</span> and <span className="text-mauve">Developer</span></p>
                  <p className="text-text text-sm -mt-2">Status: <span className="text-red">Dead</span></p>
                  <hr className="border-t-2 border-lavender/30 my-2"/>
                  <p className="text-mauve">It was my first Minecraft Server, It's mostly written in <a className="text-lavender hover:text-blue" href="https://github.com/SkriptLang/Skript">Skript</a>. It has constant <a className="text-lavender hover:text-blue">updates</a> and new <a className="text-lavender hover:text-blue">features</a>. It peaked at 50 players online. But It died out in early 2025 because I lost interest.</p>
                </div>
              </div>

              <div className="rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-lavender">LunaBoxs</div>
                  <p className="text-text text-sm">Date: <span className="text-mauve">Late 2024 - Early 2025</span></p>
                  <p className="text-text text-sm -mt-2">Position: <span className="text-mauve">Admin</span> and <span className="text-mauve">Developer</span></p>
                  <p className="text-text text-sm -mt-2">Status: <span className="text-green">Alive</span></p>
                  <hr className="border-t-2 border-lavender/30 my-2"/>
                  <p className="text-mauve">I can't lie, I really enjoy making <a className="text-blue hover:text-sky" href="#">LunaBoxs</a>. It's one of the best project I've made. It reached 50 players online and I'm proud of it. Without it, I wouldn't be where I am today. It's a simple yet effective project that I'm proud of.</p>
                </div>
              </div>

              <div className="rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-lavender">LunaSteals</div>
                  <p className="text-text text-sm">Date: <span className="text-mauve">2025 - 2025</span></p>
                  <p className="text-text text-sm -mt-2">Position: <span className="text-mauve">Admin</span> and <span className="text-mauve">Developer</span></p>
                  <p className="text-text text-sm -mt-2">Status: <span className="text-yellow">Unknown</span></p>
                  <hr className="border-t-2 border-lavender/30 my-2"/>
                  <p className="text-mauve">Unreleased Lifesteal Server. Don't even talk about it. Please.</p>
                </div>
              </div>

              <div className="rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/osu-somtum/SomtumMC" className="text-2xl font-bold text-lavender hover:text-blue">SomtumMC</a>
                  <p className="text-text text-sm">Date: <span className="text-mauve">Early 2024 - Late 2024</span></p>
                  <p className="text-text text-sm -mt-2">Position: <span className="text-mauve">Developer</span></p>
                  <p className="text-text text-sm -mt-2">Status: <span className="text-red">Dead</span></p>
                  <hr className="border-t-2 border-lavender/30 my-2"/>
                  <p className="text-mauve">A Minecraft Server that's hosted on an osu! server? This project made me learn <a className="text-lavender hover:text-blue" href="#">Java</a>. I made a plugin for it. It was my first bukkit plugin and I am proud of even tho it's bad. Sadly It's dead now. and we have no plan to revive it.</p>
                </div>
              </div>

              <div className="rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/lovelytransgirl/mc-deeka-api" className="text-2xl font-bold text-lavender hover:text-blue">DeekaMC</a>
                  <p className="text-text text-sm">Date: <span className="text-mauve">Late 2024 - Early 2025</span></p>
                  <p className="text-text text-sm -mt-2">Position: <span className="text-mauve">Owner</span> and <span className="text-mauve">Developer</span></p>
                  <p className="text-text text-sm -mt-2">Status: <span className="text-red">Dead</span></p>
                  <hr className="border-t-2 border-lavender/30 my-2"/>
                  <p className="text-mauve">Another Minecraft Server, This project exist because MCTham Drama. <a href="https://mindhas403.dev/post/mccooked" className="text-lavender hover:text-blue">(More Information Here)</a>, It died because I lost interest.</p>
                </div>
              </div>

              <div className="rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/Minehut-Improvements/panel" className="text-2xl font-bold text-lavender hover:text-blue">Minehut Improvements</a>
                  <p className="text-text text-sm">Date: <span className="text-mauve">2025 - 2025</span></p>
                  <p className="text-text text-sm -mt-2">Position: <span className="text-mauve">Researcher</span></p>
                  <p className="text-text text-sm -mt-2">Status: <span className="text-red">Dead</span></p>
                  <hr className="border-t-2 border-lavender/30 my-2"/>
                  <p className="text-mauve">It's a project made by my friend <a href="https://oddbyte.dev" className="text-lavender hover:text-blue">OddByte</a>. It's a project to make 3rd party Minehut Panels. I'm not really sure what to say about this project. It died out because <a className="text-lavender hover:text-blue" href="#">Tim Stiffler-Dean</a> decide to lock development env when we report an exploit. And <a href="https://oddbyte.dev" className="text-lavender hover:text-blue">OddByte</a> and <a className="text-lavender hover:text-blue" href="#">I</a> lost interest because of it.</p>
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