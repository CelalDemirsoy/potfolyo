import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SkillRating from "./components/SkillRating";
import { LOCALES } from "./locales";

export default function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const t = LOCALES[lang];

  // Yardımcı fonksiyon: Skills listesini ikiye böler
  const splitSkills = (list) => {
    const mid = Math.ceil(list.length / 2);
    return [list.slice(0, mid), list.slice(mid)];
  };

  const [hardSkillsCol1, hardSkillsCol2] = splitSkills(t.hardSkillsList);
  const [softSkillsCol1, softSkillsCol2] = splitSkills(t.softSkillsList);

  return (
    <div className="app-shell">
      {/* code background */}
      <pre className="code-bg.txt" aria-hidden="true">{`// Background code
`}</pre>

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-gray-900 text-white backdrop-blur border-b border-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 gap-4">
          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a href="#about" className="px-2 py-1 rounded hover:bg-gray-700">{t.nav.about}</a>
            <a href="#skills" className="px-2 py-1 rounded hover:bg-gray-700">{t.nav.skills}</a>
            <a href="#projects" className="px-2 py-1 rounded hover:bg-gray-700">{t.nav.projects}</a>
            <a href="#experience" className="px-2 py-1 rounded hover:bg-gray-700">{t.nav.experience}</a>
            <a href="#contact" className="px-2 py-1 rounded hover:bg-gray-700">{t.nav.contact}</a>
          </div>

          {/* Language & Theme toggles */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center gap-1 bg-black p-1 rounded-full border border-gray-600">
              <button
                onClick={() => setLang("tr")}
                className={`px-3 py-1 rounded-full ${lang === "tr" ? "bg-purple-600 text-white" : "text-white"}`}
              >
                TR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full ${lang === "en" ? "bg-purple-600 text-white" : "text-white"}`}
              >
                EN
              </button>
            </div>
            
            {/* Tema Butonları yoruma alınmış */}
            {/* <button onClick={() => setDark(false)} className={`p-2 rounded-full hover:bg-purple-600 transition ${!dark ? "bg-purple-600 text-white" : "text-white"}`}> <FaSun className="w-4 h-4" /> </button>
            <button onClick={() => setDark(true)} className={`p-2 rounded-full hover:bg-purple-600 transition ${dark ? "bg-purple-600 text-white" : "text-white"}`}> <FaMoon className="w-4 h-4" /> </button> */}
            
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-white">
        {/* ABOUT */}
        <section id="about" className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-900 rounded-xl p-6 shadow">
            <img src="Profil_3.jpeg" alt="profile" className="w-60 h-60 object-cover ring-4 ring-white"/>
            <div>
              <h1 className="text-3xl font-bold">Celal Demirsoy</h1>
              {/* max-w-xl kaldırıldı, max-w-full yapıldı */}
              <p className="mt-4 max-w-full">{t.aboutText}</p> 
              <div className="mt-4 flex gap-3 text-xl">
                <a href="mailto:celal.dmrsy@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"><FaEnvelope/></a>
                <a href="https://github.com/CelalDemirsoy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/celal-demirsoy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"><FaLinkedin/></a>
              </div>
            </div>
          </div>
        </section>


        {/* SKILLS - Teknik Yetenekler (HARD SKILLS) */}
        <section id="skills" className="mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">{t.skillsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Hard Skills Kolon 1 */}
              <div>
                <div className="mt-4 space-y-4">
                  {hardSkillsCol1.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{skill.title}</div>
                        {/* Details alanı varsa göster */}
                        {skill.details && <div className="text-sm text-gray-300">{skill.details}</div>}
                      </div>
                      <SkillRating level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Hard Skills Kolon 2 */}
              <div>
                <div className="mt-4 space-y-4">
                  {hardSkillsCol2.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{skill.title}</div>
                        {skill.details && <div className="text-sm text-gray-300">{skill.details}</div>}
                      </div>
                      <SkillRating level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS - Kişisel Yetenekler (SOFT SKILLS) */}
        <section id="soft-skills" className="mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">{t.skillsTitle2}</h2>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Soft Skills Kolon 1 */}
              <div>
                <div className="mt-4 space-y-4">
                  {softSkillsCol1.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{skill.title}</div>
                      </div>
                      <SkillRating level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills Kolon 2 */}
              <div>
                <div className="mt-4 space-y-4">
                  {softSkillsCol2.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{skill.title}</div>
                      </div>
                      <SkillRating level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">{t.projectsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="p-4 bg-gray-800 rounded-xl shadow">
                <h4 className="font-semibold">{t.projects.ecommerce.title}</h4>
                <p className="text-sm mt-2">{t.projects.ecommerce.desc}</p>
                <div className="mt-3"><a href="https://www.glories.online" target="_blank" rel="noopener noreferrer" className="text-sm underline">{t.projects.ecommerce.visit}</a></div>
              </article>
              <article className="p-4 bg-gray-800 rounded-xl shadow">
                <h4 className="font-semibold">{t.projects.movie.title}</h4>
                <p className="text-sm mt-2">{t.projects.movie.desc}</p>
                <div className="mt-3"><a href="https://github.com/CelalDemirsoy/Movie-App" target="_blank" rel="noopener noreferrer" className="text-sm underline">{t.projects.movie.visit}</a></div>
              </article>
              <article className="p-4 bg-gray-800 rounded-xl shadow">
                <h4 className="font-semibold">{t.projects.aiWardrobe.title}</h4>
                <p className="text-sm mt-2">{t.projects.aiWardrobe.desc}</p>
                <div className="mt-3"><a href="tübitak.html" target="_blank" rel="noopener noreferrer" className="text-sm underline">{t.projects.aiWardrobe.visit}</a></div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">{t.experienceTitle}</h2>
            <strong>{t.experience}</strong>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">{t.certificatesTitle}</h2>
            <ul className="list-disc pl-5">
              {/* Lokalizasyondaki dizi üzerinden haritalama yapıldı */}
              {t.certificatesList.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">{t.contactTitle}</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="font-medium mt-4">{t.email}</p>
                <p className="mt-1">celal.dmrsy@gmail.com</p>
              </div>

              <div className="w-48 flex flex-col gap-3">
                <a href="mailto:celal.dmrsy@gmail.com" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"><FaEnvelope/> <span>Email</span></a>
                <a href="https://github.com/CelalDemirsoy" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"><FaGithub/> <span>GitHub</span></a>
                <a href="https://www.linkedin.com/in/celal-demirsoy/" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"><FaLinkedin/> <span>LinkedIn</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Celal Demirsoy {t.footerText}
        </footer>
      </main>
    </div>
  );
}