import PropTypes from 'prop-types'
import DateModified from '../atoms/DateModified'
import SocialMedia from './SocialMedia'
import ScrollToTop from '../atoms/ScrollToTop'

export default function Footer({ links }) {
  return (
    <footer>
      <div className="layout-container py-12 lg:py-16">
        <DateModified />
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <div className="flex-col">
            <SocialMedia />
            <div
              className="py-5 border-b-2 lg:border-none"
              role="navigation"
              aria-labelledby="footerNav"
            >
              <ul className="flex flex-col lg:flex-row">
                {links.map((value, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        index === 0
                          ? 'my-2 mr-2.5 list-inside list-none text-sm font-poppins lg:my-0'
                          : 'my-2 mr-2.5 list-inside list-none text-sm font-poppins lg:my-0 lg:list-disc'
                      }
                    >
                      <a
                        className="text-xs font-body text-deep-blue-dark hover:text-deep-blue-light"
                        data-cy="social-media-link"
                        href={value.link}
                      >
                        {value.linkText}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <img
            className="my-5 h-6 w-auto lg:my-0 lg:h-7"
            src={'/wmms-blk.svg'}
          />
        </div>
      </div>
      <div className="md:hidden">
        <ScrollToTop />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),
}
