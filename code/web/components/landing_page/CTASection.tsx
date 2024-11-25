const LandingPageCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="max-w-[432px]">
          <h2 className="text-[32px] font-semibold text-[#317ba0] font-['Montserrat'] mb-8">
            Join The Revolution
          </h2>
          <p className="text-xl text-black font-['Montserrat'] mb-12">
            Ready to transform the way you rent, save, and earn? Sign up today
            and become part of the OpenHouse movement
          </p>
          <button className="px-4 py-1.5 bg-[#317ba0] rounded-lg text-white font-medium">
            Create Account
          </button>
        </div>
        <img
          className="w-[726px] h-[485px]"
          src="https://via.placeholder.com/726x485"
          alt="CTA illustration"
        />
      </div>
    </section>
  );
};

export default LandingPageCTA;
