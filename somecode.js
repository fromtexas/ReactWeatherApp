//function getTemp (location, callback){
//    callback(undefined, 78);
//    callback('City not found');
//}
//
//getTemp('moscow', function(err, temp){
//    if(err){
//        console.log('error', err);
//    }else{
//        console.log('succes', temp)
//    }
//});


//function getTempPromise(location){
//    return new Promise(function(resolve, reject){
//        setTimeout(function(){
//             resolve(90);
//             reject('city not found');
//        },5000);
//    });
//    
//};
//
//getTempPromise('moscow').then(function (temp){
//     console.log('succes', temp)
//}, function(err){
//    console.log('error', err);
//});

//
//function addPromise(a,b){
// return new Promise(function(resolve, reject){
//        if(typeof(a)==='number' && typeof(b)==='number'){
//            var sum =  a+b;
//            resolve(sum);
//        }
//     else{
//      reject('not a number');  
//   }  
// })   
//};
//   
//
//                      
//                      
//addPromise('s',2).then(function(sum){
//       console.log('succes', sum)
//   }, function(err){
//        console.log('error', err);
//   });   






var names = ['some', 'name', 'more'];

//names.forEach(function(name){
//    console.log(name);
//});

//names.forEach(name => console.log(name));


var person = {
    name: 'some name',
    greet: function(){
        var self = this;
        names.forEach(function(name){
            console.log(self.name + ' hey ' + name);
        })
    }
};
//person.greet();


var someFunc = (smth) => {
    console.log('hoho ' + smth);
    console.log(`hehehe ${smth}`);
};

someFunc('jopa');


var someFunc2 = smth => console.log('some msg ' + smth);
someFunc2('fff');

                      
                      




















