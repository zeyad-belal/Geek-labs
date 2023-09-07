/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Controller from './components/Controller/Controller'
import Gallery from './components/Gallery/Gallery'
import AddProject from './components/AddProject/AddProject';
import './fonts/Hellix-Bold.ttf';

function App() {

  const [projects , setProjects] =useState([
    {imageSrc : 'public/images/anders-drange-okxqeyvAArU-unsplash.jpg' , name : 'Project name 1' , description : 'ONE lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : 'public/images/bao-menglong-vNKOJ_k-xo-unsplash.jpg' , name : 'Project name 2' , description : 'TWO lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : 'public/images/kouji-tsuru-lQB9glQXglw-unsplash.jpg' , name : 'Project name 3' , description : 'THREE lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : 'public/images/mark-mc-neill-Q1zvqzJaJh0-unsplash.jpg' , name : 'Project name 4' , description : 'FOUR lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : 'public/images/rob-potter-BP_PVA3YdbU-unsplash.jpg' , name : 'Project name 5' , description : 'FIVE lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'},
    {imageSrc : 'public/images/satya-deep-SmeZVazNQbQ-unsplash.jpg' , name : 'Project name 6' , description : 'SIX lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectusquibusdam suscipit deleniti sequi officia as sumenda totam liberodicta, ducimus a hic, possimus enim odio ipsum, reiciendis nemoexpedita labore'}
  ]);


  const [currImgIndex , setCurrImgIndex] = useState(0)
  const [modalIsShown , setModalIsShown] = useState(false)


  function toggleModal(){
    setModalIsShown((prevValue)=> !prevValue)
  }



  return (
    <div className='main'>
      <button className='add-project' onClick={toggleModal}>Add Project</button>
      {modalIsShown && <AddProject toggleModal={toggleModal} setProjects={setProjects}  />}

      <Gallery projects={projects}  currImgIndex={currImgIndex} />
      <Controller projects={projects} currImgIndex={currImgIndex} setCurrImgIndex={setCurrImgIndex} />
    </div>
  )
}

export default App
