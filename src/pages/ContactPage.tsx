import Contact from "../components/Contact/Contact";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

function ContactPage() {
  return (
    <>
      <Navbar position={"fixed"} />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default ContactPage;
