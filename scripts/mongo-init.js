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
