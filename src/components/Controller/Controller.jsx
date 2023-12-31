/* eslint-disable react/prop-types */
import "./Controller.css";

export default function Controller({projects,currImgIndex,setCurrImgIndex}) {

  function handleChange(indicator){
    if(indicator == '+'){
      setCurrImgIndex((current)=>{
          return current == Object.keys(projects).length  -1 ? 0 :  current + 1 
      }) 
    }else{
      setCurrImgIndex((current)=>{
        return current == 0 ? Object.keys(projects).length  -1 :  current - 1 
    })
    }
  }


  return (
    <div className="control">
      <img src="/other/left.png" alt="" onClick={()=> handleChange('-')} />
        <div className="content">
          <h1 className="project-name"> <img src="/other/tick.png" alt="" className="tick" />  {projects[currImgIndex].name}</h1>
          <p className="description">{projects[currImgIndex].description} </p>
        </div>
      <img src="/other/right.png" alt="" onClick={()=> handleChange('+')} />
    </div>
  );
}
