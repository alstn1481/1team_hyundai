document.addEventListener("DOMContentLoaded" ,()=>{


    const btn = document.getElementById("menu")
    const btn2 = document.querySelector("aside button")
    const nav = document.querySelector("nav")
    const li = document.querySelectorAll("nav ul li")
    const aside = document.querySelector("aside")
    const register = document.getElementById("register")
    const div = document.querySelector("nav>div")
    const em = document.querySelectorAll("#seolmeong div em")
    // alert(em)

    

    const power = ['~280PS', '~650PS', '~290PS', '~184PS']
    const fuel = ['~10.6km/ℓ', '~3.7 km/kWh', '~13.5km/ℓ', '~14.3km/ℓ' ]
    let z = 0;

    btn.addEventListener("click", () =>{

        nav.style.opacity = 1;
        nav.style.zIndex = 888484;
        nav.style.animation = "blackening 0.5s ease-out both";
        z = 1;
        div.style.animation = "tenkai 1s ease-in both";
        aside.style.animation = "carcome 1s cubic-bezier(.66,-0.04,0,.84) both";
        register.style.animation = "pop 4s  both";
        
    })


    btn2.addEventListener("click",()=>{
        nav.style.opacity = 0;
        nav.style.zIndex = -1557;
        z = 0;

    })

    let rl;
    li.forEach((i,j) =>{
        i.addEventListener("mouseenter",()=>{
            rl = `images/nav-${j}.jpg`;
            console.log(rl)
            aside.style.backgroundImage = `url(${rl})`;
            em[0].textContent = `${power[j]}`
            em[1].textContent = `${fuel[j]}`


        })

    })

    /*bts.forEach( i =>{
        i.addEventListener("click",()=>
            {if( z===1)
            
        nav.style.opacity = 0;
        nav.style.zIndex = -1557;
        z = 0;
    } )
    }
    )*/


})//end of script