//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) 
{
  letters = /^[A-Za-zа-яА-Я]+$/;
  for(i=0;i<str.length;i++)
  {
    if(str[i].match(letters) && (i==0 || !str[i-1].match(letters)))
    {
      str=str.substr(0, i) + str[i].toUpperCase() + str.substr(i+1);
    }
  }
  return str
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) 
{
  if(n>str.length)
    return str;
  else
    return str.substr(0,n)+"...";
}

//Определите, пуст ли объект
function isEmpty(obj) 
{
  if(Object.keys(obj).length===0)
    return true;
  else
    return false;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) 
{
  keys=Object.keys(obj)
  for(i=0;i<keys.length;i++)
  {
    if(typeof obj[keys[i]] =="number")
    {
      obj[keys[i]]*=2;
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) 
{
  sum=0
  for(i=0;i<arr.length;i++)
  {
    sum+=arr[i]
  }
  return sum
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) 
{
  for(i=0;i<str.length/2;i++)
  {
    if(str[i]!=str[str.length-(i+1)])
    {
      return false;
    }
  }
  return true;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
console.log(capitalize("привет"))