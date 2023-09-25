db.createUser({
  user: 'user',
  pwd: 'userpwd',
  roles: [
    {
      role: 'readWrite',
      db: 'bmw',
    },
  ],
})

db.orders.insertMany([
  {
    car: 'X6',
    user: 'email@email.com',
  },
  {
    car: 'X4',
    user: 'email@email.com',
  },
  {
    car: 'M5',
    user: 'email@email.com',
  },
])
