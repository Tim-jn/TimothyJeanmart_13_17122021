import './FeatureItem.css'

export default function FeatureItem(props) {
  return (
    <div class="feature-item">
      <img src={props.iconUrl} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}
