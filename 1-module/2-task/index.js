/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
   if (name != null && name.length >= 4 && name.indexOf(' ') < 0) {
    return true;
   }

   return false

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    return print(`Welcome back, ${userName}!`);
  } else {
    return print('Некорректное имя');
  }
}
