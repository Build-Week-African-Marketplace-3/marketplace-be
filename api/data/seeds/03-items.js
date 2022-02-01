exports.seed = function (knex) {
    return knex('items').insert([
        {
          name: 'banana',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tozmE-OJSJJ_-fP626Y0twHaEx%26pid%3DApi&f=1',
          price: '.50',
          description: 'Yellow fruit',
          user_id:1
        },
        {
            name: 'apple',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3GiubCPblSLH5mJgfGQMqAHaEK%26pid%3DApi&f=1',
            price: '.30',
            description: 'Red fruit',
            user_id:1
        },
        {
            name: 'Spinach',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JBg37HlFegWHcT6tHw6FaAHaD4%26pid%3DApi&f=1',
            price: '2.00',
            description: 'Green Veggie',
            user_id:2
        },
        {
            name: 'Ginger',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5M_q1wAgVgSrMplExJoiAQHaE7%26pid%3DApi&f=1',
            price: '1.00',
            description: 'Plant Medicene',
            user_id:3
        }
      ])
}