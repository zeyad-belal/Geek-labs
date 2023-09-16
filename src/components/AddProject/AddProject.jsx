/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddProject.css"

export default function AddProject({toggleModal,setProjects}) {

  const [formData, setFormData] = useState({ name: "", description: "", image: null });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // if its an image
    if (type === "file") {
      const imageURL = URL.createObjectURL(e.target.files[0])
      setFormData({ ...formData, image: imageURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prevProjects)=> [...prevProjects , {name :formData.name , description :formData.description, imageSrc :formData.image}])
    toggleModal()
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="project name"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="project description"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          onChange={handleInputChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
