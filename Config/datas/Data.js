const Post1= {
    id: 1,
    createdAt: "20 m ",
    user: {
      id: 11,
      name: "John Smith",
      image: require('../../assets/images/profile.jpg'),
      oneKilo: 5.50,
      KilosRemaining: 25,
  
    },
    
    from: {
      country: "United States",
      city: "New York"
    },
    to: {
      country: "France",
      city: "Paris"
    },
    departureDate: {
      day: 24,
      month: "May",
      year: 2023
    }
  }
  const Post2= {
    id: 2,
    createdAt: "30 m ",
    user: {
      id: 12,
      name: "Duke Fred",
      image: require('../../assets/images/duke1.jpg'),
      oneKilo: 5.50,
      KilosRemaining: 15,
  
    },
    
    from: {
      country: "Morocco",
      city: "Casablanca",
      flag: require('../../assets/images/Flag_of_Morocco.png')
    },
    to: {
      country: "Rwanda",
      city: "Kigali",
      flag: require('../../assets/images/Flag_of_Rwanda.png')
    },
    departureDate: {
      day: 28,
      month: "May",
      year: 2023
    }
  }
  const Post3= {
    id: 3,
    createdAt: "40 m ",
    user: {
      id: 123,
      name: "Elvis Smith",
      image: require('../../assets/images/lebron.jpg'),
      oneKilo: 5.50,
      KilosRemaining: 45,
  
    },
    
    from: {
      country: "Germany",
      city: "Berlin",
      flag: require('../../assets/images/Flag_of_Germany.png')
    },
    to: {
      country: "Tanzania",
      city: "Dar es Salaam",
      flag: require('../../assets/images/Flag_of_Tanzania.png')
    },
    departureDate: {
      day: 14,
      month: "Apr",
      year: 2023
    }
  }
  
  const recipients = [
    {
      id: 1,
      name: 'Recipient 1',
      address: '123 Main St.',
    },
    {
      id: 2,
      name: 'Recipient 2',
      address: '456 Market St.',
    },
    
  ];