// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="list-style">
      <div className="app-container">
        <img className="app-icon" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
