import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="h-75px fixed z-20 top-0 w-full flex items-center justify-between py-5 px-[90px] bg-white">
      <div>
      <img className="h-20px" src="/public/images/svgs/Logo.svg" alt="logo"/> 
      </div>
      <div className="flex items-center gap-8">
        <Link className="text-black font-grotesk text-[15px" to="#">About us</Link>
        <Link className="text-black font-grotesk text-[15px]" to="#">Services</Link>
        <Link className="text-black font-grotesk text-[15px]" to="#">Use Cases</Link>
        <Link className="text-black font-grotesk text-[15px]" to="#">Pricing</Link>
        <Link className="text-black font-grotesk text-[15px]" to="#">Blog</Link>
        <Link className="text-black font-grotesk text-[15px] bg-white rounded-[10px] border-solid border border-black py-[12px] px-[28px]" to="#">Request a quote</Link>
      </div>
    </div>
  );
};

export default Index;
