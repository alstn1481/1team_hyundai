document.addEventListener("DOMContentLoaded",() =>{
    const img1 = document.querySelectorAll("#nName img")
    const line = document.querySelector("#nName>div")
    const h2 = document.querySelector('#jeongsection h2')
    const p = document.querySelector('#jeongsection p')
    
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        console.log(currentScroll)
        if(currentScroll > 150){
            h2.style.animation = 'expand 2s cubic-bezier(0.215, 0.610, 0.255, 1.000) both'
            p.style.animation = 'come 2s 1s cubic-bezier(0.215, 0.610, 0.255, 1.000) both';
        };
        
        if (currentScroll > 350) {
           img1[2].style.animation = 'come 1.5s 1s ease-out both';
           img1[1].style.animation = 'come 1.5s 0.5s ease-out both';
           line.style.animation = 'come 1s 2.9s both' ;
           img1[0].style.animation = 'come 1s 3s both' ;
        } 

    });
    


})//end of script