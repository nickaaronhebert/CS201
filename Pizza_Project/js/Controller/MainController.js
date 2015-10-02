app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
      ingredients: "Tomatoes, Olive Oil" 
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
      ingredients: "Tomatoes, Olive Oil"
    }, 
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95,
      ingredients: "Tomatoes, Olive Oil"
    }
  ];

    $scope.mains = [
      {
        name: 'Fetucinni Alfredo',
        description: 'Awesome homemade fetucinni sauce servered with delicious noodles',
        price: 10.95
      },
      {
        name: 'Fetucinni Alfredo',
        description: 'Awesome homemade fetucinni sauce servered with delicious noodles',
        price: 10.95
      },
      {
        name: 'Fetucinni Alfredo',
        description: 'Awesome homemade fetucinni sauce servered with delicious noodles',
        price: 10.95
      }
      ];
      
          $scope.desserts = [
      {
        name: 'Gelatto',
        description: 'Delicious Icecream',
        price: 4.95
      },
      {
        name: 'Gelatto',
        description: 'Delicious Icecream',
        price: 4.95
      },
      {
        name: 'Gelatto',
        description: 'Delicious Icecream',
        price: 4.95
      }
      ];
}]);
