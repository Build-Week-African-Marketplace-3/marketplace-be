exports.seed = function (knex) {
    return knex('users').insert([
      {
        name: "Jonathon",
        username: "jax",
        password: "123",
        location: "Miami"
      },
      {
        name: "Nathan",
        username: "max",
        password: "123",
        location: "Utah"
      },
      {
        name: "Leo",
        username: "fax",
        password: "123",
        location: "Kansas City"
      },
      {
        name: "Douglas",
        username: "doug",
        password: "123",
        location: "New York"
      },
      {
        name: 'Ant',
        username: 'ant',
        password: '$2a$08$Ql83K5roQWYSeXdBvHNhDeW3k87ls2Yk6dHx9Pz8a60j0s4uZyuli',
        location: 'Miami'
      }
    ])
  }