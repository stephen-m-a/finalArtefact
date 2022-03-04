const express = require('express')

const leader = require('../controllers/leader.js');
const staff = require('../controllers/staff.js');
const testimonial = require('../controllers/testimonial.js');
const faq = require('../controllers/faq.js');


const router = express.Router();

const upload = multer({ dest: 'uploads/'})


router.route('/v1/leader').post(parser.single('image'), leader.addLeader);
router.get('/v1/leader', leader.getLeader);
router.patch('/v1/leader', leader.editLeader);
router.delete('/v1/leader', leader.deleteLeader);

router.route('/v1/staff').post(parser.single('image'), staff.addStaff);
router.get('/v1/staff', staff.getStaff);
router.patch('/v1/staff', staff.editStaff);
router.delete('/v1/staff', staff.deleteStaff);

router.route('/v1/testimonial').post(parser.single('image'), testimonial.addTestimonial);
router.get('/v1/testimonial', testimonial.getTestimonials);
router.patch('/v1/testimonial', testimonial.editTestimonial);
router.delete('/v1/testimonial', testimonial.deleteTestimonial);
 
router.post('/v1/faq', faq.addFaq);
router.get('/v1/faq', faq.getFAQ);
router.patch('/v1/answer', faq.addAnswer);
router.delete('/v1/faq', faq.deleteFaq);


module.exports = router
