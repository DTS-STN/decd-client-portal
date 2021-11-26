export default function MoreInfo() {
  return (
    <div className="w-full py-16 bg-gray-lightest">
      <div className="layout-container">
        <h3 className="font-display font-bold text-xl">Did you know?</h3>
        <br />
        <p className="font-body text-sm">
          If you did not receive email alerts when the new important EI
          information is available in your Service Canada Digital Centre
          account, you can go to my preferences and update those settings
          <br />
          <br />
          If you recently applied for a benefit online the approval process may
          take up to five business days
          <br />
          <br />
          If you need help, you can press the “Need Help” button and our virtual
          concierge can assist
        </p>
      </div>
      <hr className="m-12 bg-bright-blue-royal h-tiny" />
      <div className="layout-container">
        <h3 className="font-display font-bold text-xl">
          Recommended benefits for you
        </h3>
        <br />
        <h4 className="font-display font-bold text-base text-dark-light">
          Benefits for Canadians abroad
        </h4>
        <br />
        <p className="font-body text-sm">
          Information on Employment Insurance (EI), pensions, benefits and
          taxes, for those who work or live outside of Canada
          <br />
          <br />
        </p>
        <a className="underline font-display text-sm" href="/dashboard">
          Learn more
        </a>
      </div>
    </div>
  )
}
