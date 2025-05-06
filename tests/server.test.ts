import request from 'supertest';
import app from '../src/server';

describe('GET /', () => {
  it('should return the Start Page with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Welcome to the Start Page');
  });
});

describe('GET /contact-details', () => {
  it('should return the Contact Details page with status 200', async () => {
    const response = await request(app).get('/contact-details');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Enter Your Contact Details');
  });
});

describe('POST /contact-details', () => {
  it('should redirect to /address-details on valid input', async () => {
    const response = await request(app)
      .post('/contact-details')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('name=John+Doe&email=john.doe%40example.com');
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe('/address-details');
  });

  it('should return errors on invalid input', async () => {
    const response = await request(app)
      .post('/contact-details')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('name=&email=invalid-email');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Name is required.');
    expect(response.text).toContain('Valid email is required.');
  });
});

describe('GET /address-details', () => {
  it('should return the Address Details page with status 200', async () => {
    const response = await request(app).get('/address-details');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Enter Your Address Details');
  });
});

describe('POST /address-details', () => {
  it('should redirect to /summary on valid input', async () => {
    const response = await request(app)
      .post('/address-details')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('address=123+Main+St&postcode=AB12+3CD');
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe('/summary');
  });

  it('should return errors on invalid input', async () => {
    const response = await request(app)
      .post('/address-details')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('address=&postcode=');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Address is required.');
    expect(response.text).toContain('Postcode is required.');
  });
});