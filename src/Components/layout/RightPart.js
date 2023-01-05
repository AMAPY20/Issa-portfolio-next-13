export default function RightPart({ children }) {
  return (
    <div class='rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]'>
      <div class='rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]'>
        {children}
      </div>
    </div>
  )
}
