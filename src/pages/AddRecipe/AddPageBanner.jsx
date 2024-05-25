import addPageBanner from "../../../public/images/aboutBanner.jpg";

const AddPageBanner = () => {
  return (
    <div>
      <section className="mb-56">
        <div className="relative ">
          <img
            src={addPageBanner}
            alt="flover"
            className="w-full h-[350px] bg-cover bg-fix bg-fixed"
          />
          <div className="bg-white text-left space-y-2 py-8 pr-0 md:pr-24 pl-10 absolute -bottom-20 right-48  rounded-lg border-l-8 border-primary ">
            <p className="font-bold text-6xl text-left">Add Recipe</p>
            <p className="text-xl font-semibold text-left">
              Beyond the boundaries of taste.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPageBanner;
