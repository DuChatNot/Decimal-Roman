const inp = document.getElementById('input');
const btn = document.getElementById('button')
const sec = document.getElementById('res')
const error = document.getElementById('error')
const res = [];

inp.onkeyup = () => error.innerText = '';

btn.onclick = () => {
    for(let i = 0; i<30; i++){
        res.shift()
        res.pop()
    }
    t(inp.value)
    inp.value = ''
}

function t(x) {
    const y = x
    if(x<4000 && !isNaN(x)){
        for(x; x>999; x-=1000){ 
            res.push('M')
        }

        if(x>899){
            res.push('CM')
            x-=900
        }
    
        if(x>499){ 
            res.push('D')
            x-=500
            for(x; x>99; x-=100){ 
                res.push('C')
            }
        } else if(x<500){
            if(x>399){
                res.push('CD')
                x-=400
            }
            for(x; x>99; x-=100){ 
                res.push('C')
            }
        }

        if(x>89){
            res.push('XC')
            x-=90
        }
    
        if(x>49){
            res.push('L')
            x-=50
            for(x; x>9; x-=10){
                res.push('X')
            }
        } else if(x<50){
            if(x>39){
                res.push('XL')
                x-=40
            }
            for(x; x>9; x-=10){
                res.push('X')
            }
        }

        if(x===9){
            res.push('IX')
            x-=9
        }
    
        if(x>4){
            res.push('V')
            x-=5
            for(x;x>0;x--){
                res.push('I')
            }
        } else if(x<5){
            if(x===4){
                res.push('IV')
                x-=4
            }
            for(x;x>0;x--){
                res.push('I')
            }
        }
        const roman = res.join('');
        
        const art = document.createElement('article')
        const text = document.createTextNode(`Decimal: ${y}   Roman: ${roman}`)
        art.appendChild(text)
        sec.appendChild(art)

    } else{
        error.innerText = 'Input must be a number (1 > x < 3999)'
    };
};
//Testing Area:

/*
const xx = [1,2,3]
const yy = xx.join('')
console.log(yy)

const cc = 5
console.log(!isNaN(cc))

*/