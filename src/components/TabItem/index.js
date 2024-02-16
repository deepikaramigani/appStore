// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, isActiveTab, changeActiveTab} = props
  const {tabId, displayText} = eachTab

  const onChange = () => {
    changeActiveTab(tabId)
  }

  const activeTabStyle = isActiveTab ? 'forActive' : ''
  return (
    <li className="tab-style">
      <button
        type="button"
        onClick={onChange}
        className={`display-text ${activeTabStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
