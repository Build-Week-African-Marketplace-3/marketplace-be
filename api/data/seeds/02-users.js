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
    ])
  }