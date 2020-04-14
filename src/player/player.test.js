const request = require('supertest');
const app = require('./../app');

describe('Integration Tests for /player', () => {

    describe('GET /api/v1/player', () => {
        it('should response 200', async () => {
            const res = await request(app).get(`/api/v1/player`);
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('GET /api/v1/player/1', () => {
        it('should response 200', async () => {
            const res = await request(app).get(`/api/v1/player/1`);
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('POST /api/v1/player', () => {
        it('with player data should response 201', async () => {
            const res = await request(app)
                    .post(`/api/v1/player`)
                    .send({
                        "name": "Mr New Player"
                    });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('error', null);
        });
    });

    describe('PUT /api/v1/player/5', () => {
        it('with player data should response 200', async () => {
            const res = await request(app)
                    .put(`/api/v1/player/5`)
                    .send({
                        "name": "Update Player"
                    });

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('error', null);
        });
    });

    describe('DELETE /api/v1/player/6', () => {
        it('with player data should response 204', async () => {
            const res = await request(app).delete(`/api/v1/player/6`);

            expect(res.statusCode).toEqual(204);
        });
    });
});
