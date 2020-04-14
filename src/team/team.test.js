const request = require('supertest');
const app = require('./../app');

describe('Integration Tests for /team', () => {

    describe('GET /', () => {
        it('should response 200', async () => {
            const res = await request(app).get(`/`);
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('GET /routenotfound', () => {
        it('should response 404', async () => {
            const res = await request(app).get(`/routenotfound`);
            expect(res.statusCode).toEqual(404);
        });
    });

    describe('GET /api/v1/team', () => {
        it('should response 200', async () => {
            const res = await request(app).get(`/api/v1/team`);
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('GET /api/v1/team/1', () => {
        it('should response 200', async () => {
            const res = await request(app).get(`/api/v1/team/1`);
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('POST /api/v1/team', () => {
        it('with player data should response 201', async () => {
            const res = await request(app)
                    .post(`/api/v1/team`)
                    .send({
                        "name": "My Club 2020",
                        "stadium_name": "myStadium!",
                        "capacity": 5000
                    });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('error', null);
        });
    });

    describe('PUT /api/v1/team/5', () => {
        it('with player data should response 200', async () => {
            const res = await request(app)
                    .put(`/api/v1/team/5`)
                    .send({
                        "name": "Update Club 2021",
                        "stadium_name": "myStadium updated!",
                        "capacity": 12345
                    });

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('error', null);
        });
    });

    describe('DELETE /api/v1/team/6', () => {
        it('with player data should response 204', async () => {
            const res = await request(app).delete(`/api/v1/team/6`);

            expect(res.statusCode).toEqual(204);
        });
    });
});
