"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "work", label: "工作经历" },
  { id: "internships", label: "实习经历" },
  { id: "activities", label: "社会活动" },
  { id: "projects", label: "项目经历" },
  { id: "research", label: "科研成果" },
]

export function SectionNavigation({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const englishLabels: Record<string, string> = { work: "Work", internships: "Internships", activities: "Leadership", projects: "Projects", research: "Research" }
  const isEnglish = locale === "en"
  const [activeSection, setActiveSection] = useState("work")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0)
      const current = sections.filter(({ id }) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.3
      }).at(-1)
      setActiveSection(current?.id ?? "work")
    }
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
    }
  }, [])

  return (
    <nav
      aria-label={isEnglish ? "Resume sections" : "简历章节导航"}
      className="sticky top-0 z-50 border-b border-white/80 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-xl xl:fixed xl:right-3 xl:top-1/2 xl:w-28 xl:-translate-y-1/2 xl:rounded-3xl xl:border xl:bg-white/80 xl:px-2 xl:py-4 xl:shadow-[0_8px_32px_rgba(30,64,175,0.10)]"
    >
      <div className="mb-3 hidden items-center justify-between px-1 text-[10px] xl:flex">
        <span className="font-medium text-[9px] tracking-wide text-slate-500">{isEnglish ? "CONTENTS" : "阅读导航"}</span>
        <span className="whitespace-nowrap font-mono text-blue-500">{String(sections.findIndex(({ id }) => id === activeSection) + 1).padStart(2, "0")} / 05</span>
      </div>
      <div className="relative">
        <div aria-hidden="true" className="absolute bottom-5 left-[15px] top-5 hidden w-px bg-blue-100 xl:block">
          <div className="w-full bg-gradient-to-b from-blue-400 to-indigo-500 transition-[height] duration-150" style={{ height: `${progress * 100}%` }} />
        </div>
        <ol className="relative flex justify-between gap-1 xl:flex-col xl:gap-2">
          {sections.map(({ id, label }, index) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById(id)?.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
                    block: "start",
                  })
                }}
                className={`flex items-center gap-1.5 rounded-xl px-1.5 py-2.5 text-[11px] sm:text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 xl:px-1.5 ${activeSection === id ? "bg-gradient-to-r from-blue-100 to-indigo-50 font-bold text-blue-700 shadow-sm ring-1 ring-blue-200/60" : "text-slate-500 hover:bg-white hover:text-blue-700"}`}
              >
                <span aria-hidden="true" className={`relative hidden h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[9px] xl:flex ${activeSection === id ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-sm shadow-blue-300" : "border border-blue-100 bg-white text-slate-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {isEnglish ? englishLabels[id] : label}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-[width] duration-150 xl:hidden" style={{ width: `${progress * 100}%` }} />
    </nav>
  )
}
