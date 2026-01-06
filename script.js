 let button1=document.getElementById("btn1");
        let button2=document.getElementById("btn2");
        let paras=document.querySelector(".copy");

            var c1="#ffff"
            var c2="#0000"
           const color = ()=>{
           let num="0123456789ABCDEF";
           let numb="#";
           for(let i=0;i<6;i++){
             numb+= num [Math.floor(Math.random()*16)];
           }
           return numb;
        };

        const parag=(color)=>{
            color=color.replace("#","");
            let r=parseInt(color.slice(0,2),16);
            let g=parseInt(color.slice(2,4),16);
            let b=parseInt(color.slice(4,6),16);
            return `rgb(${r},${g},${b})`;
        }

        const methodrandom=()=>{
            const color1=color();
            button1.textContent=color1;
             c1=parag(color1);
             document.body.style.backgroundImage =
                `linear-gradient(to right, ${c1}, ${c2})`;

            
            paras.textContent = `background-image: linear-gradient(to right, ${c1}, ${c2});`;
            
        }
         const methodrandom1=()=>{
            const color2=color();
            button2.textContent=color2;
             c2=parag(color2);
            
        document.body.style.backgroundImage =
          `linear-gradient(to right, ${c1}, ${c2})`;

        paras.textContent = `background-image: linear-gradient(to right, ${c1}, ${c2});`;
            
        }

        
        button1.addEventListener("click",methodrandom);
        button2.addEventListener("click",methodrandom1);
        paras.addEventListener('click',()=>{
          navigator.clipboard.writeText(paras.innerText);
          alert("Text copy to clipboard");
        });
        
        