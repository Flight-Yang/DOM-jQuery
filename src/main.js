//第一次代码
// const api = jQuery('.test');//不返回元素，返回api对象
// //这里不用点red是因为不是选择器,还有第一次返回api的骚操作,这叫链式操作
// api.addClass('red') //this就是api,记得call方法，原型里默认传递调用元素
//    .addClass('blue');

//第一版简化后 对应this,这里class：test是api
// jQuery('.test')
//  .addClass('red')
//  .addClass('blue');

//第二次代码
// const api1 = jQuery('.test');
// api1.addClass('blue');
// const api2 = api1.find('.child');
// //对应find,返回child
// api2.addClass('black');
// //对应this,返回test
// api1.addClass('green');

//第二版简化后 对应find 在这里test内部的class：child是新的api
// jQuery('.test')
// .find('.child')
// .addClass('black');

//第三版代码
// const api1 = jQuery('.test');
// const api2 = api1.find('.child').addClass('red')
// //这里返回到test的api了,可以看end()方法,把yellow加到test身上
// const oldApi = api2.end().addClass('yellow');

//第三版简化
// jQuery('.test')
// .find('.child')
// .addClass('red')
// .end()
// .addClass('yellow');

//第四版代码
// const x = jQuery('.test').find('.child');
// //这里的div指each方法里的elements[i]
// x.each((div,w)=>console.log(div,w));

//第五版代码
// const x = jQuery('.test');
// x.parent().print();

//第六版代码
const x = jQuery('.test');
x.children().print();