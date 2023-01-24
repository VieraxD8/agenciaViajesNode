import express from 'express';
import { 
    paginainicio, 
    paginanosotros, 
    paginaviajes, 
    paginatestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginacontrolles.js';
import{
    guardarTestimonial
} from '../controllers/testimonialcontrolles.js';

const router = express.Router();


router.get('/', paginainicio);

router.get('/Nosotros', paginanosotros)

router.get('/viajes', paginaviajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginatestimoniales);

router.post('/testimoniales', guardarTestimonial);



export default router;