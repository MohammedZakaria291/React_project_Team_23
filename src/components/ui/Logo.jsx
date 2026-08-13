import logo from '../../assets/images/logo.png';

function Logo({ className = "h-10 w-10" }) {
  return (
    <img
      src={logo}
      alt="BNU Logo"
      className={`${className} object-contain`}
    />
  );
}

export default Logo;