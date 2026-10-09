import type { Metadata } from "next"
import Resume from "../../resume"

export const metadata: Metadata = {
  title: "Mingjie Wang | Resume",
  description: "Mingjie Wang’s experience, education, projects, research, and leadership activities.",
}

export default function EnglishResumePage() {
  return <Resume locale="en" />
}
