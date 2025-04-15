import "./footer.css";

function Footer() {
  return (
    <footer className="w-full">
      <div className="relative w-full h-[75vh]">
        {/* Dedicated div for the masked background */}
        <div className="maomao-background" />
        {/* Contact info div, unaffected by the mask */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 text-white text-right">
          <p>Your Name</p>
          <p>Email: example@domain.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
