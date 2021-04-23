import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const personSchema = new Schema({
    nombre: {
        type: String,
        unique: true
      
    },
    fecha: {
        type: String
    },
    dni: {
        type: String,
        
    },
    telefono: {
        type: String
    },
    fiebre: {
        type: String
    },
    tos: {
        type: String
    },
    difrespiratoria: {
        type: String
    },
    malestar: {
        type: String
    }
    
});

//Interfaz para tratar respuesta como documento
export interface iPerson extends Document {
    nombre: string;
    fecha: string;
    dni: string;
    telefono: string;
    fiebre: string;
    tos: string;
    difrespiratoria: string;
    malestar: string;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<iPerson>('Person', personSchema);