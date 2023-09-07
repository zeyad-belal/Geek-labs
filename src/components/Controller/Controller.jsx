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
      <img src="public/left.png" alt="" onClick={()=> handleChange('-')} />
        <div className="content">
          <h1 className="project-name">{projects[currImgIndex].name}</h1>
          <p className="description">{projects[currImgIndex].description} </p>
        </div>
      <img src="public/right.png" alt="" onClick={()=> handleChange('+')} />
    </div>
  );
}
