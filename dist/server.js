"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Configure Nunjucks
nunjucks_1.default.configure('views', {
    autoescape: true,
    express: app,
});
// Set view engine
app.set('view engine', 'njk');
// Serve static files
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../node_modules/govuk-frontend/govuk/assets')));
// Middleware to parse form data
app.use(express_1.default.urlencoded({ extended: true }));
// Define routes
app.get('/', (req, res) => {
    res.render('start', { title: 'Start Page' });
});
// Route for 'Enter Your Contact Details' page
app.get('/contact-details', (req, res) => {
    res.render('contact-details');
});
app.post('/contact-details', (req, res) => {
    console.log('Contact Details POST body:', req.body); // Debugging log
    const { name, email } = req.body;
    const errors = [];
    if (!name)
        errors.push('Name is required.');
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
        errors.push('Valid email is required.');
    if (errors.length > 0) {
        return res.render('contact-details', { errors, name, email });
    }
    res.redirect('/address-details');
});
// Route for 'Enter Your Address Details' page
app.get('/address-details', (req, res) => {
    res.render('address-details');
});
app.post('/address-details', (req, res) => {
    console.log('Address Details POST body:', req.body); // Debugging log
    const { address, postcode } = req.body;
    const errors = [];
    if (!address)
        errors.push('Address is required.');
    if (!postcode)
        errors.push('Postcode is required.');
    if (errors.length > 0) {
        return res.render('address-details', { errors, address, postcode });
    }
    res.redirect('/summary');
});
// Route for 'Summary' page
app.get('/summary', (req, res) => {
    // Mock data for now; replace with actual session data later
    const formData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Main St',
        postcode: 'AB12 3CD',
    };
    res.render('summary', { formData });
});
app.post('/submit', (req, res) => {
    // Log form submission data to the console
    console.log('Form submitted:', req.body);
    res.redirect('/submitted');
});
app.get('/submitted', (req, res) => {
    res.render('submitted');
});
// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
exports.default = app;
