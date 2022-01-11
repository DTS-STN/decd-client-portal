export default function Card(props) {
  return (
    <div className="layout-container mt-4 mb-12">
      <div className="rounded-xl overflow-hidden shadow-lg">
        {props.content}
      </div>
    </div>
  )
}
