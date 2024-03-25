const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/utma';
mongoose.connect(url_db)
.then(() => {
    console.log('si le chingo')
})
.catch ((err) => {
    console.log ('jalo mas que pura verga')
})
const esquema_alumnos = new mongoose.Schema(
    {
        name: {
            type: String
        },
        apepat: {
            type: String
        },
        apemat: {
            type: String
        },
        telnumber:{
            type: Number
        },
        fechanac: {
            type: Date
        }

       
    }
)
const alumnos = new mongoose.model('tabla de registro de alumnos', esquema_alumnos);

alumnos.create(
    {
        name:'jesus',
        apepat:'salazar',
        apemat:'padilla',
        telnumber:1234567,
        fechanac: new Date('200,01,14')
 }
)

