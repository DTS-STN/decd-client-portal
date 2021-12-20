export default function Button({ onClick, lightMode, children }) {
  const dark =
    'flex md:inline m-4 md:ml-6 md:mr-0 bg-cpButton-org hover:bg-cpButton-hover hover:shadow-none text-white py-2 px-4 rounded shadow-sm focus:ring-2 transition'
  const light =
    'flex md:inline m-4 md:ml-6 md:mr-0 bg-transparent hover:bg-gray-200 text-cpButton-org text-center py-2 px-4 rounded shadow-sm focus:ring-2 transition border border-cpButton-org'

  return (
    <button className={lightMode ? light : dark} onClick={onClick}>
      {children}
    </button>
  )
}
