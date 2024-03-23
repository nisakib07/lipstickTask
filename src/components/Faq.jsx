import { TiTick } from "react-icons/ti";

const Faq = () => {
  const faqData = [
    {
      question: "All benefits",
      answer: [
        "Conditions and nourishes lips",
        "Immediate and 8-hour moisture",
        "Comfortable formula",
        "Lips look visibly fuller, 12 hours",
        "Long-wearing and colour-true, 12 hours",
        "Non-feathering and non-bleeding, 12 hours",
        "Non-flaking and non-caking, 12 hours",
        "98% said this lipstick feels comfortable throughout wear",
        "95% said this lipstick provides high impact colour throughout wear",
        "96% said this lipstick leaves lips feeling soft/smooth",
        "96% said this lipstick feels luxurious",
      ],
    },
    {
      question: "Ingredients",
      answer:
        "Ingredients: Octyldodecanol, Neopentyl Glycol Diheptanoate, Synthetic Wax, Pentaerythrityl Tetraisostearate, Trimethylpentanediol/Adipic Acid/Glycerin Crosspolymer, Silica, Microcrystalline WaxCera MicrocristallinaCire Microcristalline, Euphorbia Cerifera (Candelilla) WaxCandelilla CeraCire De Candelilla, Butyrospermum Parkii (Shea) Butter, Cocos Nucifera (Coconut) Oil, Kaolin, Bis-Diglyceryl Polyacyladipate-2, Copernicia Cerifera (Carnauba) Wax Copernicia Cerifera Cera Cire De Carnauba, Boron Nitride, Theobroma Cacao (Cocoa) Seed Butter, Polyglyceryl-3 Diisostearate, Methicone, Disteardimonium Hectorite, Propylene Carbonate, Lecithin, Vanillin, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, [+/- Mica, Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491), Iron Oxides (Ci 77492), Iron Oxides (Ci 77499), Red 6 (Ci 15850), Red 7 (Ci 15850), Red 28 (Ci 45410), Red 30 (Ci 73360), Red 33 (Ci 17200), Yellow 5 (Ci 19140), Blue 1 Lake (Ci 42090), Red 6 Lake (Ci 15850), Red 7 Lake (Ci 15850), Red 28 Lake (Ci 45410), Red 30 Lake (Ci 73360), Red 33 Lake (Ci 17200), Yellow 5 Lake (Ci 19140), Yellow 6 Lake (Ci 15985)]  ILN52323",
    },
    {
      question: "Shade Descriptions",
      answer: [
        "NUDE: Warm Teddy, Taupe, Mull It To The Max, Café Mocha, Honeylove, Kinda Sexy, Velvet Teddy, Antique Velvet, Whirl, Sweet Deal",
        "RED: Diva, Russian Red, Lady Danger, Red Rock, Ruby Woo, Avant Garnet, D For Danger, Sin, Ring The Alarm",
        "PINK: Lipstick Snob, Go Retro, Captive Audience, Twig Twist, Mehr, Candy Yum Yum, You Wouldn't Get It, Get The Hint?, Keep Dreaming, Forever Curious, Flamingo",
        "BERRY: Mixed Media, Everybody's Heroine, Smoked Purple, Soar",
        "ORANGE: Chili, Marrakesh, No Coral-Ation, Overstatement, Sugar Dada",
        "DARE TO WEAR: Caviar",
      ],
    },
    {
      question: "How can I make my lipstick last longer?",
      answer:
        "To make your lipstick last longer, start with a lip primer or foundation to create a smooth base. Apply a lip liner to outline and fill in your lips, then apply the lipstick with a brush or directly from the tube. Blot your lips with a tissue and reapply a second layer, then finish with a translucent setting powder for extra staying power.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="mt-16 text-5xl text-center font-extrabold">
        KEEP NO QUESTIONS INSIDE!
      </h1>

      <div className="mt-10 flex flex-col lg:flex-row items-center gap-5 mx-4">
        <div
          data-aos="flip-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out">
          <h1 className="text-3xl font-bold w-full lg:w-[500px]">
            SILKY MATTE FINISH, 12HR COMFORTABLE WEAR.
            PIGMENT-RICH/FULL-COVERAGE COLOUR
          </h1>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="join join-vertical w-full overflow-x-hidden">
          {faqData?.map((faq) =>
            faq?.question === "All benefits" ? (
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-2xl font-extrabold uppercase">
                  {faq?.question}
                </div>
                <div className="collapse-content text-lg font-bold">
                  <div>
                    {faq?.answer?.map((answer) => (
                      <div answer={answer} className="flex items-center gap-3">
                        <i class="fa-solid fa-check"></i>
                        {answer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-2xl font-extrabold uppercase">
                  {faq?.question}
                </div>
                <div className="collapse-content text-lg font-bold">
                  <p>{faq?.answer}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
