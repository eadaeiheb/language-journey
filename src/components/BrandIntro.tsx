import React from 'react';

const BrandIntro = () => {
  return (
    <section className="py-8 px-4 flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-9 bg-gray-50">
        <h1 className="text-center text-[#591C1C] text-4xl sm:text-5xl md:text-6xl my-20 font-['WomanFontBold'] mx-auto w-[90%] sm:w-full">
          The World of Fiori
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mx-4 sm:mx-8 my-12">
          <div className="flex-1">
            <img
              src="About.png"
              alt="Fiori brand"
              className="w-full h-auto object-cover min-h-[800px]"
            />
          </div>

          <div className="flex-1 bg-white text-[#591C1C] px-6 sm:px-14 py-20 flex flex-col justify-between rounded-lg shadow-lg">
            <div className="space-y-12">
              <p className="leading-loose text-xl font-['WomanFontRegular']">
                Fiori, founded in 2014, is a Tunisian brand that integrates into the universe of high-end ready-to-wear and leather goods for men.
              </p>
             
              <p className="leading-loose text-xl font-['WomanFontRegular']">
                We offer a wide range of items, including shirts, polos, pants, suits, jackets, and more.
              </p>
             
              <p className="leading-loose text-xl font-['WomanFontRegular']">
                We also offer a wide range of leather goods such as wallets, belts, checkbook holders, document holders, passport holders, briefcases, and more.
              </p>
            </div>
         
            <div className="mt-24">
              <h2 className="text-[#591C1C] text-5xl font-['WomanFontBold']">
                Learn More!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;