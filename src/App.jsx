/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Controller from './components/Controller/Controller'
import Gallery from './components/Gallery/Gallery'
import AddProject from './components/AddProject/AddProject';
import './fonts/Hellix-Bold.ttf';

function App() {

  const [projects , setProjects] =useState([
    {imageSrc : '/images/n.jpg' , name : 'Project name 1' , description : 'ONE lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : '/images/n2.jpg' , name : 'Project name 2' , description : 'TWO lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : '/images/n3.jpg' , name : 'Project name 3' , description : 'THREE lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : '/images/n4.jpg' , name : 'Project name 4' , description : 'FOUR lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : '/images/n5.jpg' , name : 'Project name 5' , description : 'FIVE lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
  ]);


  const [currImgIndex , setCurrImgIndex] = useState(0)
  const [modalIsShown , setModalIsShown] = useState(false)


  function toggleModal(){
    setModalIsShown((prevValue)=> !prevValue)
  }



  return (
    <div className='main'>
      {modalIsShown && <div className='overlay' onClick={()=>setModalIsShown(false)}></div>}
      <button className='add-project' onClick={toggleModal}>Add Project</button>
      {modalIsShown && <AddProject toggleModal={toggleModal} setProjects={setProjects}  />}

      <Gallery projects={projects}  currImgIndex={currImgIndex} />
      <Controller projects={projects} currImgIndex={currImgIndex} setCurrImgIndex={setCurrImgIndex} />
    </div>
  )
}

export default App
