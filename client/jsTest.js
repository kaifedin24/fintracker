  //Emulating the fetched Data
  let tags = [
    {
      uid: "dsakj",
      name: "Groceries",
      count: 33,
      tags: ["REWE", "Edeka"]
    },
    {
      uid: "dasbhidaslkjbh",
      name: "Eating Out",
      count: 6,
      tags: ["McDonalds", ""]
    }
  ];

  console.log(tags.sort((a, b) => a.name.localeCompare(b.localeCompare)));