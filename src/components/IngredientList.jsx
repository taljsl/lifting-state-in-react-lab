// src/components/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
        {/* remember that maps use () rather than {} in their functions */}
      {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
           <button type = 'button' onClick={() => props.addToBurger(ingredient)}>+</button> 
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
