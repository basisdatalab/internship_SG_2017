# Tugas Terakhir Internship SG 2017

**Deadline: Selasa, 2 Mei 2017**

Teman-teman mendapat tugas individu untuk membuat satu web project dengan ketentuan/spesifikasi dibawah:

###### Bisnis Proses
> Aplikasi web ini digunakan untuk melakukan pendaftaran dan melihat hasil pendaftaran yang telah dilakukan. Hasil pendaftaran mahasiswa akan disimpan serta diambil datanya dari database. Identitas mahasiswa yang diperlukan: nama, nim, dan hobi (boleh ditambah atau dimodifikasi)

## Back-end
1. Database

    Database yang digunakan adalah [MongoDB](https://www.mongodb.com/), web **minimal** dapat melakukan **CR (Create and Read)** dan data dimasukkan dalam database,  jika dapat mengimplementasikan Update and Delete itu merupakan **poin +**

2. NodeJS & Express

    Menggunakan [NodeJS](https://nodejs.org/en/) sebagai platform web app dan [ExpressJS](https://expressjs.com/) sebagai frameworknya.

    Web aplikasi **harus** dapat menerima/melakukan **GET and POST HTTP Request**

    Package / Library yang akan digunakan (rekomendasi):
    1. [Express](https://expressjs.com/)
    2. [Body-parser](https://www.npmjs.com/package/body-parser)
    3. [Mongoose](https://www.npmjs.com/package/mongoose)

    > doc:
        1. [HTTP Methods: GET vs. POST](https://www.w3schools.com/tags/ref_httpmethods.asp)
        2. [What is the difference between POST and GET?](http://stackoverflow.com/questions/3477333/what-is-the-difference-between-post-and-get)

3. Routing. *doc:* [Routing guide](https://expressjs.com/en/guide/routing.html)

    Ada 2 halaman yang wajib dibuat, antara lain:
    1. Page for create (register) mahasiswa. *e.g: basisdatalab.com/**register***
    2. Page untuk output semua mahasiswa terdaftar. *e.g: basisdatalab.com/**semuamahasiswa***

    **Poin +** jika menambah page ini:
    3. Page untuk search mahasiswa, akan mengoutputkan data mahasiswa jika ditemukan dan tidak ditemukan jika data tidak ditemukan. Parameter pencarian dapat menggunakan nim ataupun nama. *e.g: basisdatalab.com/**carimahasiswa***

## Front-end
Silahkan buat web app dengan tema/tampilan sesuka teman-teman, tidak ada ketentuan yang spesifik untuk Front-end, hanya diwajibkan untuk menggunakan Form HTML, selain itu bebas, but gaboleh pake template ya^^.

1.  HTML

    [Form](https://www.w3schools.com/html/html_forms.asp) menggunakan [action](https://www.w3schools.com/tags/att_form_action.asp) dan mengirimkan POST request ke server

2. CSS

    Perindah web app menggunakan CSS

3. Framework CSS

    Rapihkan CSS menggunakan framework CSS pilihanmu, bebas boleh pake framework CSS apapun. e.g: [Bootstrap](http://getbootstrap.com/), [Semantic UI](https://semantic-ui.com/), [Materialize](http://materializecss.com/), dll
4. Javascript / JQuery

    Gunakanlah javascript untuk membuat tampilan web app menjadi lebih menarik dan dinamis

note: Masing-masing file server, html, css dan js disimpan terpisah


Tanyakan semua hal yang teman-teman belum paham sehingga bisa mengerjakan tugas diatas dengan baik :smile:
--
