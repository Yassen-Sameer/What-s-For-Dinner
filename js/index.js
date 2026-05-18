var meals = [
  {
    tags: ["Easy", "American"],
    img: "./imgs/imgi_2_photo-1568901346375-23c9450c58cd.jfif",
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Season patties generously with salt and pepper on both sides.",
    ],
    nutrition: {
      calories: 650,
      protein: 38,
      carbohydrates: 42,
      fat: 35,
      fiber: 2,
      sodium: 920,
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
    rating: {
      rate: 4.6,
      reviews: 421,
    },
    information: {
      prepTime: 15,
      cookTime: 20,
      servings: 4,
    },
  },
  {
    tags: ["Easy", "Italian"],
    img: "./imgs/imgi_2_photo-1509722747041-616f39b57569.jfif",
    name: "Caprese Sandwich",
    description:
      "Fresh and simple Italian sandwich with mozzarella, tomato, and basil",
    ingredients: [
      "2 ciabatta rolls",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "2 tbsp extra virgin olive oil",
      "1 tbsp balsamic glaze",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Slice ciabatta rolls in half and drizzle with olive oil.",
      "Layer mozzarella slices on the bottom half of each roll.",
      "Add tomato slices on top of the mozzarella.",
      "Place fresh basil leaves over the tomatoes.",
      "Drizzle with balsamic glaze and season with salt and pepper.",
      "Close the sandwich, press lightly, and serve immediately.",
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      carbohydrates: 38,
      fat: 22,
      fiber: 3,
      sodium: 580,
    },
    tips: [
      "Use fresh buffalo mozzarella for best flavor",
      "Serve immediately to avoid soggy bread",
      "Add pesto for extra flavor",
      "Toast the ciabatta lightly for better texture",
    ],
    rating: {
      rate: 4.4,
      reviews: 210,
    },
    information: {
      prepTime: 10,
      cookTime: 70,
      servings: 2,
    },
  },
  {
    tags: ["Medium", "Mexican"],
    name: "Beef Tacos",
    img: "./imgs/imgi_2_photo-1565299585323-38d6b0865b47.jfif",
    description:
      "Crispy tacos filled with seasoned ground beef and fresh toppings",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp taco seasoning",
      "1 cup shredded cheddar cheese",
      "1 cup shredded lettuce",
      "2 tomatoes, diced",
      "Sour cream and salsa to serve",
    ],
    instructions: [
      "Heat oil in a pan over medium heat and sauté onion until soft.",
      "Add garlic and cook for 1 minute until fragrant.",
      "Add ground beef and cook until browned, breaking it apart.",
      "Stir in taco seasoning and 1/4 cup water, simmer for 5 minutes.",
      "Warm taco shells in the oven for 3 minutes.",
      "Fill shells with beef mixture and top with cheese, lettuce, tomato, sour cream, and salsa.",
    ],
    nutrition: {
      calories: 520,
      protein: 32,
      carbohydrates: 35,
      fat: 28,
      fiber: 4,
      sodium: 740,
    },
    tips: [
      "Use hard and soft shells together for variety",
      "Make your own taco seasoning for better flavor",
      "Drain excess fat after browning the beef",
      "Warm shells just before serving to keep them crispy",
    ],
    rating: {
      rate: 4.7,
      reviews: 389,
    },
    information: {
      prepTime: 15,
      cookTime: 20,
      servings: 4,
    },
  },
  {
    tags: ["Medium", "Thai"],
    name: "Thai Green Curry",
    img: "./imgs/imgi_2_photo-1455619452474-d2be8b1e70cd.jfif",
    description:
      "Aromatic and creamy Thai curry with vegetables and coconut milk",
    ingredients: [
      "500g chicken breast, sliced",
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "1 zucchini, sliced",
      "1 cup green beans",
      "1 red bell pepper, sliced",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "Fresh Thai basil leaves",
      "Steamed jasmine rice to serve",
    ],
    instructions: [
      "Heat 2 tbsp of coconut milk in a wok over medium-high heat.",
      "Add green curry paste and cook for 2 minutes until fragrant.",
      "Add chicken and cook until no longer pink.",
      "Pour in remaining coconut milk and bring to a simmer.",
      "Add vegetables and cook for 5-7 minutes until tender.",
      "Season with fish sauce and brown sugar, top with Thai basil and serve over rice.",
    ],
    nutrition: {
      calories: 480,
      protein: 35,
      carbohydrates: 28,
      fat: 26,
      fiber: 4,
      sodium: 860,
    },
    tips: [
      "Use full-fat coconut milk for a creamier curry",
      "Adjust curry paste amount to control spice level",
      "Don't overcook vegetables to keep them vibrant",
      "Add a squeeze of lime juice before serving",
    ],
    rating: {
      rate: 4.8,
      reviews: 504,
    },
    information: {
      prepTime: 15,
      cookTime: 25,
      servings: 4,
    },
  },
  {
    tags: ["Hard", "French"],
    name: "French Onion Soup",
    img: "./imgs/imgi_2_photo-1547592166-23ac45744acd.jfif",
    description:
      "Classic French soup with caramelized onions and a golden cheesy crust",
    ingredients: [
      "6 large onions, thinly sliced",
      "4 tbsp butter",
      "1 tbsp olive oil",
      "1 tsp sugar",
      "1 cup dry white wine",
      "1.5L beef broth",
      "4 slices baguette, toasted",
      "200g Gruyère cheese, grated",
      "Salt and pepper to taste",
      "Fresh thyme",
    ],
    instructions: [
      "Melt butter with olive oil in a large pot over medium heat.",
      "Add onions and sugar, cook for 40-50 minutes stirring occasionally until deeply caramelized.",
      "Add wine and cook for 5 minutes until reduced.",
      "Pour in beef broth and thyme, simmer for 20 minutes.",
      "Season with salt and pepper.",
      "Ladle soup into oven-safe bowls, top with baguette slices and Gruyère, then broil until golden and bubbly.",
    ],
    nutrition: {
      calories: 380,
      protein: 16,
      carbohydrates: 34,
      fat: 19,
      fiber: 3,
      sodium: 1020,
    },
    tips: [
      "Take time caramelizing onions — don't rush this step",
      "Use a mix of beef and chicken broth for depth",
      "Gruyère is traditional but Swiss cheese works too",
      "Use oven-safe bowls for the broiling step",
    ],
    rating: {
      rate: 4.6,
      reviews: 317,
    },
    information: {
      prepTime: 20,
      cookTime: 75,
      servings: 4,
    },
  },
  {
    tags: ["Hard", "Italian"],
    name: "Lasagna Bolognese",
    img: "./imgs/imgi_2_photo-1574894709920-11b28e7367e3.jfif",
    description:
      "Classic Italian lasagna with rich meat sauce and creamy béchamel",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned crushed tomatoes",
      "1 onion, diced & 2 cloves garlic, minced",
      "2 tbsp tomato paste",
      "500ml béchamel sauce",
      "200g mozzarella & 50g Parmesan, grated",
      "Salt, pepper, and Italian seasoning",
    ],
    instructions: [
      "Sauté onion and garlic in olive oil until soft.",
      "Add ground beef and cook until browned.",
      "Stir in tomato paste, crushed tomatoes, and seasoning. Simmer for 20 minutes.",
      "Cook lasagna sheets according to package instructions.",
      "Layer in a baking dish: meat sauce, lasagna sheets, béchamel. Repeat layers.",
      "Top with mozzarella and Parmesan, bake at 180°C for 35-40 minutes until golden.",
    ],
    nutrition: {
      calories: 620,
      protein: 36,
      carbohydrates: 52,
      fat: 28,
      fiber: 4,
      sodium: 890,
    },
    tips: [
      "Let lasagna rest 15 minutes before cutting",
      "Make béchamel from scratch for best results",
      "Use no-boil lasagna sheets to save time",
      "Cover with foil first 20 minutes to prevent drying",
    ],
    rating: {
      rate: 4.9,
      reviews: 612,
    },
    information: {
      prepTime: 30,
      cookTime: 60,
      servings: 6,
    },
  },
  {
    tags: ["Hard", "Greek"],
    name: "Greek Moussaka",
    img: "./imgs/imgi_2_photo-1601050690597-df0568f70950.jpg",
    description:
      "Traditional Greek casserole with eggplant, spiced meat, and creamy béchamel",
    ingredients: [
      "2 large eggplants, sliced",
      "500g ground lamb or beef",
      "1 onion, diced & 2 cloves garlic, minced",
      "400g canned tomatoes",
      "1 tsp cinnamon & 1 tsp allspice",
      "500ml béchamel sauce & 2 eggs, beaten",
      "50g Parmesan, grated",
      "Olive oil, salt, and pepper",
    ],
    instructions: [
      "Salt eggplant slices and let sit 30 minutes, then rinse and pat dry.",
      "Fry or roast eggplant slices in olive oil until golden. Set aside.",
      "Sauté onion and garlic, add meat and cook until browned.",
      "Add tomatoes, cinnamon, and allspice. Simmer for 20 minutes.",
      "Mix beaten eggs into béchamel sauce.",
      "Layer eggplant then meat sauce in a baking dish, top with béchamel, sprinkle Parmesan, and bake at 180°C for 40 minutes.",
    ],
    nutrition: {
      calories: 540,
      protein: 30,
      carbohydrates: 30,
      fat: 32,
      fiber: 6,
      sodium: 780,
    },
    tips: [
      "Salting eggplant removes bitterness — don't skip this",
      "Ground lamb gives more authentic flavor than beef",
      "Let moussaka cool 20 minutes before serving",
      "Moussaka tastes even better the next day",
    ],
    rating: {
      rate: 4.7,
      reviews: 278,
    },
    information: {
      prepTime: 90,
      cookTime: 60,
      servings: 6,
    },
  },
];

var mealContainer = document.getElementById("container");
var randomIndex = Math.floor(Math.random() * meals.length);
var warning = ``;

function gitMeal() {
  var meal = `        <div class="row">
          <div class="col-12 col-lg-5 ">
            <div class="img position-relative h-100">
              <img
                src="${meals[randomIndex].img}"
                class="object-fit-cover w-100 h-100"
                alt="food"
              />
              <div
                class="top bg-white rounded-pill py-2 px-3 position-absolute d-flex"
              >
                <div class="icon me-2">
                  <i class="fa-solid fa-star text-warning"></i>
                </div>
                <div class="text">
                  <span class="fw-bold me-2">${meals[randomIndex].rating.rate}</span
                  ><span class="fs-12px text-secondary fw-medium"
                    >(${meals[randomIndex].rating.reviews} reviews)</span
                  >
                </div>
              </div>
              <div
                class="bottom position-absolute rounded-4 p-3 d-flex justify-content-around gap-lg-5 bg-white"
              >
                <div class="text-center">
                  <i class="fa-solid fa-clock text-main fs-4"></i>
                  <p class="m-0 text-secondary fs-12px fw-medium">Prep Time</p>
                  <span class="fw-bolder">${meals[randomIndex].information.prepTime} min</span>
                </div>
                <div class="text-center">
                  <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
                  <p class="m-0 text-secondary fs-12px fw-medium">Cook Time</p>
                  <span class="fw-bolder">${meals[randomIndex].information.cookTime} min</span>
                </div>
                <div class="text-center">
                  <i class="fa-solid fa-people-group text-primary fs-4"></i>
                  <p class="m-0 text-secondary fs-12px fw-medium">Servings</p>
                  <span class="fw-bolder">${meals[randomIndex].information.servings} people</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 h-100">
            <div class="content overflow-y-auto p-4">
              <div class="header d-flex justify-content-between align-items-center">
                <div class="name">
                  <div class="words my-3">
                    <span class="rounded-pill py-2 px-3 fs-12px fw-bold"
                      >${meals[randomIndex].tags[0]}</span
                    >
                    <span class="rounded-pill py-2 px-3 fs-12px fw-bold"
                      >${meals[randomIndex].tags[1]}</span
                    >
                  </div>
                  <h2 class="h3 fw-bold">${meals[randomIndex].name}</h2>
                  <p class="text-secondary fw-medium">
                    ${meals[randomIndex].description}
                  </p>
                </div>
                <div class="save d-flex gap-2 justify-content-end">
                  <span class="center rounded-2 text-main "
                    ><i class="fa-solid fa-bookmark"></i
                  ></span>
                  <span class="center rounded-2 text-main"
                    ><i class="fa-solid fa-share-nodes"></i
                  ></span>
                </div>
              </div>
              <div
                class="information d-flex align-items-center gap-4 flex-column mt-4"
              >
              ${warning}
                <ul class="nav nav-underline text-secondary justify-content-center">
                  <li class="nav-item ">
                    <a
                      class="nav-link text-secondary active fw-medium fs-12px"
                      data-bs-toggle="tab"
                      data-bs-target="#Ingredients"
                      href="#"
                    >
                      <i class="fa-solid fa-list-check me-1"></i>Ingredients
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-secondary fw-medium fs-12px"
                      data-bs-toggle="tab"
                      data-bs-target="#Instructions"
                      href="#"
                    >
                      <i class="fa-solid fa-book me-1"></i>Instructions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-secondary fw-medium fs-12px"
                      data-bs-toggle="tab"
                      data-bs-target="#Nutrition"
                      href="#"
                    >
                      <i class="fa-solid fa-chart-pie me-1"></i>Nutrition
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-secondary fw-medium fs-12px"
                      data-bs-toggle="tab"
                      data-bs-target="#Tips"
                      href="#"
                    >
                      <i class="fa-solid fa-lightbulb me-1"></i>Chef's Tips
                    </a>
                  </li>
                </ul>
                <div class="tab-content w-100">
                  <div class="tab-pane fade show active" id="Ingredients">
                    <div class="ingredients  overflow-y-auto bg-main rounded-4 w-100 p-4">
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >1</span
                        >
                        ${meals[randomIndex].ingredients[0]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >2</span
                        >
                        ${meals[randomIndex].ingredients[1]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >3</span
                        >
                        ${meals[randomIndex].ingredients[2]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >4</span
                        >
                        ${meals[randomIndex].ingredients[3]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >5</span
                        >
                        ${meals[randomIndex].ingredients[4]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >6</span
                        >
                        ${meals[randomIndex].ingredients[5]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >7</span
                        >
                        ${meals[randomIndex].ingredients[6]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 align-items-center mb-3 fw-medium"
                      >
                        <span class="rounded-circle text-white center fw-bold"
                          >8</span
                        >
                        ${meals[randomIndex].ingredients[7]}
                      </p>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="Instructions">
                    <div class="instructions  overflow-y-auto">
                      <p
                        class="text-secondary d-flex gap-3  mb-3 fw-medium"
                      >
                        <span class="rounded-4 text-white center p-4 fw-bold "
                          >1</span
                        >

                         ${meals[randomIndex].instructions[0]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 mb-3 fw-medium"
                      >
                        <span class="rounded-4 text-white center p-4 fw-bold"
                          >2</span
                        >

                        ${meals[randomIndex].instructions[1]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 mb-3 fw-medium"
                      >
                        <span class="rounded-4 text-white center p-4 fw-bold"
                          >3</span
                        >

                       ${meals[randomIndex].instructions[2]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 mb-3 fw-medium"
                      >
                        <span class="rounded-4 text-white center p-4 fw-bold"
                          >4</span
                        >

                        ${meals[randomIndex].instructions[3]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3 mb-3 fw-medium"
                      >
                        <span class="rounded-4 text-white center p-4 fw-bold"
                          >5</span
                        >

                        ${meals[randomIndex].instructions[4]}
                      </p>
                      <p
                        class="text-secondary d-flex gap-3  mb-3 fw-medium"
                      >
                        <span class="rounded-4 text-white center p-4 fw-bold"
                          >6</span
                        >

                        ${meals[randomIndex].instructions[5]}
                      </p>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="Nutrition">
                    <div class="nutrition d-flex overflow-y-auto flex-column flex-lg-row flex-lg-wrap justify-content-lg-around">
                      <div
                        class="nutrition-card mb-3 rounded-4 border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div class="head d-flex align-items-center gap-3">
                          <span class="icon center text-main rounded-4"
                            ><i class="fa-solid fa-fire"></i
                          ></span>
                          <span class="fw-medium text-secondary">Calories</span>
                        </div>
                        <div class="text-black fw-bolder">${meals[randomIndex].nutrition.calories} kcal</div>
                      </div>
                      <div
                        class="nutrition-card mb-3 rounded-4 border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div class="head d-flex align-items-center gap-3">
                          <span
                            class="protein-icon icon center text-main rounded-4"
                            ><i class="fa-solid fa-dumbbell"></i
                          ></span>
                          <span class="fw-medium text-secondary">Protein</span>
                        </div>
                        <div class="text-black fw-bolder">${meals[randomIndex].nutrition.protein}g</div>
                      </div>
                      <div
                        class="nutrition-card mb-3 rounded-4 border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div class="head d-flex align-items-center gap-3">
                          <span
                            class="carbohydrates-icon icon center text-main rounded-4"
                            ><i class="fa-solid fa-wheat-awn"></i
                          ></span>
                          <span class="fw-medium text-secondary"
                            >Carbohydrates</span
                          >
                        </div>
                        <div class="text-black fw-bolder">${meals[randomIndex].nutrition.carbohydrates}g</div>
                      </div>
                      <div
                        class="nutrition-card mb-3 rounded-4 border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div class="head d-flex align-items-center gap-3">
                          <span class="fat-icon icon center text-main rounded-4"
                            ><i class="fa-solid fa-droplet"></i
                          ></span>
                          <span class="fw-medium text-secondary">Fat</span>
                        </div>
                        <div class="text-black fw-bolder">${meals[randomIndex].nutrition.fat}g</div>
                      </div>
                      <div
                        class="nutrition-card mb-3 rounded-4 border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div class="head d-flex align-items-center gap-3">
                          <span
                            class="fiber-icon icon center text-main rounded-4"
                            ><i class="fa-brands fa-pagelines"></i
                          ></span>
                          <span class="fw-medium text-secondary">Fiber</span>
                        </div>
                        <div class="text-black fw-bolder">${meals[randomIndex].nutrition.fiber}g</div>
                      </div>
                      <div
                        class="nutrition-card mb-3 rounded-4 border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div class="head d-flex align-items-center gap-3">
                          <span
                            class="sodium-icon icon center text-main rounded-4"
                            ><i class="fa-solid fa-cube"></i
                          ></span>
                          <span class="fw-medium text-secondary">Sodium</span>
                        </div>
                        <div class="text-black fw-bolder">${meals[randomIndex].nutrition.sodium}mg</div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade " id="Tips">
                    <div class="tips overflow-y-auto">
                      <div class="tips-card p-3 rounded-4 d-flex gap-2 mb-3">
                        <i class="fa-solid fa-circle-check fs-4 mt-1"></i>
                        <p class="text-secondary fw-medium m-0">
                          ${meals[randomIndex].tips[0]}
                        </p>
                      </div>
                      <div class="tips-card p-3 rounded-4 d-flex gap-2 mb-3">
                        <i class="fa-solid fa-circle-check fs-4 mt-1"></i>
                        <p class="text-secondary fw-medium m-0">
                          ${meals[randomIndex].tips[1]}
                        </p>
                      </div>
                      <div class="tips-card p-3 rounded-4 d-flex gap-2 mb-3">
                        <i class="fa-solid fa-circle-check fs-4 mt-1"></i>
                        <p class="text-secondary fw-medium m-0">
                          ${meals[randomIndex].tips[2]}
                        </p>
                      </div>
                      <div class="tips-card p-3 rounded-4 d-flex gap-2">
                        <i class="fa-solid fa-circle-check fs-4 mt-1"></i>
                        <p class="text-secondary fw-medium m-0">
                          ${meals[randomIndex].tips[3]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button onclick="display()" class="btn btn-lg fs-6 fw-bold text-white mt-4"><i class="fa-solid fa-arrows-rotate me-1"></i>Try Another Recipe</button>
            </div>
          </div>
        </div>`;
  return meal;
}

var oldIndex = -1;



var oldIndex = -1;

function display() {
  do {
    randomIndex = Math.floor(Math.random() * meals.length);
  } while (randomIndex === oldIndex);

  oldIndex = randomIndex;

  if (meals[randomIndex].information.cookTime > 45) {
    warning = `
    <div class="warning d-flex gap-4 rounded-4 p-3">
      <div class="icon mt-2 h5"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <div class="text">
        <p class="fw-bold fs-12px m-0 text-danger">Extended Preparation Time</p>
        <p class="fs-12px">
          This recipe requires more than 45 minutes to prepare. Plan
          accordingly!
        </p>
      </div>
    </div>`;
  } else {
    warning = ``;
  }

  mealContainer.innerHTML = gitMeal();
}
display();
