import ApplyHeader from "../components/Apply/ApplyHeader";
import Navbar from "../components/Layouts/Navbar";
import ApplyDetails from "../components/Apply/ApplyDetails";
import { universities } from "../components/Programs/data";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import Footer from "../components/Layouts/Footer";

function ApplyPage() {
  const { id } = useParams();
  const data = universities.find(
    (university) => slugify(university.name, { lower: true }) === id
  );

  return (
    <>
      <Navbar />
      <ApplyHeader name={data?.name} img={data?.university} logo={data?.logo} />
      <ApplyDetails data={data} />
      <Footer display="none" />
    </>
  );
}

export default ApplyPage;
