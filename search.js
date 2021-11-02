import Fuse from 'fuse.js'

const dishes = [
    {
      "dish": "Bertie Bott's Beans",
      "chef": "Bertie Bott",
      "flavor": "Spinach"
    },
    {
      "dish": "Pumpkin Pasty",
      "chef": "Trolley Witch",
      "flavor": "Pumpkiny"
    },
    {
      "dish": "Butterbeer",
      "chef": "Madam Rosmerta",
      "flavor": "Fizzy Soda"
    },
    {
      "dish": "Szechuan noodles",
      "chef": "Muggle Malfoy",
      "flavor": "Spicy"
    },
  ]

  const options = {
    keys: [
      "dish",
      "chef"
    ]
  };
  
  const fuse = new Fuse(dishes, options);

  fuse.search("Schezwan")
