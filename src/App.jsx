import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SkillRating from "./components/SkillRating";
import { LOCALES } from "./locales";

export default function App(){
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const t = LOCALES[lang];

  return (
    <div className="app-shell">
      {/* code background */}
      <pre className="code-bg.txt" aria-hidden="true">{`// Background code
`}</pre>

      <header className="fixed left-0 right-0 top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 gap-4">
          <div className="flex items-center gap-6">
            <a href="#about" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t.nav.about}</a>
            <a href="#skills" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t.nav.skills}</a>
            <a href="#projects" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t.nav.projects}</a>
            <a href="#experience" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t.nav.experience}</a>
            <a href="#contact" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-3">
            {/* language toggle */}
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <button onClick={() => setLang("tr")} className={`px-3 py-1 rounded-full ${lang==="tr" ? "bg-accent text-white" : ""}`}>TR</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1 rounded-full ${lang==="en" ? "bg-accent text-white" : ""}`}>EN</button>
            </div>

            {/* dark toggle */}
            <button onClick={() => setDark(d => !d)} className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 p-1">
              <span className={`h-6 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center transform ${dark ? "translate-x-8" : "translate-x-0"} transition`}>{dark ? <FaMoon/> : <FaSun/>}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <section id="about" className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/80 dark:bg-gray-800/60 rounded-xl p-6 shadow">
            <img src="Profil_3.jpeg" alt="profile" className="w-36 h-36  object-cover ring-4 ring-white dark:ring-gray-900"/>
            <div>
              <h1 className="text-3xl font-bold">Celal Demirsoy</h1>
              <p className="mt-3 max-w-xl">{t.aboutText}</p>
              <div className="mt-4 flex gap-3 text-xl">
               
               


                <a href="mailto:celal.dmrsy@gmailcom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaEnvelope/> <span></span></a>
                 <a href="https://github.com/CelalDemirsoy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaGithub/> <span></span></a>
                <a href="https://www.linkedin.com/in/celal-demirsoy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaLinkedin/> <span></span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.skillsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/60 p-6 rounded-xl shadow">
              <h3 className="font-semibold">Frontend</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">JavaScript</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">ES6+, DOM, Fetch</div>
                  </div>
                  <SkillRating level={5} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">React</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Hooks, Context, Router</div>
                  </div>
                  <SkillRating level={4} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">TailwindCSS</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Utility-first styling</div>
                  </div>
                  <SkillRating level={4} />
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/60 p-6 rounded-xl shadow">
              <h3 className="font-semibold">Other</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Node.js</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">APIs & tooling</div>
                  </div>
                  <SkillRating level={3} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">TypeScript</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Types & tooling</div>
                  </div>
                  <SkillRating level={3} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.projectsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-4 bg-white/80 dark:bg-gray-800/60 rounded-xl shadow">
              <h4 className="font-semibold">Project One</h4>
              <p className="text-sm mt-2">React app with nice UI.</p>
              <div className="mt-3"><a href="#" className="text-sm underline">Repository</a></div>
            </article>
            <article className="p-4 bg-white/80 dark:bg-gray-800/60 rounded-xl shadow">
              <h4 className="font-semibold">Project Two</h4>
              <p className="text-sm mt-2">API + frontend.</p>
            </article>
            <article className="p-4 bg-white/80 dark:bg-gray-800/60 rounded-xl shadow">
              <h4 className="font-semibold">Project Three</h4>
              <p className="text-sm mt-2">Full-stack project.</p>
            </article>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.experienceTitle}</h2>
          <div className="bg-white/80 dark:bg-gray-800/60 p-4 rounded-xl shadow">
            <strong>Intern — Company</strong>
            <div className="text-sm text-gray-500 dark:text-gray-400">Jun 2024 - Present</div>
            <p className="mt-2">Worked on UI components, performance and accessibility.</p>
          </div>
        </section>

        <section id="certificates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.certificatesTitle}</h2>
          <ul className="list-disc pl-5">
            <li>Frontend Developer - Example</li>
            <li>React Specialist - Example</li>
          </ul>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.contactTitle}</h2>
          <div className="bg-white/80 dark:bg-gray-800/60 p-6 rounded-xl shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="font-medium">{t.phone}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">+90 506 024 22 72 </p>

                <p className="font-medium mt-4">{t.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">celal.dmrsy@gmailcom</p>
              </div>

              <div className="w-48 flex flex-col gap-3">
                <a href="tel:+905060242272" target="_blank" rel="noopener noreferrer"  className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaPhone/> <span>Call</span></a>
                <a href="mailto:celal.dmrsy@gmailcom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaEnvelope/> <span>Email</span></a>
                <a href="https://github.com/CelalDemirsoy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaGithub/> <span>GitHub</span></a>
                <a href="https://www.linkedin.com/in/celal-demirsoy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaLinkedin/> <span>LinkedIn</span></a>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          © {new Date().getFullYear()} Celal Demirsoy {t.footerText}
        </footer>
      </main>
    </div>
  )
}
