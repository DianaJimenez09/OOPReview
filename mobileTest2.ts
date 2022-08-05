import { Mobile } from "./Mobile";

let Nokia3210 = new Mobile(
  "Nokia 3210",
  "3210",
  "Nokia Corporation",
  "sin SD",
  "negro",
  false,
  0,
  80
);

let iPhone3G = new Mobile(
  "Iphone 3G",
  "Iphone 3G",
  "Apple",
  "sin SD",
  "blanco",
  false,
  1,
  300
);

let SamsungGalaxy10 = new Mobile(
  "Samsung Galaxy10",
  "GalaxyS10",
  "Samsung",
  "micro SD",
  "azul",
  true,
  3,
  400
);

let arrayMobile = [Nokia3210, iPhone3G, SamsungGalaxy10];

Nokia3210.setIs5G(true);
Nokia3210.setCameraNumber(4);

arrayMobile[0].imprimirCharacter();
arrayMobile[1].imprimirCharacter();
arrayMobile[2].imprimirCharacter();
