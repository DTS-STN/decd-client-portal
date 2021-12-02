import PropTypes from 'prop-types'
import SectionHeading from '../atoms/SectionHeading'
import Card from '../atoms/Card'
import Button from '../atoms/Button'

export default function MessageCenter(props) {
  return (
    <div>
      <SectionHeading icon="/mail.svg" title="Message Center" />
      <Card
        content={
          <div>
            <h3 className="font-display font-bold text-lg m-4 sm:ml-6">
              Recent Messages
            </h3>
            <ul>
              {props.messages.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={index % 2 == 0 ? 'bg-gray-light' : ''}
                  >
                    <div className="flex justify-between items-center py-4 px-4 sm:px-6">
                      <div className="flex-col">
                        <div className="flex">
                          <h4 className="font-display font-bold text-sm sm:text-base">
                            {value.messageSubject}
                          </h4>
                          {index == 0 && (
                            <p className="bg-gray-notif text-xxs text-white px-2 h-3 rounded ml-2">
                              New
                            </p>
                          )}
                        </div>
                        <p className="font-body text-xs">{value.date}</p>
                      </div>
                      {value.attachment && (
                        <svg
                          className="h-4 w-4 stroke-2 sm:h-5 sm:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                        >
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                        </svg>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
            <Button>View More</Button>
          </div>
        }
      />
    </div>
  )
}

MessageCenter.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      messageSubject: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      attachment: PropTypes.bool.isRequired,
    })
  ),
}
