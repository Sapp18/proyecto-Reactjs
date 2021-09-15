import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/style.scss";
import Bar from "./vistas/Bar";
import Banner from "./vistas/Banner";
import Curso from "./vistas/Curso";
import Nosotros from "./vistas/Nosotros";
import Contacto from "./vistas/Contacto";

//La informacion la puedes tomar desde un API
const cursos = [{
        title: "Accesorios de entrenamiento",
        imagen: "https://www.superprof.com.ar/blog/wp-content/uploads/2019/02/physiotherapy-weight-training-dumbbell-exercise-balls-39671-700x466.jpeg.webp",
        price: "PLATA",
    },
    {
        title: "Clases grupales",
        imagen: "https://www.superprof.com.ar/blog/wp-content/uploads/2019/02/pexels-photo-903171-700x466.jpeg.webp",
        price: "PLATA",
    },
    {
        title: "Recetas de bebidas saludables",
        imagen: "https://th.bing.com/th/id/R.52bcb6d0ccb15754dd72fa1329edce68?rik=g6FNxvuHPSSvdg&pid=ImgRaw&r=0",
        price: "PLATA",
    },
    {
        title: "Vestuarios",
        imagen: "https://th.bing.com/th/id/OIP.kq05hdUJjPaI0KyAGCAOUwHaEK?pid=ImgDet&rs=1",
        price: "PLATA",
    },
    {
        title: "Planes nutricionales y dietas",
        imagen: "https://th.bing.com/th/id/R.655b79ce5ceb11edd6470634c4958738?rik=7mBQhnEr2e3Bcg&pid=ImgRaw&r=0",
        price: "ORO",
    },
    {
        title: "Entrenamiento personalizado",
        imagen: "https://www.gesformacion.edu.es/blog/wp-content/uploads/2018/12/entrenamiento-personalizado-750x410.png",
        price: "ORO",
    },
    {
        title: "Footing en el exterior",
        imagen: "https://th.bing.com/th/id/R.2178d282edbe539ae88cc613ab621d87?rik=LAoNBs8GwbUJNA&riu=http%3a%2f%2fwww.gymsource.com%2fwp%2fwp-content%2fuploads%2f2015%2f06%2f39704590_l_Summer-Runner.jpg&ehk=F4apcpniJJA%2fxSnUUn65Amj%2f7BXeYl83C3EOWGC3RlU%3d&risl=&pid=ImgRaw&r=0",
        price: "ORO",
    },
    {
        title: "Clases de electrofitness",
        imagen: "https://www.superprof.com.ar/blog/wp-content/uploads/2019/02/electrofitness-700x467.jpg.webp",
        price: "PLATINO",
    },
    {
        title: "Área de relajación y spa",
        imagen: "https://images.ctfassets.net/bu3up4ijy7vs/1U7LZcScBuCQsq6wO064Ey/29a15bd879b78b726c71e16fb489043e/Antara_Spa_at_The_Chelsea_Health_Club___Spa__1_.jpg",
        price: "PLATINO",
    },
    {
        title: "Médicos y nutricionistas",
        imagen: "https://th.bing.com/th/id/OIP.zybDkuDrI0k4mWtcOyeG_wHaEy?pid=ImgDet&rs=1",
        price: "PLATINO",
    },
    {
        title: "Promociones por llevar clientes",
        imagen: "https://laopinion.com/wp-content/uploads/sites/3/2019/04/shutterstock_649048072.jpg?quality=80&strip=all",
        price: "NO APLICA",
    },
];

function App() {
    return ( <
        BrowserRouter >
        <
        div >
        <
        Bar / >
        <
        Switch >
        <
        Route path = "/nosotros"
        exact component = { Nosotros }
        /> <
        Route path = "/contacto"
        exact component = { Contacto }
        /> <
        /Switch> <
        Banner / >
        <
        br / >
        <
        h2 className = "t1"
        style = {
            { textAlign: "center" } } >
        Conoce todos nuestros servicios <
        /h2> <
        div className = "ed-grid m-grid-3" > {
            cursos.map((c) => ( <
                Curso title = { c.title }
                imagen = { c.imagen }
                price = { c.price }
                />
            ))
        } <
        /div> <
        Bar / >
        <
        /div> <
        /BrowserRouter>
    );
}

export default App;