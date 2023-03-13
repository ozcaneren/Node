//burada bloklanir ve calismaz
/*
const fs = require('fs'); //fs modulunu cagiriyoruz
const data = fs.readFileSync('/file.md'); //burada kod senkron calisarak sonraki kodlari blokluyor
console.log(data);
moreWork();
*/

//burada okunmasi zorunlu degildir ve bloklamaz
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  console.log(data);
});
moreWork()
