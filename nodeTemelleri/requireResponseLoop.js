/*Sunucular ile istemciler arasındaki iletişimin bazı kuralları vardır, yani biz bir sunucuya merhaba şeklinde seslenemeyiz.
Örneğin biz http://developer.mozilla.org/ adresine bir istek göndermek istersek, kullanabileceğimiz format aşağıdaki gibi olabilir.
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: tr
Yukarıdaki isteğimizin metodu dikkat ederseniz "GET" şeklindedir, yani sayfa içeriğini görmek istiyoruz.
En çok kullanılan HTTP metodları "GET" ve "POST" tur. Örneğin biz bir iletişim formu doldurup, formu gönderdiğimizde POST metodu kullanıyoruz.
*/