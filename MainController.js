app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name:"Brushcetta",
      description:"Grilled bread garlic, tomatoes, olive oil.",
      Price:4.95
    }
  ];
  $scope.mains=[
    {
      name:"The Meats",
      description:"Pepperoni, sausage, beef, bacon and Canadian bacon.",
      price:8.00
    },
    {
      name:"Spicy Italian",
      description:"Pepperoni plus a double portion of spicy Italian sausage.",
      price:8.95
    },
    {
      name:"BBQ Chicken Bacon",
      description:"BBQ sauce topped with all-white chicken, bacon and onions.",
      price:9.75
    }
  ];
  $scope.extras=[
    {
      name:"wings",
      description:"Oven-baked, unsauced and irresistibly tasty and tender",
      price:8.00
    },{
      name:"chicken poppers",
      description:"All-white chicken breast pieces breaded and oven-baked",
      price:7.45
    },{
      name:"cheese sticks",
      description:"Fresh dough covered in garlic sauce and topped with mozzarella",
      price:4.75
    }
  ];

}]);