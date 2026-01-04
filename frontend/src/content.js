// Load all images eagerly
const imagesGlob = import.meta.glob('./assets/images/*.avif', { eager: true });

// Helper to get image URL from the glob object
const getImage = (name) => {
  // Try to find the image in the glob keys
  const key = Object.keys(imagesGlob).find(k => k.includes(name));
  return key ? imagesGlob[key].default : null;
};

// Organize images by category
export const galleryByType = {
  bedroom1: [
    getImage('Bedroom1_1'),
    getImage('Bedroom1_2'),
    getImage('Bedroom1_3'),
    getImage('Bedroom1_4'),
  ].filter(Boolean),
  bedroom2: [
    getImage('Bedroom2'),
  ].filter(Boolean),
  bathroom: [
    getImage('FullBathroom1_1'),
    getImage('FullBathroom1_2'),
    getImage('FullBathroom2'),
    getImage('FullBathroom3'),
  ].filter(Boolean),
  kitchen: [
    getImage('FullKitchen'),
  ].filter(Boolean),
  living: [
    getImage('LivingRoom_1'),
    getImage('Livingroom_2'),
    getImage('LivingRoom_3'),
  ].filter(Boolean),
  exterior: Object.keys(imagesGlob)
    .filter(k => k.includes('Exterior_'))
    .map(k => imagesGlob[k].default),
};

export const houseDetails = {
  title: "Castiglione Messer Raimondo Retreat",
  subtitle: "A refined sanctuary in the hills of Abruzzo",
  location: "Castiglione Messer Raimondo, Italy",
  description: "Newly renovated home in hills of Abruzzo close to the picturesque medieval town of Appignano di Teramo. Beautiful views over the hilltowns with access to the sea and mountains.",
  specs: {
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 3,
  },
  amenities: [
    "Wifi",
    "Washer",
    "Air Conditioning",
    "Free Parking",
    "Full Kitchen",
  ],
  contact: {
    phone: "+1 (828) 458-8712",
    note: "Please contact for availability and rates."
  }
};
