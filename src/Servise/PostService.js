export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    async posts() {
        return await fetch(this.url).then(value => value.json())
    }

    getPost(id) {
        return fetch(this.url + '/' + id).then(value => value.json())
    }
}
