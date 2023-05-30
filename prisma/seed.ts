import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const placesData: Prisma.PlaceCreateInput[] = [
  {
    name: 'Sophia Square',
    description:
      "Sophia Square or Sofia Square is a square in the center of Old Kyiv, Ukraine. Located in the Shevchenkivskyi District of Kyiv, the square lies in front of Saint Sophia Cathedral, is bordered by Volodymyrska Street, and features a monument of Bohdan Khmelnytsky. The city's Christmas and New Year's festivities have been held in this square since 2014, after they were moved from Maidan Nezalezhnosti due to the events of Euromaidan.",
    latitude: 50.45356897596888,
    longitude: 30.516054925927317,
  },
  {
    name: 'Golden Gate',
    description:
      'The Golden Gate of Kyiv was the main gate in the 11th century fortifications of Kiev (today Kyiv), the capital of Kievan Rus\'. It was named in imitation of the Golden Gate of Constantinople. The structure was dismantled in the Middle Ages, leaving few vestiges of its existence. It was rebuilt completely by the Soviet authorities in 1982, though no images of the original gates have survived. The decision has been immensely controversial because there were many competing reconstructions of what the original gate might have looked like.[1] The rebuilt structure on the corner of Volodymyr street and Yaroslaviv Val Street contains a branch of the National Sanctuary "Sophia of Kyiv" museum. The name Zoloti Vorota is also used for a nearby theater and the Zoloti Vorota station of the Kyiv Metro.',
    latitude: 50.44904658130352,
    longitude: 30.513458547531577,
  },
  {
    name: 'Maidan Nezalezhnosti',
    description:
      'Maidan Nezalezhnosti ("Independence Square") is the central square of Kyiv, the capital city of Ukraine. One of the city\'s main squares, it is located on Khreshchatyk Street in the Shevchenko Raion. The square has been known under many different names, but often it is called by people simply Maidan ("square"). The square contains the iconic Independence Monument. In the 19th century, the square contained buildings of the city council and noble assembly. Since the start of Ukraine\'s independence movement in 1990, the square has been the traditional place for political rallies, including four large-scale radical protest campaigns: the 1990 student Revolution on Granite, the 2001 Ukraine without Kuchma, the 2004 Orange Revolution and the 2013–14 Euromaidan. Maidan is also a regular site for non-political displays and events; however, since 2014, most of them were moved to Sofiyivska Square or elsewhere, because making entertainment on a place where people were killed during Euromaidan was considered inappropriate. Most notably, Christmas Fairs and New Year celebrations were moved to Sofiyivska Square.',
    latitude: 50.44840439348857,
    longitude: 30.524981317590488,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of placesData) {
    const place = await prisma.place.create({
      data: p,
    });
    console.log(`Created place with id: ${place.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
