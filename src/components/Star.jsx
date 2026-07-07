import { assets } from "../assets/assets"


const Star = ({rating = 3}) => {
  return (
    <>
    {Array(5).fill('').map((_, index) => (
        <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icon"
        className="w-4.5 h-4.5" />
    ))}
    </>
  )
}

export default Star