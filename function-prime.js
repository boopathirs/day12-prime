let num = 3;
let prime = true;
function result(){
for(i=2;i<num;i++){
    if(num%i==0){
        prime = false;
    }
}
if(prime){
    console.log(`${num} is prime`);
}else{
    console.log(`${num} is not prime`);
} 
}
let answer = result();