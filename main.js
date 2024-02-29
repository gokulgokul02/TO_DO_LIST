var text=document.getElementById("list");
var button=document.getElementById("btn");
var output=document.getElementById("display");
let a=1;

button.addEventListener("click",butt);
function butt(){
  var b=a++;

  var para=document.createElement("p");
  para.textContent=b+text.value;
   output.appendChild(para);
  
  



  var remove=document.createElement("button");
  remove.textContent="REMOVE";
  output.appendChild(remove);
  remove.addEventListener("click",removebtn);
  function removebtn(){
    para.remove();
    remove.remove();
    edit.remove();
    done.remove();
  }


    var edit=document.createElement("button");
    edit.textContent="EDIT";
    output.appendChild(edit);
    edit.addEventListener("click",editbtn);
    function editbtn(){
        para.contentEditable=true;
        
        
    
    }
    var done=document.createElement("button");
    done.textContent="DONE";
    output.appendChild(done);
    done.addEventListener("click",donebtn);
    function donebtn(){
      para.contentEditable=false;
    }

   
    
  
  

    
}