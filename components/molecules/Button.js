export default function Button({ onClick, children }) {
  return (
    <button
      className="bg-cpButton-org hover:bg-cpButton-hover text-white font-bold py-2 px-4 rounded shadow-sm hover:shadow-none focus:ring-2 transition"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
