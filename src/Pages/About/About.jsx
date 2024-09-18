import Aboutimage from "../../assets/frontend/about_image.png";
import "./About_module.css";
export const About = () => {
  return (
    <div className=" ">
      <h1 className=" mainHeading">About Us</h1>
      <main className="  mainContent  ">
        {" "}
        <section className=" min-w-[300px]">
          <img src={Aboutimage} alt="" className="" />
        </section>
        <section className="  min-w-[60%]  m-4 ">
          {` Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way. `}
        </section>
      </main>
      <h2 className=" uppercase m-[5vh] font-semibold text-[20px] sm:text-[30px]">
        Why <span>Choose us</span>
      </h2>
      <footer className=" grid  gap-3 grid-cols-1 sm:grid-cols-3">
        <div className="utilityFooter">
          <h3 className="fontClass">Convenience:</h3>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="utilityFooter">
          <h3 className="fontClass">Convenience:</h3>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="utilityFooter">
          <h3 className="fontClass">Convenience:</h3>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
      </footer>
    </div>
  );
};

//
{
  /* <div>
<h1>Our Vision </h1>
{`   Our  vision at Prescripto is to create a seamless
healthcare experience for every user. We aim to bridge the gap
between patients and healthcare providers, making it easier for you`}
to access the care you need, when you need it
</div> */
}
