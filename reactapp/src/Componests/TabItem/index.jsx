import './index.css'

const TabItem = props => {
  const {tabDetails , getTabid , isActive} = props
  const {displayText,tabId} = tabDetails
  const onClickTabid = () => {
    getTabid(tabId)
  }
  const tabidclass = isActive ? "active-tab-btn" : ""
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${tabidclass}`} onClick={onClickTabid}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
