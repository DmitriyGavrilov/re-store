export default class BookstoreService {

  data = [
    { id: 1, 
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/1/12/Turk-book-title_page.jpg" },
    { id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Three-Books-of-Occult-Philosophy_Book-III_Title-Page-005_London-1651_Heinrich-Cornelius-Agrippa_%28De_Occulta_Philosophia%29.jpg" }
];

  getBooks() {
    return  new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened!'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
    }
}