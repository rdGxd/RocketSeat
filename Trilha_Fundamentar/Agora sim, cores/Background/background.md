# background

```css
* {margin: 0;}
/* header{
    height: 100px;
    border: 7px dashed red;

    background-color: aqua; 
    background-image: url(imagem aqui);
    background-repeat: repeat, no-repeat, repeat-y ou repeat-x;
    background-position: (right, left, center),(center, bottom, top) e se que colocar se uma propriedade ele vai colocar no eixo X e Y;
    background-size: (contain, cover, ou (porcentagem, se eu colocar apenas um valor vai se aplicar para a horizontal e a altura fica automática, Se eu aplicar dois valores então o segundo valor vale para altura), px ou em);
    background-origin: border-box (Começa a partir da borda), content-box(padrão dele), padding-box (a partir do padding) ;
    background-clip: border-box(padrão), content-box, padding-box;
} */
main {
    color: white;
    padding: 8px;

    background-color: aqua; 
    background-image: url(imagem aqui);
    background-repeat: repeat, no-repeat, repeat-y ou repeat-x;
    background-position: (right, left, center),(center, bottom, top) e se que colocar se uma propriedade ele vai colocar no eixo X e Y;
    background-size: (contain, cover, ou (porcentagem, se eu colocar apenas um valor vai se aplicar para a horizontal e a altura fica automática, Se eu aplicar dois valores então o segundo valor vale para altura), px ou em);
    background-origin: border-box (Começa a partir da borda), content-box(padrão dele), padding-box (a partir do padding) ;
    background-clip: border-box(padrão), content-box, padding-box;
    background-attachment: scroll(padrão) e também tem o (fixed(toda vez que vc fizer o scroll o background fica parado));

    /* ShortHand */
    background: rgb(55, 100, 50)  url() no-repeat right top / 50px border-box content-box scroll;

    /* background: linear-gradient(45deg, red, yellow, green) ou radial-gradient(red, yellow, green), o radial ele irá fazer de uma maneira circular e também podemos colocar um rgba(255, 255, 0),, rgba(255, 0, 0, 0.2); */
    
    Também podemos usar múltiplos background
    background: linear-gradient(rgba(255,255,255, 0), rgba(255,0,0, 0.2)), url() no-repeat right top / 50px border-box content-box fixed;
     /* background:  rgb(55, 100, 50)  url() no-repeat right top / 50px border-box content-box scroll; */
}

<main>
    <h1>Evolua rápido como a tecnologia.</h1>
    <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos.</p>
</main>
