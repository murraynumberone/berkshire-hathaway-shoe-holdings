export type RetailerBrand = {
  name: string;
  url: string;
};

export type RetailerCategory = {
  name: string;
  brands: RetailerBrand[];
};

export const retailerCategories: RetailerCategory[] = [
  {
    name: "Comfort & Fashion",
    brands: [
      { name: "Børn", url: "https://www.bornshoes.com/" },
      { name: "B.Ø.C.", url: "https://www.bocshoes.com/" },
      { name: "Comfortiva", url: "https://www.comfortiva.com/" },
      { name: "Eurosoft", url: "https://www.eurosoftfootwear.com/" },
      { name: "Kork-Ease", url: "https://www.korkease.com/" },
      { name: "Korks", url: "https://korksfootwear.com/" },
      { name: "Söfft", url: "https://www.sofftshoe.com/" },
    ],
  },
  {
    name: "Work & Service",
    brands: [
      { name: "Align", url: "https://www.alignshoe.com/" },
      { name: "Carolina", url: "https://www.carolinashoe.com/" },
      { name: "Chippewa", url: "https://www.chippewaboots.com/" },
      {
        name: "Corcoran",
        url: "https://www.carolinashoe.com/en/corcoran.html",
      },
      {
        name: "Matterhorn",
        url: "https://www.carolinashoe.com/en/matterhorn.html",
      },
      { name: "Nurse Mates", url: "https://www.nursemates.com/" },
      { name: "Söfft", url: "https://www.sofftshoe.com/" },
    ],
  },
  {
    name: "Sport",
    brands: [{ name: "Dexter Bowling", url: "https://www.dexterbowling.com/" }],
  },
  {
    name: "Western",
    brands: [
      { name: "Double-H Boots", url: "https://www.doublehboots.com/" },
      { name: "Justin", url: "https://www.justinboots.com/" },
      { name: "Nocona", url: "https://www.nocona.com/" },
      { name: "Tony Lama", url: "https://www.tonylama.com/" },
    ],
  },
  {
    name: "Retailers",
    brands: [
      { name: "Super Shoes", url: "https://www.supershoes.com/" },
      { name: "Shoeline", url: "https://www.shoeline.com/" },
    ],
  },
];
