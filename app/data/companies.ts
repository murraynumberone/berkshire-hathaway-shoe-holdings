export type Company = {
  name: string;
  imageUrl: string;
  history: string[];
};

export const companies: Company[] = [
  {
    name: "H. H. Brown",
    imageUrl: "https://www.berkshirehathawayshoes.com/images/HHbrown.jpg",
    history: [
      "Since the day our very first shoe was sketched, stitched and meticulously hand-finished in our first factory just west of Boston back in 1883, we've been driven by the desire to craft the best shoes and boots possible.",
      "Over the years, the H.H. Brown Shoe Company has mastered the art of fine shoemaking by incorporating traditional time-honored techniques and pioneering exciting new innovations to meet the needs of our ever-changing world. From the iconic Corcoran jump boots that outfitted our military heroes in World War II to the revolutionary Dexter T H E 9, the world's most advanced bowling shoe, our name has become synonymous with ingenuity, quality and durability.",
      "Today, products from our extensive and diverse family of highly-recognized affiliated brands: Align, Børn, BØC, Carolina, Comfortiva, Corcoran, Dexter Bowling, Double-H Boots, EüroSoft, Korks, Kork-Ease, Matterhorn, Nurse Mates, Söfft and Softspots are trusted worldwide by customers seeking exceptional quality, value and performance.",
    ],
  },
  {
    name: "Justin",
    imageUrl: "https://www.berkshirehathawayshoes.com/images/Justin.jpg",
    history: [
      "The Justin story began when a young Herman Joseph Justin decided to follow his heart in pursuit of his passion for leather work. Leaving his home in Lafayette, Indiana where a secure position in the family cigar business awaited him, he rode the rails to Texas with the sole mission of becoming a bootmaker. After honing his craft as an apprentice, H.J. repaired the boots of cattlemen driving west along the Chisholm Trail, officially opening his first custom boot shop in 1879. Justin Boots was born.",
      "Since that time, Justin Boots has become a household name not only in Texas but worldwide, recognized for introducing new categories of boots like the iconic roper and custom-designing boots for our nation's Presidents, while garnering generations of loyal fans along the way. Known as the Standard of the West, Justin Boots is celebrated for not only for its exceptional craftsmanship but its commitment to western values and the western way of life.",
      "Today, in addition to Justin Boots, the Justin family of brands includes Chippewa work boots, Nocona Western boots and the venerable legacy in fine bootmaking since 1911, Tony Lama.",
    ],
  },
];
