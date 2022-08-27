import '../css/componentes.css'
// import webpacklogo from '../assets/img/webpack-logo.png';




export const saludar= (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    // h1.style.background='green';
    // h1.style.color='white';
    // h1.style.fontFamily='Helvetica';
    // h1.style.fontSize='20px';
    // h1.style.textAlign='center';
    h1.innerHTML=`Hola, ${nombre}...!!! ¿como estás hoy?`;

    document.body.append(h1);

    // img:
    //console.log(webpacklogo);
    // const img=document.createElement('img');
    // img.src=webpacklogo;
    // document.body.append(img);

}