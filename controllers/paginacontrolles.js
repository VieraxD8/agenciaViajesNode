import { Viaje } from '../models/viaje.js';
import { Testimonial } from '../models/testimoniales.js'

const paginainicio = async (req, res) => {

    //consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({ limit: 3}));


    try {
        const resultado = await Promise.all( promiseDB);

        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes : resultado[0],
            testimoniales : resultado[1]
        });

    } catch (error) {
        console.log(error)
    }

    
}

const paginanosotros = (req, res) => {  
    res.render('Nosotros', {

        pagina: 'Nosotros'
    });

};

const paginaviajes = async  (req, res) => { 
    // Consultar BD 
    const viajes = await Viaje.findAll();
    
    res.render('viajes', {
        pagina: 'Próximos Viajes', 
        viajes,
    });
}

const paginatestimoniales = async (req, res) => {  

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {

            pagina: 'testimoniales',
            testimoniales
        });
        
    } catch (error) {
        console.log(error)
    }
  

}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje', 
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginainicio,
    paginanosotros,
    paginaviajes,
    paginatestimoniales,
    paginaDetalleViaje

}