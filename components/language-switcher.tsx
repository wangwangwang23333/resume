import Link from "next/link"
import { Languages } from "lucide-react"

export function LanguageSwitcher({ locale }: { locale: "zh" | "en" }) {
  return (
    <nav aria-label="简历语言 / Resume language" className="mb-6 flex justify-end print:hidden">
      <div className="inline-flex items-center gap-1 rounded-full border border-white/90 bg-white/80 p-1.5 shadow-sm backdrop-blur-xl">
        <Languages aria-hidden="true" className="mx-2 h-4 w-4 text-slate-500" />
        {([
          { language: "zh", label: "中文", href: "/", lang: "zh-CN" },
          { language: "en", label: "English", href: "/en/", lang: "en" },
        ] as const).map(({ language, label, href, lang }) => (
          <Link
            key={language}
            href={href}
            hrefLang={lang}
            lang={lang}
            aria-current={locale === language ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${locale === language ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm" : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
