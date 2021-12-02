import Image from 'next/image'

export default function SectionHeading(props) {
  return (
    <div className="layout-container">
      <div className="flex items-center m-2">
        <img src={props.icon}></img>
        <h2 className="font-bold font-display text-lg ml-2">{props.title}</h2>
      </div>
      <hr className="bg-bright-blue-royal h-tiny" />
    </div>
  )
}
