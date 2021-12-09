import useTranslation from 'next-translate/useTranslation'

export default function MoreInfo() {
  const { t } = useTranslation('common')
  return (
    <div className="w-full py-16 bg-gray-lightest">
      <div className="layout-container">
        <h3 className="font-display font-bold text-xl">
          {t('title_didyouknow')}
        </h3>
        <br />
        <p className="font-body text-sm">
          {t('text_info_one')}
          <br />
          <br />
          {t('text_info_two')}
          <br />
          <br />
          {t('text_info_three')}
        </p>
      </div>
      <hr className="m-12 bg-bright-blue-royal h-tiny" />
      <div className="layout-container">
        <h3 className="font-display font-bold text-xl">
          {t('title_recommended_benefits')}
        </h3>
        <br />
        <h4 className="font-display font-bold text-base text-dark-light">
          {t('title_benefits_abroad')}
        </h4>
        <br />
        <p className="font-body text-sm">
          {t('text_info_four')}
          <br />
          <br />
        </p>
        <a className="underline font-display text-sm" href="">
          {t('link_learn_more')}
        </a>
      </div>
    </div>
  )
}
