import Vue from 'vue'
import Vuex from 'vuex'
import  Mock from "mockjs"
Vue.use(Vuex)
var listk=[];
var listz=[]




  var Random = Mock.Random;


      
  // listz=[];
    for(var i = 0 ; i < 10 ; i++){
        var obj = {
            id : Random.id(),
            // img : Random.dataImage("200x100"),
            title : Random.ctitle(),
            // ischecked:false,
            // sl: Random.natural(2, 9),
            // dj: Random.natural(15, 30),
            // gwcz:0,
            jj: Random.cparagraph(),
            date: Random.date()
            
        }
        listk.push(obj)
    };
    for(var i = 0 ; i<50 ; i++){
      
      var zz = {
        
        
        
       dz: Random.word(),
       ys: "rgb("+""+Random.natural(100, 255)+","+Random.natural(100, 255)+ ","+Random.natural(100, 255)+")"

      
      }
   
          listz.push(zz)
    }


 


export default new Vuex.Store({
  state: {


    imgz:[require('@/assets/imgz/imz1.jpg'),require('@/assets/imgz/imz2.jpg'),require('@/assets/imgz/imz4.jpg'),require('@/assets/imgz/imz5.jpg')],
     list:listk,
     listzj:listz
    
  },
  mutations: {




    add(state) { 
      console.log("nmb");
      console.log(this.list);

      // cons
  var Random = Mock.Random;
      
  state.list=[];
      
      for(var i = 0 ; i < 10 ; i++){
      var obj = {
          id : Random.id(),
          // img : Random.dataImage("200x100"),
          title : Random.ctitle(),
          // ischecked:false,
          // sl: Random.natural(2, 9),
          // dj: Random.natural(15, 30),
          // gwcz:0,
          jj: Random.cparagraph(),
          date:Random.date()
          
      }
      state.list.push(obj)
  }},

    jz(){

        console.log("nmb");
      addz()
    }
  },
  actions: {
  },
  modules: {
  }
})
