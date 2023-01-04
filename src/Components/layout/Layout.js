import Navbar from "../Navbar"

export default function Layout ({children}) {
  
  return (
    
    <div class="tokyo_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="">
      <Navbar/>
      {children}
    </div>   

  )
}
