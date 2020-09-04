
let squares = document.querySelectorAll(".square");
let hint    = document.querySelector("#hint");
let h1      = document.querySelector("h1") ;
let colorDiplay = document.querySelector("#colorDiplay");
let btn_reset = document.querySelector("#newGameBtn")
let btn_easy = document.querySelector("#easyBtn");
let btn_hard = document.querySelector("#hardBtn");
let goolColor;
let colors = [];

newGame();
//eventos em squeres
for(let i = 0 ; i < squares.length ; i++){
    
    squares[i].addEventListener("click", 
    function(){
        var clickedColor = this.style.backgroundColor;
        
        // se não é o quadrado objetivo
        if( clickedColor !== goolColor){
            this.style.backgroundColor = "#232323";
            hint.textContent = "Try again.";
            hint.style.color = "steelblue"
            
        }
        else{
            // user acertou
            hint.textContent = "Correct!";
            hint.style.color = "green"
            changeSquareColors(goolColor); 
            h1.style.backgroundColor = goolColor;
            btn_reset.textContent = "Play Agran";                
        }
    });
}
// eventos nos botões 
btn_reset.addEventListener("click", newGame);

btn_easy.addEventListener("click", function(){
    btn_hard.classList.remove("selected");
    btn_easy.classList.add("selected");
    colors = generateRandomColor(3);
    goolColor = pickColor();
    colorDiplay.textContent = goolColor;
    hint.textContent = ""
    h1.style.background = "steelblue";
    
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    for(let i = 3; i < squares.length; i++){
        squares[i].style.backgroundColor = "steelblue";
        squares[i].style.display = "none";
    }

});

btn_hard.addEventListener("click", function(){
    newGame()
});

/* funções usandas na página*/

function changeSquareColors(color){
    // Altera todas as cores de squeres para a cor recebida como argumento
    for(let i = 0 ; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    // toma uma cor aleatoria do array de colors 
    let randNumber = Math.floor( Math.random() * colors.length )
    console.log(randNumber)
    return  colors[randNumber];
};

function generateRandomColor(number_colors){
    //  recebe com argumento um número de cores e o gera como argumento 
    var arr = []
    for(let i =0 ; i <number_colors; i++){
        arr.push(randomColor());
    }
    return arr
}


function randomColor(){
    //retorna uma cor no formato rgb(r , g, b) como string;
    var r = Math.floor( Math.random() * 256);
    var g = Math.floor( Math.random() * 256);
    var b = Math.floor( Math.random() * 256);

    return "rgb("+ r + ", "+ g +", "+b+")";    
}

function newGame(){
    colors = generateRandomColor(6);
    setSquareColor()
    hint.textContent = "";
    h1.style.backgroundColor = "steelblue";
    goolColor = pickColor();
    colorDiplay.textContent = goolColor;
    btn_reset.textContent = "New Colors";
    btn_hard.classList.add("selected");
    btn_easy.classList.remove("selected");
    hint.style.color = "steelblue"
}

function setSquareColor(){
    // Colocar todas cas cores de colors em squeres
    for(let i = 0 ; i < squares.length ; i++){
    
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
}

