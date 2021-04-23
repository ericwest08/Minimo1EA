import { Request, Response } from "express";
import Person from '../models/person';

//Return all the persons
const getPersons = async (req: Request, res: Response) => {
    try {
        const results = await Person.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

//Return one institution (cambiaran las funciones)
const getPerson = async (req: Request, res: Response) => {
    try {
        const results = await Person.find({ "nombre": req.params.nombre });
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

//Crear Institucion (crear)
const postPerson = async (req: Request, res: Response) => {
    const person = new Person({
        "nombre": req.body.nombre,
        "fecha": req.body.fecha,
        "dni": req.body.dni,
        "telefono": req.body.telefono,
        "fiebre": req.body.fiebre,
        "tos": req.body.fiebre,
        "difrespiratoria": req.body.difrespiratoria,
        "malestar": req.body.malestar,

    });
    console.log("El nombre es", req.body.name);
    console.log(req.body);
    person.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

const deletePerson = async (req: Request, res: Response) => {
    const name = req.params.nombre;
    Person.deleteOne({ 'nombre': name }).then(data => {
        console.log(data);
        if (data != null) {
            return res.status(200).json(data);
        } 
        else{
            return res.status(404).json({'Message' : 'Not Found'});
        }

    }).catch((err) => {
        return res.status(500).json(err);
    })
}

export default { getPersons ,deletePerson, postPerson, getPerson };