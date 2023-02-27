function MyRecipesComponent({ label, calories, photo, ingredients }) {

    return (
        <div className="containernew">
            <h2>{label}</h2>
            <h4>{calories.toFixed()} calories</h4>
            <img src={photo} alt="recipe"></img>
            
            <ul className="list">
                {ingredients.map((item, index) => (
                    <li key={index}>
                        <img src="https://img.icons8.com/fluency/256/checked.png" alt="tick" className="icon"/>
                        {item}</li>
                ))}
            </ul>

        </div>
    )

}

export default MyRecipesComponent;