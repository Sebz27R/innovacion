import camisa_azul from './camisa_azul.jpg'
import camisa_pastel from './camisa_pastel.jpg'
import collar from './collar.jpg'
import deka from './deka.jpg'
import force_1 from './force_1.jpg'
import force_2 from './force_2.jpg'
import gap from './gap.png'
import gorra from './gorra.jpg'
import jean_negro1 from './jean_negro1.jpg'
import jean_negro2 from './jean_negro2.jpg'
import koaj from './koaj.jpg'
import levis from './levis.png'
import nike from './nike.png'

export const products = [
    {
        _id: "aaaa",
        name: "Camisa basica azul fit",
        price: 100000,
        image: [camisa_azul],
        category: "Camisas",
        color: "Azul",
        talla: ["XS", "S", "L"],
        disp: [2,10,5],
        tienda: "1333a"
    } ,
    {
        _id: "aaab",
        name: "Pantalon Levis negro",
        price: 120000,
        image: [jean_negro1,jean_negro2],
        category: "Pantalones",
        color: "Negro",
        talla: ["S","M", "L"],
        disp: [4,3,1],
        tienda: "1378a"
    } ,
    {
        _id: "aaac",
        name: "Zapatos Air Force 1 blancos",
        price: 300000,
        image: [force_1,force_2],
        category: "Zapatos",
        color: "Blanco",
        talla: ["36", "38","39", "40", "41"],
        disp: [2,0,3,4,5],
        tienda: "1319a"
    } ,
    {
        _id: "aaad",
        name: "Collar corazon mujer",
        price: 50000,
        image: [collar],
        category: "Accesorios",
        color: "",
        talla: ["35cm", "40cm"],
        disp: [1,1],
        tienda: "1390a"
    } ,
    {
        _id: "aaae",
        name: "Gorra Gap Verde",
        price: 175000,
        image: [gorra],
        category: "Gorras",
        color: "Verde",
        talla: ["XS", "S","M", "L"],
        disp: [4,6,5,8],
        tienda: "1312a"
    } ,
    {
        _id: "aaaf",
        name: "Camisa basica pastel",
        price: 20000,
        image: [camisa_pastel],
        category: "Camisas",
        color: "Pastel",
        talla: [ "S","M", "L"],
        disp: [2,10,5],
        tienda: "1333a"
    } ,


]

export const shops = [
    {
        _id: "1333a",
        name: "KOAJ",
        image: [koaj],
        locations: ["Direccion 1", "Direccion 2", "Direccion 3"],

    },
    {
        _id: "1378a",
        name: "Levis",
        image: [levis],
        locations: ["Direccion 1","Direccion 2"],

    },
    {
        _id: "1319a",
        name: "Nike",
        image: [nike],
        locations: ["Direccion 1","Direccion 2","Direccion 3","Direccion 4","Direccion 5"],

    },
    {
        _id: "1390a",
        name: "Deka accesorios",
        image: [deka],
        locations: ["Direccion 1"],

    },
    {
        _id: "1312a",
        name: "GAP",
        image: [gap],
        locations: ["Direccion 1","Direccion 2","Direccion 3"],

    },
    
    

]