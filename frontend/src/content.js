// Load all images eagerly
const imagesGlob = import.meta.glob('./assets/images/*.avif', { eager: true });

// Helper to get image URL from the glob object
const getImage = (name) => {
  // Try to find the image in the glob keys
  const key = Object.keys(imagesGlob).find(k => k.includes(name));
  return key ? imagesGlob[key].default : null;
};

// Start Helper to build object
const imgObj = (name, label) => {
  const src = getImage(name);
  return src ? { src, label } : null;
};

// Organize images by category with labels
export const galleryByType = {
  bedroom1: [
    imgObj('Bedroom1_1', 'Bedroom 1'),
    imgObj('Bedroom1_2', 'Bedroom 1'),
    imgObj('Bedroom1_3', 'Bedroom 1'),
    imgObj('Bedroom1_4', 'Bedroom 1'),
  ].filter(Boolean),
  bedroom2: [
    imgObj('Bedroom2', 'Bedroom 2'),
  ].filter(Boolean),
  bathroom: [
    imgObj('FullBathroom1_1', 'Full Bathroom 1'),
    imgObj('FullBathroom1_2', 'Full Bathroom 1'),
    imgObj('FullBathroom2', 'Full Bathroom 2'),
    imgObj('FullBathroom3', 'Full Bathroom 3'),
  ].filter(Boolean),
  kitchen: [
    imgObj('FullKitchen', 'Gourmet Kitchen'),
  ].filter(Boolean),
  living: [
    imgObj('LivingRoom_1', 'Living Room'),
    imgObj('Livingroom_2', 'Living Room'),
    imgObj('LivingRoom_3', 'Living Room'),
  ].filter(Boolean),
  exterior: Object.keys(imagesGlob)
    .filter(k => k.includes('Exterior_'))
    .map((k, i) => ({
      src: imagesGlob[k].default,
      label: 'Exterior & Views'
    })),
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
