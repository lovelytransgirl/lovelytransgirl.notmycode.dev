import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-10 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex justify-center gap-4 w-full max-w-4xl">
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
                    <p className="text-lg font-medium mb-1">FurryGang</p>
                    <span
                      style={{ marginLeft: "1.5rem" }}
                      className="bg-purple-300 text-slate-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                    >
                      she/her/they 🏳️‍⚧️
                    </span>
                  </div>
                </div>
                <div className="text-center items-center">
                  <div className="text-left items-start">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                      About Me:
                    </span>
                    <p className="mb-3"></p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm">
                      👋, I'm furrygang. I go by she/her/they! 🏳️‍⚧️
                    </p>
                    <p className="text-sm">
                      🤔 I'm a 15 years old student from Thailand!
                    </p>
                    <p className="text-sm">
                      💻 I love technology and programming!
                    </p>
                    <p className="text-sm">
                      🧑‍💻 My hobbies are coding and breaking stuff!
                    </p>
                    <p className="mb-4"></p>
                    <div className="text-left items-start">
                      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        Organizations:
                      </span>
                      <p className="mb-3"></p>
                    </div>
                    <p className="text-sm">
                      I work with a few Organizations, such as:
                    </p>
                    <p className="text-sm">
                      <a href="https://github.com/osu-somtum" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">osu-somtum</a>, <a href="https://github.com/notmycode-labs" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">notmycode-labs</a>, <a href="https://github.com/osu-somtum" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">osu-somtum</a>, and <a href="https://github.com/Minehut-Improvements" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Minehut-Improvements</a>!
                    </p>
                    <p className="mb-4"></p>
                  </div>
                  <div>
                    <p className="text-sm mb-4">
                      You can contact me on these platforms!
                    </p>
                  </div>
                  <div className="mb-4 text-center flex gap-4 items-center justify-center flex-col sm:flex-row">
                    <a
                      className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center px-3 py-2 text-sm font-medium text-center text-white gap-2"
                      href="mailto:epicmac2010@notmycode.dev"
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
                      href="https://discord.com/users/1220230816081248289"
                      
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
                  <a className="text-sm text-slate-400">
                    (3-8 days response time for email)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-gray-800/60 text-white p-6 rounded-lg shadow-md w-full max-w-md justify-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center">
            <span class="bg-purple-100 text-purple-800 text-1xl font-medium me-2 px-2.5 py-0.5 rounded-full">My Social Media</span>
              <p className="mb-4 text-sm">My Online Accounts! Get in touch and connect with me!</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center justify-center gap-2"
                  href="https://discord.com/users/1220230816081248289"
                  rel="noopener noreferrer"
                >
                  <Image src="/discord.svg" alt="Discord icon" width={16} height={16} />
                  Discord
                </a>
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center justify-center gap-2"
                  href="https://t.me/furriesgang"
                  rel="noopener noreferrer"
                >
                  <Image src="/telegram.svg" alt="Telegram icon" width={16} height={16} />
                  Telegram
                </a>
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center justify-center gap-2"
                  href="https://github.com/UnitieG"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="invert"
                    src="/github-mark.svg"
                    alt="Github icon"
                    width={16} height={16}
                  />
                  Github
                </a>
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 sm:h-12 px-4 sm:px-10 items-center justify-center gap-2"
                  href="https://steamcommunity.com/id/unityglol/"
                  rel="noopener noreferrer"
                >
                  <Image src="/steam.svg" alt="Steam icon" width={16} height={16} />
                  Steam
                </a>
              </div>
              <span class="bg-yellow-100 text-yellow-800 text-1xl font-medium me-2 px-2.5 py-0.5 rounded-full">Funny Screenshot</span>
              <div>
                <Image className="rounded" src="/bruh.png" alt="bruh" width={384} height={216} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
