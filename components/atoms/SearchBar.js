import useTranslation from 'next-translate/useTranslation'

export default function SearchBar() {
  const { t } = useTranslation('dashboard')
  return (
    <form className="flex mt-5 md:mt-0 md:mr-4">
      <input
        placeholder={t('search_place_holder')}
        type="text"
        className="font-body text-sm text-left w-56 py-1 px-1 border-solid border-2 border-r-0 rounded-tl rounded-bl focus:ring-0"
      />
      <button
        type="submit"
        className="inline-block px-2 text-white rounded-tr rounded-br bg-deep-blue-solid"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  )
}
