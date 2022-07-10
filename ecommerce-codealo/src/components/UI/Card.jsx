const Card = ({children, className}) => {
  return (
    <div className={`border rounded-md drop-shadow-sm bg-white p-4 ${className}`}>{children}</div>
  )
}

export default Card