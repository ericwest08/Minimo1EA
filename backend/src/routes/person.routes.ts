import {Router} from "express"; 
import personController from '../controllers/person.controllers'

//Router nos permite gestionar rutas de la API (cambia segun el tipo de ejercicio)
const router = Router();

router.post('/post', personController.postPerson);
router.get('/all', personController.getPersons);
router.delete('/delete/:nombre', personController.deletePerson);
router.get('/:nombre', personController.getPerson);

//Exportamos router para usar rutas en app.ts
export default router;