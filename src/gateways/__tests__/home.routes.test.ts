
import * as request from 'supertest';
import app from '../../app.express';
import * as faker from 'faker';

// describe('GET /', () => {
//   it('should return 200 OK', () => {
//     return request(app)
//       .get('/')
//       .expect(200)
//       .then(res => {
//         expect(res.body).toHaveProperty('message');
//       });
//   });
// });

describe('"/" GET ', () => {
  it('should respond with json containing "message" key on "/" 200 OK', async (done) => {
    const response = await request(app).get('/');
  
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message');   
    
    done()
  });
})