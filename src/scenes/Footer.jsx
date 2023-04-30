import SocialMediaIcons from "../components/SocialMediaIcons";
const Footer = () => {
  const date =  new Date().getFullYear()
    return (
      <footer className="h-64 bg-red pt-10">
        <div className="w-10/12 mx-auto">
          <SocialMediaIcons />
          <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl text-yellow">
              IBRAHIMA DIALLO
            </p>
            <p className="font-playfair text-md text-yellow">
              ©{date} Diallo. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;