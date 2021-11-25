import Link from 'next/link'
import Dropdown from '../atoms/Dropdown'

export default function Nav() {
  return (
    <div className="bg-deep-blue-solid text-white py-2.5">
      <div className="layout-container flex justify-between items-center">
        <h1 className="font-display text-white text-xl">Service Canada</h1>
        <div className="hidden font-body text-sm md:flex md:items-center">
          <Dropdown text="Services" />
          <Dropdown text="Life Journey" />
          <Dropdown text="Contact Us" />
        </div>
        <Link key="" href="/">
          <a className="hidden font-body text-sm md:block">Logout</a>
        </Link>
        <div className="md:hidden">
          <Dropdown text="Menu" />
        </div>
      </div>
    </div>
  )
}
