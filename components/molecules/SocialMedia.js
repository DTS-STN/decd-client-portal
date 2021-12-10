import useTranslation from 'next-translate/useTranslation'

export default function SocialMedia() {
  const { t } = useTranslation('dashboard')
  return (
    <div className="py-5 border-b-2 lg:py-0 lg:pb-2 lg:border-none">
      <h3 className="font-poppins font-semibold text-xs text-deep-blue-solid">
        {t('title_follow')}
      </h3>
      <div className="mt-2 flex flex-row items-center">
        <div className="mr-7">
          <a href={''}>
            <svg
              className="h-7 fill-current text-deep-blue-solid"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H16.78c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.365V21H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
            </svg>
          </a>
        </div>
        <div className="mr-7">
          <a href={''}>
            <svg
              className="h-7 fill-current text-deep-blue-solid"
              viewBox="0 0 24 24"
            >
              <path d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 7zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
          </a>
        </div>
        <div className="mr-7">
          <a href={''}>
            <svg
              className="h-7 fill-current text-deep-blue-solid"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H6.477v-7H9v7zM7.694 8.717c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2zM18 17h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302V17h-2.523v-7h2.523v.977c.325-.57.976-.977 2.197-.977S18 10.977 18 13.174V17z" />
            </svg>
          </a>
        </div>
        <div className="mr-7">
          <a href={'https://twitter.com/ESDC_GC'}>
            <svg
              className="h-7 fill-current text-deep-blue-solid"
              viewBox="0 0 29 29"
            >
              <path d="M28 8.559a9.813 9.813 0 0 1-2.828.773 4.94 4.94 0 0 0 2.164-2.723 9.92 9.92 0 0 1-3.125 1.196 4.924 4.924 0 0 0-8.52 3.367c0 .387.043.762.13 1.121A13.957 13.957 0 0 1 5.67 7.148a4.885 4.885 0 0 0-.667 2.477c0 1.707.867 3.215 2.191 4.098a4.895 4.895 0 0 1-2.23-.618v.063a4.922 4.922 0 0 0 3.95 4.828 4.902 4.902 0 0 1-2.224.086 4.932 4.932 0 0 0 4.598 3.422A9.875 9.875 0 0 1 4 23.539a13.924 13.924 0 0 0 7.547 2.215c9.058 0 14.012-7.504 14.012-14.012 0-.21-.008-.426-.016-.637A10.085 10.085 0 0 0 28 8.56Z" />
            </svg>
          </a>
        </div>
        <div className="mr-7">
          <a href={''}>
            <svg
              className="h-7 fill-current text-deep-blue-solid"
              viewBox="0 0 24 24"
            >
              <path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.504 2.504 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
