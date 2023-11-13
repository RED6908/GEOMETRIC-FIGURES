function squarePerimeter(side){
    return side*4;
    }
    
    function squarePerimeterCalculate(){
        const numberside = document.getElementById("squareInput");
        const result = parseInt(numberside.value);
    
        const perimeter = squarePerimeter(result);
        document.getElementById("squarePerimeter").innerText = "its perimeter is: " + perimeter + " cm";
    }
    
    
    function squareArea(side){
        return side*side;
        }
        
        function squareAreaCalculate(){
            const numberside = document.getElementById("squareInput");
            const result = parseInt(numberside.value);
        
            const area = squareArea(result);
            document.getElementById("squareArea").innerText = "its area is: " + area + " cmˆ2";
        }
    
    // funciones para el circulo
        function CircleArea(radio) {
            var area = Math.PI * Math.pow(radio, 2);
            return area;
          }
    
          function CircleCalcularArea() {
           
            const radioInput = document.getElementById("radioInput");
            const result = parseInt(radioInput.value);
    
            const area = CircleArea(result);
            document.getElementById("CircleArea").innerText = "its area is: " + area + " cmˆ2";
    
            }
    
            function CirclePerimeter(radio) {
                const perimeter = 2 * Math.PI * radio;
                return perimeter;
              }
              function CircleCalcularPerimeter() {
                
                const radioInput = document.getElementById("radioInput");
                const result = parseInt(radioInput.value);
    
                const perimeter = CirclePerimeter(result);
                document.getElementById("CirclePerimeter").innerText = "its perimeter is: " + perimeter + " cm";
    
             }
    // funcion para receteear todo
    function clearAll() {
    let display = document.querySelector("squareInput")
    display.value=""; 
    }
    
    // funcionnes para el triangulo
            function PerimeterTriangule(lado1, lado2, base) {
                return lado1 + lado2 + base;
            }
            
            function calculatePerimetroTriangule() {
                const lado1 = parseInt(document.getElementById("lado1Input").value);
                const lado2 = parseInt(document.getElementById("lado2Input").value);
                const base = parseInt(document.getElementById("baseInput").value);
            
                const perimeter = PerimeterTriangule(lado1, lado2, base);
                document.getElementById("Perimeter").innerText = "its perimeter is: " + perimeter + " cm";
            }
    
            function AreaTriangule(base, altura) {
                return (base * altura) / 2;
            }
                  
            function calculateAreaTriangule() {
                const base = parseInt(document.getElementById("baseInput").value);
                const altura = parseInt(document.getElementById("alturaInput").value);
    
                const area = AreaTriangule(base, altura);
    
                document.getElementById("AreaResult").innerText = "its area is: " + area + " cmˆ2";
            }