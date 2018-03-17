// interface Person {
//     name: string ;
//     age: number ;
// }
// let tom: Person = {
//     name: 'Tom' ,
//     age: 1
// }


// interface Alarm {
//     alert();
// }
// interface Light {
//     LightOn();
//     LightOff();
// }
// class Car implements Alarm , Light {
//     alert() {
//         console.log('car');
//     }
//     LightOn(){
//         console.log('car light on');
//     }
//     LightOff(){
//         console.log('car light off');
//     }
// }


// 泛型 是在指定函数接口的时候，不预先指定具体的类型，在使用时再指定类型的一种情况
// 创建一个数组，要适应很多种情况 数值数组？字符串数组？
// function createArray<T>(length:number , value: T):Array<T>{
//     let result : T[] = [] ;
//     for(let i = 0; i< length ; i++){
//         result[i] = value ;
//     }
//     return result ;
// }


// function sum(){
//     let args:IArguments = arguments ;
// }


// function add(a:number ,b:number):number {
//     return a+b ;
// }

// function BuildName(firstName: string, lastName: string):string{
//     if(firstName){
//         return firstName + ' ' + lastName;
//     }else{
//         return lastName ;
//     }
// }

// let xcatliu:[string, number] = ['Xcat Liu' , 1] ;

// let myFavoriteNumber2 = 'seven';
//类型推断
// myFavoriteNumber2 = 7 ;



// enum Days {Sun , Mon , Tue , Wed , Thu , Fri , Sat}
// console.log(Days["Sun"] === 0)


