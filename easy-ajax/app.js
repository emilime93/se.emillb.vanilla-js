const ROOT_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const http = new EasyAJAX;

// Get posts
// http.get(`${ROOT_ENDPOINT}/posts`, function(err, res) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('res', res);
// });
// Get one post
// http.get(`${ROOT_ENDPOINT}/posts/1`, function(err, res) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('res', res);
// });


// const dataToSend = {
//     title: 'Custom post',
//     body: 'This is a custom post'
// };
// http.post(`${ROOT_ENDPOINT}/pots`, dataToSend, function(err, res) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(res);
// });

// Update a post
// http.put(`${ROOT_ENDPOINT}/posts/3`, dataToSend, function(err, res) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(res);
// });

// Delete
// http.delete(`${ROOT_ENDPOINT}/posts/1`, function(err, res) {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log('Success', res);
// });