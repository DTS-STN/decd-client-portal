import Link from 'next/link'
import Dropdown from '../atoms/Dropdown'

export default function Nav() {
  return (
    <div className="bg-deep-blue-solid text-white py-2.5">
      <div className="layout-container flex justify-between items-center">
        <h1 className="font-display text-white text-xl">Service Canada</h1>
        <div className="flex items-center font-body text-sm">
          <Dropdown text="Services" />
          <Dropdown text="Life Journey" />
          <Dropdown text="Contact Us" />
        </div>
        <Link key="" href="/">
          <a className="font-body text-sm">Logout</a>
        </Link>
      </div>
    </div>
  )
}
