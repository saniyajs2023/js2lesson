let usd = prompt();
let currency = prompt();

if (currency === 'eur'){
    alert(usd);
} else if (currency === 'uan') {
    alert(+usd / 36,96);
} else if(currency === 'azn')  {
    alert(+usd / 1,70);
} else {
    alert('error');
}