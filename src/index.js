const inquirer = require('inquirer');
/*
inquirer.prompt([{
    name: 'color',
    message: 'what is your favorite color?',
    default: 'red'
}, {
    name: 'Website',
    message: 'what is your favorite Website?',
}])




inquirer.prompt ({
    type: 'list', 
    name: 'colores',
    message: 'Tu Color Favorito',
    choices: ['red', 'blue', 'green']
})




inquirer.prompt ({
    type: 'expand', 
    name: 'colores',
    message: 'Tu Color Favorito',
    choices: [
        {
          key:  'a',
          value: 'red'  
        },
        {
            key: 'c',
            value: 'blue'
        }

    ]
})
 */


inquirer.prompt ({
    type: 'checkbox', 
    name: 'colores',
    message: 'Tu Color Favorito',
    choices: [
        'red',
        'blue',
        'green'
    ]
})