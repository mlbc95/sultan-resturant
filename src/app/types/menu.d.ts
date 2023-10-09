interface ImenuBtnFilters {
    type: "Appetizers" | "Main Entrees" | "Vegetarian Entrees" | "Drinks" | "All";
    isActive: boolean;
}

interface ImenuItem {
    name: string;
    img: string;
    price?: string;
    descrption: string;
    type: "Appetizers" | "Main Entrees" | "Vegetarian Entrees" | "Drinks";
}