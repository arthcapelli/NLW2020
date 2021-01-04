const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db=>{
  await saveOrphanage (db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "98745681",
    images: ["https://images.unsplash.com/photo-1597687851795-3ce0be4c874f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"

    ].toString(),
    instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h.",
    open_on_weekends: "0",

  })
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage)

  // await db.run("DELETE FROM orphanages WHERE id = '4'")
  // await db.run("DELETE FROM orphanages WHERE id = '5'")
})