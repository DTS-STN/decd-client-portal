import { AiFillCaretUp } from 'react-icons/ai'

const ScrollToTop = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex items-center justify-center py-2">
      <button
        id="btnScrollToTop"
        type="button"
        className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold my-2 py-2 mx-10 px-4 border border-gray-400 rounded shadow"
        onClick={ScrollToTop}
      >
        <span>Top of page</span>
        <AiFillCaretUp className="inline ml-2 mt-1 float-right" />
      </button>
    </div>
  )
}

export default ScrollToTop
