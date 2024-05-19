// console.log("i am inside javascript")
const form=document.querySelector('form')
const todoinput=form.todo;
const ul=document.querySelector('ul')
const p=document.querySelector('p');
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(todoinput.value){
        const li= document.createElement('li');
        li.innerHTML=todoinput.value;
        ul.append(li);
        p.style.display='none'
        const btn =document.createElement('button');
        btn.innerHTML="DELETE";
        btn.classList.add('D-btn');
        btn.addEventListener('click',function(){
            ul.removeChild(li)
            
        })
        li.append(btn);
        
        todoinput.value="";
    }

})
const fm= document.getElementById('fmm');
const fname=fm.name;
const fpassword=fm.password;
const h4=document.getElementById('h4-success-login');
fm.addEventListener('submit',function(e){
    e.defaultPrevented();
    if(!fname.value && !fpassword.value){
        window.alert("required field cannot be empty")
    }
    else if(fpassword<=7){
        window.alert("password should be atleast 8 digit")
    }
    else{
        h4.innerHTML="you are sucessfully login";
    }
})