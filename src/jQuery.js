//如果两个等于号在同一行,那么先执行function函数方法，在赋值给$
window.$ = window.jQuery = function(selectorOrArray){
    let elements;
    //判断类型是字符串还是数组，当时选择器 .test 这就是个字符串
    if(typeof selectorOrArray === 'string'){
        //selector 翻译：选择器 这里获得的元素是一个数组，它获取了多个元素
        elements = document.querySelectorAll(selectorOrArray);
    }else if(selectorOrArray instanceof Array){
        //获取的类型是否是数组,如果是数组直接赋予
        elements = selectorOrArray;
    }


    //这里直接返回结果,删除了对象api,因为采用闭包,函数调用外部元素,所以可以维持这个方法
    return {

        //addClass是向被选元素添加一个或多个类
        addClass(className){
            for(let i =0;i<elements.length;i++){
                elements[i].classList.add(className);
            }
            //这里返回api是为了在后面再次添加一个addClass()方法,因为这是一个添加类函数,一般返回是underfind
            //this就是api,这里把api换成this了,这里返回的是test,看main.js 里对应this
            return this; 
        }
            //这里返回api是把结果返回
            // return api;
        ,     
        find(selector){
            //数组里不能querySelectorAll()方法的,得具体到某一个
            let array = [];
            for(let i = 0;i<elements.length;i++){
                //把获取到的元素转换成数组
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                //把转换成的数组拼接到array数组上
                array = array.concat(elements2);
            }
            //如果复习看不懂,就再看一遍吧
            //重新设置选择器,内部返回的是这个array获取的api,然后在使用addClass方法就是把array获取的api赋的值
            // const newApi = jQuery(array);
            //这里返回的是child   看main.js 对应find
            // return newApi;

            //这里写这个指，当你调用end()方法返回时,调用的是老api,比如test
            //这里为什么能把oldApi弄到array身上？
            //?????????????????
            array.oldApi = this;



            //简化 这里对应上面那个newAPi两句,这里是新api,比如child
            return jQuery(array);
        },

        //oldApi对应到选择器上，而不是数组上
        oldApi: selectorOrArray.oldApi,
        end(){
            //这里this是新api,比如child,他的老对象元素是test,因为当你要嵌套调用时才会调用end()返回方法
            return this.oldApi;
        },
        each(fn){
            for(let i =0;i<elements.length;i++){
                //这里的null对应this, elements[i]对应div, i对应第几个
                fn.call(null,elements[i],i);
            }
            return this;
        },
        parent(){
            const array = [];
            this.each((node)=>{
                //判断父类是否出现过,出现过就输出一下，如果出现过但凡一次就不在输出
                if(array.indexOf(node.parentNode) === -1){
                    //往数组末尾添加一个新元素并返回新数组
                    array.push(node.parentNode);
                }
            })
            return jQuery(array);
        },
        children(){
            const array = [];
            this.each((node)=>{
                if(array.indexOf(node.children) === -1){
                    array.push(... node.children);
                }
            })
            return jQuery(array);
        },
        //这是一个输出方法
        print(){
            //把jQuery获取的元素输出
            console.log(elements);
        }

    }
 
}

