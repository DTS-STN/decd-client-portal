export default function Button({ onClick, children }) {
  return (
    <button
      className="m-4 md:m-6 bg-cpButton-org hover:bg-cpButton-hover text-white py-2 px-4 rounded shadow-sm hover:shadow-none focus:ring-2 transition"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
