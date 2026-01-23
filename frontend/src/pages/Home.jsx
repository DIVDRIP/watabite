import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="h-[90vh] w-full">
      <img src={assets.herobanner} alt="" className="h-full w-full object-cover" />       
      </div>
    </div>
  )
}

export default Home;