const fs = require('fs');

//dosya okuma => file read
fs.readFile('password.txt', 'utf-8', (err, data) =>{
  if (err) console.log(err); //error check
  console.log(data);
})

//dosya yazma => file write
fs.writeFile('example.json', '{"name": "Arin", "age": 6}', 'utf-8', (err) => {
  if (err) console.log(err);
});

//dosyaya veri ekleme => append data to file
fs.appendFile('example.txt', '\n NEW TEXT', 'utf-8', (err) =>{
  if (err) console.log(err);
})

//dosya silme => delete file
fs.unlink('example.json', (err) => {
  if (err) console.log(err);
});

//klasor olusturma => make directory
fs.mkdir('uploads/img', { recursive: true }, (err) => {
  if (err) console.log(err);
})

//klasor silmek => remove directory
fs.rmdir('uploads', { recursive: true }, (err) => {
  if (err) console.log(err);
})