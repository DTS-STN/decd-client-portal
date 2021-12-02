export default function Card(props) {
  return (
    <div className="layout-container my-4">
      <div className="rounded-xl overflow-hidden shadow-lg">
        {props.content}
      </div>
    </div>
  )
}
