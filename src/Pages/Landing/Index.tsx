import NavBar from "@Common/Navbar/Index";
import Footer from "@Pages/Footer/Index"
const Index = () => {
  return (
    <div>
      <NavBar/>
      <section className="z-0 flex align-center mt-[88px] gap-2 px-[90px] py-8 bg-white h-[600px]">
        <div className="flex-1 flex align-center flex-col justify-center">
          <h1 className="text-[50px] font-grotesk text-black">Navigating the digital landscape for success</h1>
          <p className="text-[18px] font-grotesk mt-[20px] text-black">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
         <button className="bg-black w-[210px] rounded-[10px] font-grotesk text-gray mt-[45px] px-[20px] py-[13px]">Book a consultation</button>
        </div>
        <div className="flex-1 flex  align-center justify-center">
          <img className="w-[450px]" src="/public/images/svgs/illustration.svg" alt="ilustration"/>
        </div>
        <div>

        </div>
      </section>
      <section className=" flex align-center justify-between px-20 py-10 bg-white">
        <img src="/public/images/svgs/amazon.svg" alt=""/>
        <img src="/public/images/svgs/company_logo.svg" alt=""/>
        <img src="/public/images/svgs/company_logo_2.svg" alt=""/>
        <img src="/public/images/svgs/amazon.svg" alt=""/>
        <img src="/public/images/svgs/company_logo.svg" alt=""/>
        <img src="/public/images/svgs/company_logo_2.svg" alt=""/>

      </section>
      <Footer/>
    </div>
  )
}

export default Index
