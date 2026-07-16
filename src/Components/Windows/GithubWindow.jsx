import React from 'react'
import MacWindows from './MacWindows'
import githubData from "../../assets/github.json"

const GitData =({data={id:1,image:"",title:"",description:"",tags:"",repoLink:"",demoLink:""}})=>{
    return <div className="Card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag=><p className='tag'>{tag}</p>)
            }
        </div>

        <div className="url">
              <a href={data.repoLink}>Reposetory</a>
              <a href={data.demoLink}>Demo link</a>
        </div>
    </div>
}

const GithubWindow = () => {
  return (
   <MacWindows>
    <div className="cards">
        {githubData.map(project =>{
            return <GitData data={project}/>
        })}
    </div>

   </MacWindows>
  )
}

export default GithubWindow