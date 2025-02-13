import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-mali)] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
      <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-4xl">
          {/* Profile Card */}
          <div className="backdrop-blur-sm flex flex-col items-center justify-center text-center bg-gray-800/60 text-white p-4 sm:p-6 rounded-lg shadow-md w-full border border-purple-400/10 ring-4 ring-purple-400/20">
            <div className="flex flex-col items-center space-y-4 justify-center w-full">
              <div className="p-2 rounded text-center items-center w-full">
                <div className="mb-4 flex flex-col sm:flex-row items-center justify-center">
                  <Image
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg border border-solid border-black/[.08] dark:border-white/[.145] mb-3 sm:mb-0 sm:mr-4"
                    aria-hidden
                    src="https://cdn.discordapp.com/avatars/1220230816081248289/a2616b83bc1e732faf6bc27281e3e882.webp"
                    alt="My Discord PFP"
                    width={128}
                    height={128}
                  />
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-lg font-medium mb-1">FurryGang</p>
                    <span className="bg-purple-400 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      she/her/they 🏳️‍⚧️
                    </span>
                  </div>
                </div>

                <div className="text-center items-center">
                  <div className="text-left items-start">
                    <span className="bg-indigo-400 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      About Me:
                    </span>
                    <p className="mb-3"></p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm">
                      A 15 years old student from Thailand
                    </p>
                    <p className="text-sm">
                      Developer at notmycode-labs and osu-somtum.
                    </p>
                    <p className="text-sm">
                      Primary code in js and design frontend.
                    </p>
                    <p className="text-sm">
                      Has a weird hobby of being a gay furry
                    </p>
                    <p className="mb-4"></p>
                    <div className="text-left items-start">
                      <span className="bg-green-400 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Contributions
                      </span>
                      <p className="mb-3"></p>
                    </div>
                    <p className="text-sm">
                      I have contribute to organizations such as
                    </p>
                    <p className="text-sm">
                      <a href="https://github.com/osu-somtum" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">osu-somtum</a> and <a href="https://github.com/notmycode-labs" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">notmycode-labs</a>!
                    </p>
                    <p className="mb-4"></p>
                  </div>
                  <div>
                    <p className="text-sm mb-4">
                      You can contact me on these platforms!
                    </p>
                  </div>
                  <div className="mb-4 text-center flex gap-3 items-center justify-center flex-col sm:flex-row">
                    <a
                      className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 px-6 items-center text-sm font-medium text-center text-white gap-2 w-full sm:w-auto"
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
                      className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 px-6 items-center text-sm font-medium text-center text-white gap-2 w-full sm:w-auto"
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

          {/* Social Media Card */}
          <div className="backdrop-blur-sm bg-gray-800/60 text-white p-4 sm:p-6 rounded-lg shadow-md w-full border-purple-400/10 ring-4 ring-purple-400/20">
            <div className="flex flex-col justify-center items-center gap-4 text-center">
              <span className="bg-purple-400 text-white text-lg font-medium px-2.5 py-0.5 rounded-full">Social Media</span>
              <p className="mb-2 text-sm">Stalk me on the internet with these socials</p>
              <div className="grid grid-cols-2 gap-3 w-full">
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 px-4 items-center justify-center gap-2"
                  href="https://discord.com/users/1220230816081248289"
                  rel="noopener noreferrer"
                >
                  <Image src="/discord.svg" alt="Discord icon" width={16} height={16} />
                  Discord
                </a>
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 px-4 items-center justify-center gap-2"
                  href="https://t.me/furriesgang"
                  rel="noopener noreferrer"
                >
                  <Image src="/telegram.svg" alt="Telegram icon" width={16} height={16} />
                  Telegram
                </a>
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 px-4 items-center justify-center gap-2"
                  href="https://github.com/furriesgang"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="invert"
                    src="/github-mark.svg"
                    alt="Github icon"
                    width={16}
                    height={16}
                  />
                  Github
                </a>
                <a
                  className="no-underline bg-gray-800/60 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors bg-black hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent inline-flex h-10 px-4 items-center justify-center gap-2"
                  href="https://steamcommunity.com/id/unityglol/"
                  rel="noopener noreferrer"
                >
                  <Image src="/steam.svg" alt="Steam icon" width={16} height={16} />
                  Steam
                </a>
              </div>
              <span className="mt-4 bg-yellow-800 text-yellow-400 text-lg font-medium px-2.5 py-0.5 rounded-full mb-4">Github Statistics</span>
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <a href="https://github.com/furriesgang" className="flex flex-col items-center gap-4">
                  <img
                    height="180em"
                    className="w-full max-w-[500px]"
                    src="https://github-readme-stats-eight-theta.vercel.app/api?username=furriesgang&theme=dark&show_icons=true"
                  />
                </a>
                <a className="text-sm text-slate-400">(I only use github on private repository so yeah)</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
