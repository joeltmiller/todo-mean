var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to GET /todo', function testSlash(done) {
  request(server)
    .get('/todo')
    .expect(200, done);
  });
  it('responds to POST /todo', function testPost(done) {
  request(server)
    .post('/todo')
    .expect(200, done);
  });
  it('responds to DELETE /todo', function testDelete(done) {
  request(server)
    .delete('/todo/123')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
