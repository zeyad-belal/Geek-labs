/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import './Gallery.css';

export default function Gallery({currImgIndex, projects }) {



  return (
    <div className='gallery'>
      <div className="images-container">
        <a className="see-all">SEE ALL</a>

        {projects.map((project,index) => {
          let isActive = false;
          {projects[currImgIndex].imageSrc ==  project.imageSrc ? isActive = true : isActive = false }

          return (
            <div 
              key={index} 
              className={`image-placeholder ${isActive ? 'active' : ''}`} >
                
              <div
                className={`image-div `} 
                style={{ backgroundImage: `url(${project.imageSrc})`}}
                ></div>

              </div>
          );
        })}
      </div>
      <div className='dots'>
        {projects.map((project,index)=>{
            let isActive = false;
            {projects[currImgIndex].imageSrc ==  project.imageSrc ? isActive = true : isActive = false }
          return (
            <span key={index} className={`dot  ${isActive ? 'active' : ''}`} ></span>
          )
      })}</div>
    </div>
  );
}

