/*
//Async
const func = async () => {
  return 10 // buradaki 10 return promise.resolve(10) ile aynı.
}

func().then(console.log) //sonucu yakalamak icin .then yapisi kullanilir.

//Await
const func1 = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });

  let result = await promise; // burada await ile promise'in resolve edilmesi beklenir.

  console.log(result); // "done!"
}

func1();

//Async/Await ile Promise Kullanımı

function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("veriler aliniyor...");

    if (data) {
      resolve('veriler alindi');
    } else {
      reject('veriler alinamadi')
    }
  });
}

async function processData() {
  try {//hata yakalamak icin try
    const receivedData = await getData(true); //await verilerin alindigindan emin oluyor.
    console.log(receivedData);
    const cleanedData = await cleanedData(false);
    console.log(cleanedData); //await verilerin temizlendiginden emin oluyor.    
  } catch (error) {
    console.log(error);
  }
}

processData();
*/

const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showBooks() {
  try {
    await addBook({ name: "Kitap 4", author: "Yazar 4" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();