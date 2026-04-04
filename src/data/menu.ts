export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export const CATEGORIES = [
  "Starters",
  "Main Course",
  "Breads",
  "Rice",
  "Beverages",
  "Desserts",
];

// ✅ IMAGE MAPPING (KEYS MUST MATCH NAME FORMAT)
export const IMAGE_FALLBACKS: Record<string, string> = {
  "default-food": "/images/menu/default-food.jpg",
};

// ✅ FINAL FUNCTION (SAFE + ERROR FREE)
export const getImagePath = (name: string): string => {
  if (!name) return IMAGE_FALLBACKS["default-food"];

  const key = name.toLowerCase().trim().replace(/\s+/g, "-");
  
  // The user specified that uploaded images are in /public/images/menu/
  // In Vite, files in public/ are served from the root /
  return `/images/menu/${key}.jpeg`;
};

// ✅ MENU DATA
export const INITIAL_MENU: MenuItem[] = [
  { id: "s1", name: "Paneer Tikka", description: "Grilled cottage cheese marinated in spices.", price: 350, category: "Starters" },
  { id: "s2", name: "Veg Seekh Kebab", description: "Minced vegetable kebabs cooked in tandoor.", price: 320, category: "Starters" },
  { id: "s3", name: "Hara Bhara Kebab", description: "Spinach and green pea patties.", price: 280, category: "Starters" },
  { id: "s4", name: "Samosa", description: "Crispy pastry filled with spiced potatoes.", price: 120, category: "Starters" },
  { id: "s5", name: "Dahi Puri", description: "Crispy puris filled with yogurt and chutneys.", price: 180, category: "Starters" },

  { id: "m1", name: "Dal Makhani", description: "Creamy black lentils slow-cooked overnight.", price: 380, category: "Main Course" },
  { id: "m2", name: "Paneer Butter Masala", description: "Paneer in a rich tomato and butter gravy.", price: 450, category: "Main Course" },
  { id: "m3", name: "Shahi Paneer", description: "Royal paneer curry in a creamy gravy.", price: 480, category: "Main Course" },
  { id: "m4", name: "Chole Masala", description: "Spiced chickpeas in a tangy gravy.", price: 340, category: "Main Course" },
  { id: "m5", name: "Mix Veg Curry", description: "Assorted vegetables in a spiced gravy.", price: 360, category: "Main Course" },

  { id: "b1", name: "Butter Naan", description: "Soft leavened bread with butter.", price: 60, category: "Breads" },
  { id: "b2", name: "Garlic Naan", description: "Leavened bread topped with garlic.", price: 80, category: "Breads" },
  { id: "b3", name: "Tandoori Roti", description: "Whole wheat bread cooked in tandoor.", price: 40, category: "Breads" },
  { id: "b4", name: "Laccha Paratha", description: "Layered flaky bread.", price: 90, category: "Breads" },

  { id: "r1", name: "Hyderabadi Veg Biryani", description: "Fragrant basmati rice with vegetables.", price: 420, category: "Rice" },
  { id: "r2", name: "Jeera Rice", description: "Rice tempered with cumin seeds.", price: 220, category: "Rice" },
  { id: "r3", name: "Veg Pulao", description: "Rice cooked with mixed vegetables.", price: 280, category: "Rice" },

  { id: "v1", name: "Mango Lassi", description: "Sweet mango yogurt drink.", price: 150, category: "Beverages" },
  { id: "v2", name: "Masala Chai", description: "Traditional Indian tea.", price: 80, category: "Beverages" },
  { id: "v3", name: "Sweet Lassi", description: "Sweet yogurt drink.", price: 120, category: "Beverages" },
  { id: "v4", name: "Buttermilk", description: "Spiced yogurt drink.", price: 100, category: "Beverages" },

  { id: "d1", name: "Gulab Jamun", description: "Sweet dumplings in sugar syrup.", price: 120, category: "Desserts" },
  { id: "d2", name: "Rasmalai", description: "Soft paneer in saffron milk.", price: 180, category: "Desserts" },
  { id: "d3", name: "Kheer", description: "Indian rice pudding.", price: 150, category: "Desserts" },
];