import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuFilter: ImenuBtnFilters[] = [];
  displayMenu: ImenuItem[] = [];
  menuItems: ImenuItem[] = [];
  isActive: boolean = true;

  ngOnInit() {
    this.menuFilter = [{
      type: "All",
      isActive: true
    },
    {
      type: "Appetizers",
      isActive: false
    },
    {
      type: "Main Entrees",
      isActive: false
    },
    {
      type: "Vegetarian Entrees",
      isActive: false
    },
    {
      type: "Drinks",
      isActive: false
    }
    ]
    this.displayMenu = this.menuItems = [
      {
        type: "Appetizers",
        name: "Hummus",
        descrption: "Ground chickpea, sesame seeds, olive oil, lemon & garlic served with fresh na'an",
        img: "assets/images/menu/hummus.jpeg",
        price: "9.95"
      },
      {
        type: "Appetizers",
        name: "Baba Ganoush",
        descrption: "Grilled eggplant, sesame seeds, olive oil, lemon & garlic served with fresh na'an",
        img: "assets/images/menu/baba-ganoush.jpeg",
        price: "9.95"
      },
      {
        type: "Appetizers",
        name: "Fattoush Salad",
        descrption: "Chopped lettuce, tomato, onion, cucumber & radish, served with house dressing and fried pita chip",
        img: "assets/images/menu/fatush_salad.webp",
        price: "9.95"
      },
      {
        type: "Appetizers",
        name: "Tabbouleh",
        descrption: "Chopped parsley, tomato, cracked wheat & mint served with lemon and olive oil dressing ",
        img: "assets/images/project/04.jpg",
        price: "9.95"
      },
      {
        type: "Appetizers",
        name: "Turkish Styled Fattush (Salad)",
        descrption: "Grilled eggplant, tomato, cucumber, served on top of fried pita chips with a garlic yogurt sauce topped with parsley ",
        img: "assets/images/menu/turkish-fatush.jpeg",
        price: "10.95"
      },
      {
        type: "Appetizers",
        name: "Saksuka",
        descrption: "Grilled eggplant, tomato, onion, pepper and garlic served with fresh na'an ",
        img: "assets/images/menu/saksuka.webp",
        price: "9.95"
      },
      {
        type: "Appetizers",
        name: "Falafel Plate",
        descrption: "Chickpeas mashed with garlic, onion, and cilantro served with hummus & fresh na'an",
        img: "assets/images/menu/falafel.jpeg",
        price: "11.95"
      },
      {
        type: "Appetizers",
        name: "Lentil Soup",
        descrption: "Lentils with onion & curry",
        img: "assets/images/menu/soup.jpeg",
        price: "3.95"
      },
      {
        type: "Appetizers",
        name: "Chicken Wings ",
        descrption: "served with hot sauce & fries ",
        img: "assets/images/project/04.jpg",
        price: "10.99"
      },
      {
        type: "Main Entrees",
        name: "Beef Kabob",
        descrption: "Ground Beef kabob served with rice, grilled tomato & salad ",
        img: "assets/images/menu/beef-kabob.jpeg",
        price: "18.95"
      },
      {
        type: "Main Entrees",
        name: "Dolma",
        descrption: "Grape leaves, onion,zucchini & eggplant stuffed with beef & rice served with salad",
        img: "assets/images/menu/dolma.jpeg",
        price: "18.95"
      },
      {
        type: "Main Entrees",
        name: "Chicken Kabob",
        descrption: "Chicked kabob served with rice, grilled tomato & salad ",
        img: "assets/images/menu/Chicked-Kabob.jpeg",
        price: "16.95"
      },
      {
        type: "Main Entrees",
        name: "Lamb Shank",
        descrption: "Lamb shank cooked in garlic, black pepper, olive oil and lemon juice served with rice & salad ",
        img: "assets/images/menu/lamb-shank.jpeg",
        price: "20.95"
      },
      {
        type: "Main Entrees",
        name: "Lamb Kabob",
        descrption: "Lamb kabob served with rice, grilled tomato & salad ",
        img: "assets/images/menu/Lamb-Kabob.jpeg",
        price: "19.95"
      },
      {
        type: "Main Entrees",
        name: "Sultan Pilau",
        descrption: "Basamti rice with lamb shank meat, almonds, pistachio, raisins, walnuts,and carrots served inside of a filo dough pocket served with salad",
        img: "assets/images/menu/sultan-pilau.jpeg",
        price: "20.95"
      },
      {
        type: "Main Entrees",
        name: "Mixed Grill",
        descrption: "Ground Beef, chicken kabob and lamb kabob served with rice & salad",
        img: "assets/images/menu/mixed-grill.jpeg",
        price: "23.95"
      },
      {
        type: "Main Entrees",
        name: "Pilau Rice",
        descrption: "Basmati rice with lint, onions & raisins and your choice of meat served with salad",
        img: "assets/images/menu/pilau-rice.jpeg",
        price: "18.95 - 20.95"
      },
      {
        type: "Main Entrees",
        name: "Chicken and Beef Combo",
        descrption: "Grilled chicken kabob with beef kabob served with rice, grilled tomato & salad",
        img: "assets/images/menu/chicken-beef.jpeg",
        price: "20.95"
      },
      {
        type: "Main Entrees",
        name: "Lamb Chops",
        descrption: "Grilled lamb chops seasoned with salt, onion and lemon juice served with rice & salad",
        img: "assets/images/menu/lamb-chops.jpeg",
        price: "23.95"
      },
      {
        type: "Main Entrees",
        name: "Saffron Curry Chicken or Shrimp",
        descrption: "Chicken or shrimp cooked in a saffron curry crème sauce served with rice.",
        img: "assets/images/menu/saffron-chicken.jpeg",
        price: "16.95 - 17.95"
      },

      {
        type: "Main Entrees",
        name: "Chicken Biryani",
        descrption: "Chicken and rice seasoned in onion and garlic, served with a yogurt cucumber sauce. ",
        img: "assets/images/menu/chicken-biryani.jpeg",
        price: "15.95"
      },
      {
        type: "Main Entrees",
        name: "Munto",
        descrption: "Steamed dumplings stuffed with ground beef onions and parsley served with a garlic yogurt and tomato sauce. ",
        img: "assets/images/menu/munto.jpeg",
        price: "16.95"
      },
      {
        type: "Main Entrees",
        name: "Musakhan",
        descrption: "Palestinian dish, composed of shredded chicken baked with olive oil, onions, sumac, allspice, and saffron served over bread. ",
        img: "assets/images/menu/musakhan.jpeg",
        price: "13.95"
      },
      {
        type: "Main Entrees",
        name: "Sheeshbarak",
        descrption: "Steamed dumplings stuffed with ground beef, onion, and parsley cooked in a yogurt and mint sauce, served with rice.  ",
        img: "assets/images/menu/sheeshbarak.jpeg",
        price: "16.95"
      },
      {
        type: "Main Entrees",
        name: "Stuffed Chicken Breast",
        descrption: "Chicken breast stuffed with cheese, olives, oregano, and parsley in a creme sauce served with rice. ",
        img: "assets/images/project/04.jpg",
        price: "18.95"
      },
      {
        type: "Main Entrees",
        name: "Tandoori Chicken",
        descrption: "Chicken marinated in yogurt, onion, & Moroccan spice served with rice and salad ",
        img: "assets/images/menu/tendoori.jpeg",
        price: "19.95"
      },
      {
        type: "Main Entrees",
        name: "Ali Naza Kabob",
        descrption: "Mashed grilled eggplant cooked with a garlic yogurt sauce topped with beef, chicken or lamb kabob",
        img: "assets/images/menu/ali-naza.jpeg",
        price: "17.95 - 20.95"
      },
      {
        type: "Main Entrees",
        name: "Qali",
        descrption: "Beef stew cooked with tomatoes, peppers, garlic, & oregano served with rice & salad. ",
        img: "assets/images/menu/qali.jpeg",
        price: "17.95"
      },
      {
        type: "Main Entrees",
        name: "Curry Fish",
        descrption: "Tilapia seasoned with dill, chives, onion, and lemon juice cooked in a saffron curry sauce served with rice & salad. ",
        img: "assets/images/menu/curry-fish.jpeg",
        price: "16.95"
      },

      {
        type: "Vegetarian Entrees",
        name: "Sultan Pilau",
        descrption: "Basmati rice with almonds, pistachio, raisins, walnuts and carrots served inside a filo dough pocket served with salad ",
        img: "assets/images/project/04.jpg",
        price: "17.95"
      },
      {
        type: "Vegetarian Entrees",
        name: "Dolma",
        descrption: "Grape leaves, onions, zucchini, eggplant stuffed with rice & salad",
        img: "assets/images/project/04.jpg",
        price: "16.95"
      },
      {
        type: "Vegetarian Entrees",
        name: "Pilau Rice",
        descrption: "Basmati rice with lentils, onions & raisins served with salad & spinach",
        img: "assets/images/project/04.jpg",
        price: "14.95"
      },
      {
        type: "Vegetarian Entrees",
        name: "Saffron Curry Vegetables",
        descrption: "Broccoli, carrots, green beans in a saffron curry crème sauce served with rice.",
        img: "assets/images/project/04.jpg",
        price: "15.95"
      },
      {
        type: "Vegetarian Entrees",
        name: "Vegetable pasta",
        descrption: "Mushrooms, olive oil, pesto, and lemon in a saffron cream sauce.",
        img: "assets/images/project/04.jpg",
        price: "13.95"
      },
      {
        type: "Vegetarian Entrees",
        name: "Grilled Vegetable Kabob",
        descrption: "Grilled onion, tomato, mushroom, zucchini, and eggplant served with rice and salad",
        img: "assets/images/project/04.jpg",
        price: "14.95"
      },
      {
        type: "Drinks",
        name: "Soda",
        descrption: "Coke and Pepsi Products",
        img: "assets/images/project/04.jpg",
        price: "2.00"
      },
      {
        type: "Drinks",
        name: "Iced Tea",
        descrption: "",
        img: "assets/images/project/04.jpg",
        price: "2.00"
      },
      {
        type: "Drinks",
        name: "Black Tea ",
        descrption: "",
        img: "assets/images/project/04.jpg",
        price: "3.00"
      },
      {
        type: "Drinks",
        name: "Lemonade",
        descrption: "In house lemonade with fresh mint ",
        img: "assets/images/project/04.jpg",
        price: "4.00"
      },
      {
        type: "Drinks",
        name: "Pomegranate Juice",
        descrption: "",
        img: "assets/images/project/04.jpg",
        price: "4.00"
      },
      {
        type: "Drinks",
        name: "Leban (Ayran)",
        descrption: " ",
        img: "assets/images/project/04.jpg",
        price: "4.00"
      }
    ]
  }

  setActiveMenu(item: ImenuBtnFilters) {
    console.log(item)
    this.menuFilter = this.menuFilter.map((i: ImenuBtnFilters) => {
      i.isActive = i.type === item.type
      return i;
    })
    this.updateMenu()
  }

  updateMenu() {
    const activeMenuFilter = this.menuFilter.find((i) => i.isActive === true)
    if (activeMenuFilter?.type === "All") {
      this.displayMenu = this.menuItems
    } else {
      this.displayMenu = this.menuItems.filter((i) => i.type === activeMenuFilter?.type)
    }
  }

  setSelectedItem(item: ImenuItem) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
  }

}
