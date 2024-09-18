import contact_image from "../../assets/frontend/contact_image.png";

export const Contact = () => {
  return (
    <section>
      <h1 className=" uppercase  text-[25px] sm:text-[40px] font-semibold text-center m-5">
        Contact Us
      </h1>

      <main className="sm:flex   gap-5">
        <img
          src={contact_image}
          alt=""
          className="
         sm:max-w-[400px]"
        />

        <div className="mt-[5vh] p-4">
          <h2 className="font-semibold  text-[20px]">Our Services</h2>
          <span>Dummy xyz Street No 1, Noida, India</span>
          <p>Tel: 1234567806</p>
          <p className="font-semibold">Email:example123@gmail.com</p>
          <h3>Careers at CareBridge</h3>
          <p>Learn more about our teams and job openings.</p>
          <button className="p-3 border border-black m-5">Explore Jobs</button>
        </div>
      </main>
    </section>
  );
};
