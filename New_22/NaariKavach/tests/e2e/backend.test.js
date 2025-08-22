const request = require('supertest');
const app = require('../../backend/src/app'); // Adjust the path as necessary

describe('Backend API Endpoints', () => {
    it('should return a 200 status for the health check endpoint', async () => {
        const response = await request(app).get('/api/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'ok' });
    });

    // Add more tests for other endpoints
    it('should create a new user', async () => {
        const newUser = {
            username: 'testuser',
            password: 'password123',
            email: 'testuser@example.com'
        };

        const response = await request(app)
            .post('/api/users')
            .send(newUser)
            .set('Accept', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.username).toBe(newUser.username);
    });

    it('should return a 404 for non-existent routes', async () => {
        const response = await request(app).get('/api/non-existent-route');
        expect(response.status).toBe(404);
    });

    // More tests can be added here
});