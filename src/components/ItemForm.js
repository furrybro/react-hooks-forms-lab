import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [category, setCategory] = useState("Produce");
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmitCategory(event) {
    setCategory(event.target.value)
  }

  function formSubmissionCallback(e) {
    e.preventDefault();
    const formData = { id: Math.round(Math.random() * 2001).toString(), name: name, category: category };
    onItemFormSubmit(formData);
  } 
  
  return (
    <form className="NewItem" onSubmit={formSubmissionCallback}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSubmitCategory} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
