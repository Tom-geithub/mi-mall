/* sessionStorage */
const STORAGE_KEY='mall';

export default{

    setItem (key,value,module_name){
        if(module_name){
            //获取到传入的模块处，并给该模块新增值
            let val=this.getItem(module_name);
            val[key]=value;
            //将修改后的模块重新赋值回Storage中
            this.setItem(module_name,val);
        }else{
            /* 没有传入模块值时，直接在整个storage中添加 */
            let val=this.getStorage();
            val[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
    },

    getItem (key,module_name){
        // 当传入了模块值，就递归取到小模块的值
        if(module_name){
            let val=this.getItem(module_name);
            if(val) return val[key];
        }
        // 当没有传入模块值，就直接返回整个Storage
        return this.getStorage()[key];
    },

    /* 获取网页的整个Storage */
    getStorage (){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}');
    },

    clear (key,module_name){
        let val=this.getStorage();
        if(module_name){
            if(!val[module_name]) return;
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        //清理完后重新赋值给storage
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}

