import images from './images';

const wines = [
  {
    title: 'Vanilla Bean Frappuccino',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Caramel Macchiato',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Chai Latte',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Coffee Latte',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Pink Panther Frappuccino',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Light Bites',
    price: '$20',
    tags: 'Bruschetta, grilled cheese  250 gm',
  },
  {
    title: "Salads",
    price: '$16',
    tags: 'Caprese salad or a Greek salad 150 gm',
  },
  {
    title: 'Seafood',
    price: '$10',
    tags: 'Grilled salmon or shrimp scampi 100 gm',
  },
  {
    title: 'Charcuterie Board',
    price: '$31',
    tags: 'cured meats, cheeses, and olives and bitter-sweet notes of the Aperol Spritz. 100 gm',
  },
  {
    title: 'Fruit-Based Desserts:',
    price: '$26',
    tags: 'Fruity treats like sorbet, gelato, or fruit tarts 100 gm',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Michelin star.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Michelin star.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Michelin star.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Michelin star.',
  },
];

export default { wines, cocktails, awards };
