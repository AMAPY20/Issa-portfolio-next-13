import Navbar from "../Navbar"
import Link from "next/link"
export default function Layout({ children }) {
  return (
    <div
      class='tokyo_tm_all_wrap'
      data-magic-cursor='show'
      data-enter='fadeInLeft'
      data-exit=''>
      {children}
    </div>
  )
}
