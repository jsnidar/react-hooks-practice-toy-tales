import React, {useState} from "react";

function ToyForm({onFormSubmit}) {
  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newToy = {
      name: toyName,
      image: toyImage,
      likes: 0
    }

    onFormSubmit(newToy)
    setToyName('')
    setToyImage('')
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={toyName}
          onChange={(event) => setToyName(event.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={toyImage}
          onChange={(event) => setToyImage(event.target.value)}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
