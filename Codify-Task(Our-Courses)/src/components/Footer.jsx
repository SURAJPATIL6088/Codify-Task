import { logo, facebook, instagram, youtube, linkdin } from "../Images";

const Footer = () => {
  return (
    <footer className="bg-[#000000] flex flex-wrap justify-center items-center sm:flex-col text-white py-28">
      <div className="container mx-auto px-36 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="cursor-pointer w-40" />
          <p className="text-[20px] font-semibold text-[hsl(0,0%,50%)] text-start tracking-[2px] mt-4">
            Follow Us On :
          </p>
          <hr className="w-3/4 text-[#212529]"></hr>
          <div className="cursor-pointer flex items-start gap-8 p-3 flex-wrap">
            <img
              src={facebook}
              alt="facebookLogo"
              className="hover:scale-110 mt-2 h-auto"
            />
            <img
              src={youtube}
              alt="youtubeLogo"
              className="hover:scale-110 mt-2 h-auto"
            />
            <img
              src={instagram}
              alt="instagramLogo"
              className="hover:scale-110 mt-2 h-auto"
            />
            <img
              src={linkdin}
              alt="linkdinLogo"
              className="hover:scale-110 mt-2 h-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="font-sans text-start text-3xl text-[#ffd319] bg-[#000000] tracking-[3px] font-bold mb-2">
            Menu
          </h3>
          <ul className="cursor-pointer tracking-[0.6px] p-3 text-lg">
            <li className="">Home</li>
            <li className="mt-1">Courses</li>
            <li className="mt-1">Placements</li>
            <li className="mt-1">Contact Us</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="font-sans text-start text-3xl text-[#ffd319] bg-[#000000] tracking-[3px] font-bold mb-2">
            Courses
          </h3>
          <ul className="cursor-pointer tracking-[0.6px] mt-3 p-3 text-lg">
            <li className="">MERN Stack</li>
            <li className="mt-2">Java Full Stack</li>
            <li className="mt-2">Python Full Stack</li>
            <li className="mt-2">Data Analytics</li>
            <li className="mt-2">Data Science</li>
            <li className="mt-2">Digital Marketing</li>
            <li className="mt-2">Manual Testing</li>
            <li className="mt-2">Selenium Automation</li>
            <li className="mt-2">Android Training</li>
            <li className="mt-2">IOS Traning</li>
            <li className="mt-2">Flutter App Developement Traning</li>
            <li className="mt-2">UX-UI Traning</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="font-sans text-start text-3xl text-[#ffd319] bg-[#000000] tracking-widest font-bold mb-2">
            Contact{" "}
          </h3>
          <h3 className="text-[hsl(0,0%,50%)] tracking-[2px] font-semibold text-[20px] mt-2 mb-1">
            Call Us :{" "}
          </h3>
          <hr className="w-3/4 bg-[hsl(0,0%,50%)] text-[hsl(0,0%,50%)]"></hr>
          <ul className="cursor-pointer mt-2 text-[18px] ">
            <li>+919664545072</li>
            <li>+919930112627</li>
          </ul>

          <h3 className="text-[hsl(0,0%,50%)] tracking-[2px] font-semibold text-[20px] mt-2 mb-1">
            Email :{" "}
          </h3>
          <hr className="w-3/4 text-[#212529]"></hr>
          <p className="cursor-pointer text-[18px] mt-2">
            trycatchclasses@gmail.com
          </p>

          <h3 className="text-[hsl(0,0%,50%)] tracking-[2px] font-semibold text-[20px] mt-2 mb-1">
            Address :{" "}
          </h3>
          <hr className="w-3/4 text-[#212529]"></hr>
          <p className="text-[18px] mt-2 tracking-normal">
            1213/1214, 12th Floor,<br></br>GoldCrest Business Center, <br></br>{" "}
            L.T.Road,<br></br>Opposite Manubhai Jewellers,<br></br>& Above
            Westside Showroom,<br></br>Borivali West,<br></br>Mumbai - 400092.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
