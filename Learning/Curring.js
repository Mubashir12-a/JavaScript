function Add(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return (a+b+c+d+e);
                }
            }
        }
    }
}

console.log(Add(10)(20)(30)(40)(50));



function fn_1(){
    return function(){
        return function(a){
            return function(){
                return a;
            }
        }
    }
}

console.log(fn_1()()(10)());



function fn_2(a, b){
    function fn_01(){
        return function(a){
            return function(b){
                return a * b;
            }
        }
    }

    return fn_01()(a)(b);
}

console.log(fn_2(10, 20));


