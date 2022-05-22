import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const [items, setItems] = useState(props.items);

  function onItemFormSubmit(formData) {
    const dataArray = [...items, formData];
    setItems(dataArray);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsThatMatchCategory = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
    return item.category === selectedCategory;
  });

  function findSearchItem(event) {
    setSearchItem(event.target.value);
  }

  const searchItemsToDisplay = itemsThatMatchCategory.filter((item) => {
    if (searchItem === "") {
      return true;
    }
    if (searchItem.toUpperCase() === item.name.toUpperCase()) {
      return true;
    }
    if (item.name.toUpperCase().includes(searchItem.toUpperCase())) {
      return true;
    }
      return false;
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={findSearchItem} search={searchItem}/>
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
