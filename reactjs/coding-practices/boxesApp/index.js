const Box = props => {
  const {name, className} = props,
  const boxClassName = `boxes ${className}`

  return (
  <div className = {boxClassName}>
    <p>{name}</p>      
  </div>)
}

const element = (
  <div className = "bg-container"> 
    <h1 className = "boxes-heading">Boxes</h1>
    <div>
        <Box
            name= "small",
            className = "small-box" 
        />
        <Box
            name="Medium",
            className = "medium-box"
        />
        <Box
            name = "Large",
            className = "large-box"
        />
    </div>
  </div> 
)

ReactDOM.render(element, document.getElementById("root"));
