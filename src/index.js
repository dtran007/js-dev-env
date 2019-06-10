import {getUsers} from './api/userApi';

import numeral from 'numeral';

//Populate table of users via API call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});


const percentValue = numeral(1).format('%0,0.00');
console.log(`Money can be gained. Value is priceless. ${percentValue}!`); //eslint-disable-line no-console
