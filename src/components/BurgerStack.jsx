// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (

        <ul>
        {props.ingredients.map((ingredient, index) => (
        <>
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
            <button type = 'button'onClick={() => props.removeFromBurger(index) } >X</button>
            </li>
            </>
        ))}
    </ul>

    )
  };
  
  export default BurgerStack;
  