import PropTypes from 'prop-types'
import DateModified from '../atoms/DateModified'
import SocialMedia from './SocialMedia'

export default function Footer(props) {
  return (
    <footer>
      <div className="layout-container mb-16">
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
                {props.links.map((value, index) => {
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
            className="my-5 h-6 w-auto lg:my-0"
            src={'/wmms-blk.svg'}
            alt={props.footerLogoAltText}
          />
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  /**
   * array of objects containing the link text and link
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),

  /**
   * alt text for footer canada-ca logo
   */
  footerLogoAltText: PropTypes.string.isRequired,
}
