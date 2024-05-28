import "./index.css" 



const Historyitem = (props) => {
    const {browseritems,historydelete}=props

    const { timeAccessed, logoUrl, title,domainUrl,id}= browseritems ?? {}

  const  deletehistory = () => {
        historydelete(id)
    }

    return(


    <li className="browser-list">

<div className="historylist">
<p>{timeAccessed}</p>
    
    <img src={logoUrl}/> 
    <p>{title}</p>
    <p>{domainUrl}</p>
</div>
<div>
    <button onClick={deletehistory}>
    <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" className="delete-icon"/>
    </button>
 
</div>
      
    
    
    
    
     
       </li>
   

    )
}


export default Historyitem