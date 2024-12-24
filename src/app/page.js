import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="backdrop-blur-sm flex flex-col items-center justify-center text-center bg-gray-800/60 text-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex items-center space-x-4 justify-center">
              <div className="p-2 rounded text-center items-center">
              <div className="mb-4 flex items-center justify-center">
                <Image
                  className="w-24 h-24 rounded-full shadow-lg border border-solid border-black/[.08] dark:border-white/[.145] mr-4"
                  aria-hidden
                  src="https://cdn.discordapp.com/avatars/1220230816081248289/1c11d181ef6fd8b5c20d1911c8ff2f8a?size=1024"
                  alt="My Discord PFP"
                  width={128}
                  height={128}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-medium">FurryGang</p>
                  <p className="text-sm text-gray-400">
                    <span className="text-pink-300">she</span>/<span className="text-pink-300">her</span>/<span className="text-sky-400">they</span>
                  </p>
                </div>
              </div>
              <div className="text-center items-center">
                <p className="text-sm">
                  testing 123
                </p>
                <p className="text-sm">
                  I'm currently learning <span className="text-lime-400">React</span>, <span className="text-lime-400">NodeJS</span> and <span className="text-lime-400">NextJS</span>!
                </p>
                <p className="mb-4 text-sm">
                  I mainly code in <span className="text-teal-400">Java</span> because <span className="text-teal-400">MCPL Dev</span>!
                </p>
                <div>
                  <p className="text-sm mb-4">You can contact me on these platform!</p>
                </div>
                <div className="mb-4 text-center flex gap-4 items-center justify-center flex-col sm:flex-row">
                  <a
                    className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center px-3 py-2 text-sm font-medium text-center text-white gap-2"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/gmail.svg"
                      alt="Gmail icon"
                      width={16}
                      height={16}
                    />
                    Email
                  </a>
                  <a
                    className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center px-3 py-2 text-sm font-medium text-center text-white gap-2"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/discord.svg"
                      alt="Discord icon"
                      width={16}
                      height={16}
                    />
                    Discord
                  </a>
                </div>
                <a className="text-sm text-slate-400">(3-8 days response time for email)</a>
              </div>
            </div>
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
