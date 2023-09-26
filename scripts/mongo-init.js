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

db.customers.insertOne({
  name: 'Igor Gomes',
  email: 'igor.gomes@dummy.mail',
})
