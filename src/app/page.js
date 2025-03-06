'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  return (
    <div className="animate-gradient font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
        <div className="flex flex-col gap-6 row-start-2 items-center w-full">
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-4xl">
            {/* Profile Card */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } backdrop-blur-sm flex flex-col items-center justify-center text-center bg-gray-700/50 text-white p-4 sm:p-6 rounded-lg shadow-md w-full border border-purple-400/10 ring-4 ring-purple-400/20`}>
              <div className={`flex flex-col items-center space-y-4 justify-center w-full transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="p-2 rounded text-center items-center w-full">
                  <div className="mb-4 flex flex-col sm:flex-row items-center justify-center">
                    <Image
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-lg border border-solid border-black/[.08] dark:border-white/[.145] mb-3 sm:mb-0 sm:mr-4"
                      src="https://cdn.discordapp.com/avatars/1341940052791529516/25c59139f64df5c3416a3188be684492?size=1024"
                      alt="discord pfp"
                      width={128}
                      height={128}
                      priority={true}
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="flex flex-col items-center sm:items-start">
                      <p className="text-lg font-medium mb-1">lovelytransgirl</p>
                      <span className="bg-purple-400 text-white text-xs font-medium px-2.5 py-0.5 rounded-lg">
                        she/they 🏳️‍⚧️
                      </span>
                    </div>
                  </div>

                  <div className="text-center items-center">
                    <div className="text-left items-start">
                      <span className="bg-indigo-400 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-lg">
                        About Me:
                      </span>
                      <p className="mb-3"></p>
                    </div>
                    <div className="text-left">
                      <p className="text-sm">
                        A 15 years old student from Thailand
                      </p>
                      <p className="text-sm">
                        Self-taught programmer and designer.
                      </p>
                      <p className="text-sm">
                        Primarily code in javascript and python
                      </p>
                      <p className="text-sm">
                        Has a weird hobby of being a catgirl
                      </p>
                      <p className="mb-4"></p>
                      <div className="text-left items-start">
                        <span className="bg-green-400 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-lg">
                          Projects and Contribution
                        </span>
                        <p className="mb-3"></p>
                      </div>
                      <p className="text-sm">
                        I have contribute to organizations such as
                      </p>
                      <p className="text-sm">
                        <a className="text-blue-400" href="https://github.com/notmycode-labs">notmycode-labs</a> and <a className="text-blue-400" href="https://github.com/osu-somtum">osu!somtum</a>
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
                        className="no-underline bg-gray-800/50 rounded-lg border border-purple-400/10 ring-4 ring-purple-400/20 transition-all duration-300 hover:bg-[#1a1a1a]/50 hover:scale-105 active:scale-95 inline-flex h-10 px-6 items-center text-sm font-medium text-center text-white gap-2 w-full sm:w-auto"
                        href="mailto:ru4me@notmycode.dev"
                        rel="noopener noreferrer"
                        aria-label="Send an email to ru4me@notmycode.dev"
                      >
                        <Image
                          src="/assets/gmail.svg"
                          alt="Gmail icon"
                          width={16}
                          height={16}
                        />
                        Email
                      </a>
                      <a
                        className="no-underline bg-gray-800/50 rounded-lg border border-purple-400/10 ring-4 ring-purple-400/20 transition-all duration-300 hover:bg-[#1a1a1a]/50 hover:scale-105 active:scale-95 inline-flex h-10 px-6 items-center text-sm font-medium text-center text-white gap-2 w-full sm:w-auto"
                        href="https://discord.com/users/1341940052791529516"
                        rel="noopener noreferrer"
                        aria-label="Connect with lovelytransgirl on Discord"
                      >
                        <Image
                          src="/assets/discord.svg"
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
            <div className={`transform transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } backdrop-blur-sm bg-gray-700/50 text-white p-4 sm:p-6 rounded-lg shadow-md w-full border border-purple-400/10 ring-4 ring-purple-400/20`}>
              <div className="flex flex-col justify-center items-center gap-4 text-center">
                <span className={`bg-purple-400 text-white text-lg font-medium px-2.5 py-0.5 rounded-lg transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>Social Media</span>
                <p className={`mb-2 text-sm transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>Stalk me on the internet with these socials</p>
                <div className={`grid grid-cols-2 gap-3 w-full transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                  <a
                    className="no-underline bg-gray-800/50 rounded-lg border border-purple-400/10 ring-4 ring-purple-400/20 transition-all duration-300 bg-gray-900/50 hover:bg-[#1a1a1a]/50 hover:scale-105 active:scale-95 inline-flex h-10 px-4 items-center justify-center gap-2"
                    href="https://discord.com/users/1341940052791529516"
                    rel="noopener noreferrer"
                  >
                    <Image src="/assets/discord.svg" alt="Discord icon" width={16} height={16} />
                    Discord
                  </a>
                  <a
                    className="no-underline bg-gray-800/50 rounded-lg border border-purple-400/10 ring-4 ring-purple-400/20 transition-all duration-300 bg-gray-900/50 hover:bg-[#1a1a1a]/50 hover:scale-105 active:scale-95 inline-flex h-10 px-4 items-center justify-center gap-2"
                    href="https://t.me/mrrpmeowcolon"
                    rel="noopener noreferrer"
                  >
                    <Image src="/assets/telegram.svg" alt="Telegram icon" width={16} height={16} />
                    Telegram
                  </a>
                  <a
                    className="no-underline bg-gray-800/50 rounded-lg border border-purple-400/10 ring-4 ring-purple-400/20 transition-all duration-300 bg-gray-900/50 hover:bg-[#1a1a1a]/50 hover:scale-105 active:scale-95 inline-flex h-10 px-4 items-center justify-center gap-2"
                    href="https://github.com/lovelytransgirl"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="invert"
                      src="/assets/github-mark.svg"
                      alt="Github icon"
                      width={16}
                      height={16}
                    />
                    Github
                  </a>
                  <a
                    className="no-underline bg-gray-800/50 rounded-lg border border-purple-400/10 ring-4 ring-purple-400/20 transition-all duration-300 bg-gray-900/50 hover:bg-[#1a1a1a]/50 hover:scale-105 active:scale-95 inline-flex h-10 px-4 items-center justify-center gap-2"
                    href="https://steamcommunity.com/id/mrrpmeowcolon/"
                    rel="noopener noreferrer"
                  >
                    <Image src="/assets/steam.svg" alt="Steam icon" width={16} height={16} />
                    Steam
                  </a>
                </div>
                <span className="mt-4 bg-yellow-800 text-yellow-400 text-lg font-medium px-2.5 py-0.5 rounded-lg mb-4">Github Statistics</span>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                  <a 
                    href="https://github.com/lovelytransgirl/" 
                    className="flex flex-col items-center gap-4"
                    aria-label="Visit lovelytransgirl's GitHub profile to see more statistics"
                  >
                    <img 
                      height="180em" 
                      className="w-full max-w-[500px]" 
                      src="https://github-readme-stats-eight-theta.vercel.app/api?username=lovelytransgirl&theme=synthwave" 
                      alt="GitHub statistics"
                    />
                  </a>
                  <a className="text-sm text-slate-400">(I only use github on private repository so yeah)</a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } backdrop-blur-sm bg-gray-700/50 text-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20`}>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <span className="bg-blue-800 text-blue-400 text-lg font-medium px-2.5 py-0.5 rounded-lg">
                Skills & Technologies
              </span>

              {/* Languages Section */}
              <div className="w-full">
                <span className="text-purple-400 text-sm font-medium">Programming Languages</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/javascript.svg" alt="JavaScript" width={24} height={24} />
                      <span>JavaScript</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/java.svg" alt="Java" width={24} height={24} />
                      <span>Java</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/python.svg" alt="Python" width={24} height={24} />
                      <span>Python</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/rust.svg" alt="Rust" width={24} height={24} />
                      <span>Rust</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '2%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/go.svg" alt="Go Lang" width={24} height={24} />
                      <span>Go Lang</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/haxe.svg" alt="Haxe" width={24} height={24} />
                      <span>Haxe</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '13%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/gnubash.svg" alt="GNU Bash" width={24} height={24} className="invert" />
                      <span>GNU Bash</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/docker.svg" alt="Docker" width={24} height={24} className="invert" />
                      <span>Docker</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks Section */}
              <div className="w-full">
                <span className="text-green-400 text-sm font-medium">Frameworks & Libraries</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/react.svg" alt="React" width={24} height={24} />
                      <span>React</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/nextjs.svg" alt="Next.js" width={24} height={24} className="invert" />
                      <span>Next.js</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/tailwind.svg" alt="Tailwind" width={24} height={24} />
                      <span>Tailwind</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/nodejs.svg" alt="Node.js" width={24} height={24} />
                      <span>Node.js</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/nextcord.svg" alt="Nextcord" width={24} height={24} />
                      <span>Nextcord</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools Section */}
              <div className="w-full">
                <span className="text-yellow-400 text-sm font-medium">Tools & Platforms</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/git.svg" alt="Git" width={24} height={24} />
                    <span>Git</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/vscode.svg" alt="VS Code" width={24} height={24} />
                    <span>VS Code</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/github-mark.svg" alt="GitHub" width={24} height={24} className="invert" />
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/vercel.svg" alt="Vercel" width={24} height={24} />
                    <span>Vercel</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/tailscale.svg" alt="Tailscale" width={24} height={24} className="invert" />
                    <span>Tailscale</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/archlinux.svg" alt="Arch Linux" width={24} height={24} className="invert" />
                    <span>Arch Linux</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/ubuntu.svg" alt="Ubuntu" width={24} height={24} className="invert" />
                    <span>Ubuntu</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg">
                    <Image src="/assets/kde.svg" alt="kde" width={24} height={24} className="invert" />
                    <span>KDE Plasma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </main>
    </div>
  );
}
