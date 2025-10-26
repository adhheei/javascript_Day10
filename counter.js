function creatCounter(){
    let counter =0 ;
    
    return function(){
        counter +=1 ;
        console.log(counter);
    }

}

counterA = creatCounter();
counterA();
counterA();
counterA();
counterA();
counterA();
counterA();
counterA();

counterB = creatCounter();
counterB();
counterB();
counterB();
counterB();
counterB();