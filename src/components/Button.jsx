const Button = (props) => {
  return (
    <>
    <button onClick={props.function}>{props.title}</button>
    </>
  )
}

export default Button