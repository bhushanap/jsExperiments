function doSomething(){
            // alert("I warned you!");
            const el=document.getElementById('woah');
            if(el.src.endsWith("hi1.png")){el.src = "hi2.png"
            console.log('click if')}
            else {el.src = "hi1.png"}
        }