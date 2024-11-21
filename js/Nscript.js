document.addEventListener("DOMContentLoaded", () => {




    /*서연 js*/
    /*  N DNA (스크롤 >> 나타남) */
     const initalize = ()=>{
         windowHeight = window.outerHeight
         history.scrollRestoration = "manual";
       }
   
       let windowHeight = window.innerHeight
       initalize()
   
   
     const Text = document.querySelector('.details_textwrap')
     const Contents = document.querySelectorAll('.details_content')
     const Images = document.querySelectorAll('.details_image_container')
   
     const observer = new IntersectionObserver(entries=>{
         observer2(entries[0])
     },{threshold:0.5})
   
     const observer2 = entry=>{
         if(entry.isIntersecting){
             Text.style.animation = 'appear_bottom ease 1.5s'
             Text.style.opacity = 1
     
     setTimeout(()=>{
       Contents.forEach(item=>{
         item.style.animation = 'appear_bottom ease 1.5s'
         item.style.opacity = 1
       })
       
       setTimeout(()=>{
         Images.forEach(item=>{
           item.style.animation = 'appear_bottom ease 1.5s'
           item.style.opacity = 1
         })
       },600)
     },600)
     observer.unobserve(Text)
   }
   }
   observer.observe(Text)
   
   /* details_ performance*/
   /* width 조절(스크롤) */
   const walls = document.querySelectorAll('.details2_wall')
   const WallPaper = document.querySelector('.details2_wallpaper')
   let difference
   const WidthControlHandler = ()=>{
     difference = windowHeight - WallPaper.getBoundingClientRect().top
     
     if(difference<=150){
         walls.forEach(item=>
             item.style.width = `200px` )
     }
     else if(difference>150 && difference<700){
   
         walls.forEach(item=>
             item.style.width = `${-(1/3)*difference + 255 }px`)
     }
     else if(difference>=700){
   
         walls.forEach(item=>
             item.style.width = '0px')
     }
   
   }
   
   window.addEventListener('scroll', WidthControlHandler)
   
   
   /* 기능 소개(스크롤 >> 보이기) */
   
   const ContentImg = document.querySelector('.details2_content > img')
   const ContentImg2 = document.querySelector('.details2_content2 > img')
   const Text_2 = document.querySelector('.details2_textwrap h2')
   const Text_3 = document.querySelector('.details2_textwrap2 h2')
   const ContentItem = document.querySelector('.details2_content_item')
   const ContentItem2 = document.querySelector('.details2_content2_item')
   
   const details2Event = (item)=>{
   
   let difference = windowHeight - item.getBoundingClientRect().top
   
   if(difference > 150 && difference < item.offsetHeight+200){
       item.style.opacity = (difference-150)/(item.offsetHeight+50)
   }else if(difference>item.offsetHeight+200){
       item.style.opacity = 1
   }else{
       item.style.opacity = 0
   }
   }
   
   const details2TransitionEvent = (item)=>{
   
   let difference = windowHeight - item.getBoundingClientRect().top
   
   if(difference > 150 && difference < item.offsetHeight+200){
       item.style.opacity = (difference-150)/(item.offsetHeight+50)
       item.style.transform = `translateY(${-100*(difference-150)/(item.offsetHeight+50)}px)`
   }else if(difference>item.offsetHeight+200){
       item.style.opacity = 1
   }else{
       item.style.opacity = 0
   }
   }
   
   
   const ImgScrollHandler = ()=>{
   
   details2Event(Text_2)
   details2Event(Text_3)
   details2Event(ContentImg)
   details2Event(ContentImg2)
   details2TransitionEvent(ContentItem)
   details2TransitionEvent(ContentItem2)
   
   }
   
   window.addEventListener('scroll', ImgScrollHandler)
   


   /*민수 JS */


    let currentIndex = 0;
    let isClickable = true; // 클릭 가능 여부를 저장
    const slides = document.querySelectorAll("#slide .car");
    const totalSlides = slides.length;
    const carNames = document.querySelectorAll("#carName h2");
    const carInfos = document.querySelectorAll("#footer .carInfo");

    const nextButton = document.querySelector("#arrow button:last-child");
    const prevButton = document.querySelector("#arrow button:first-child");
    const indicators = document.querySelectorAll("#circle div");

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        carNames.forEach((carName, i) => {
            carName.style.transform = `translateX(-${index * 100}%)`;
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.remove("red");
            if (i === index) {
                indicator.classList.add("red");
            }
        });
    }

    const toLeftMove = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;

        // 차량 이름 애니니메이션
        const selectCar = document.querySelectorAll("#carName .select")[0];

        selectCar.classList.remove('select');
        selectCar.nextElementSibling.classList.add('select');

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));

        /* slide.style.transition = "left 3s"; */

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
        }, 2500);
    }

    const toRightMove = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;

        // 차량 이름 애니니메이션
        const selectCar = document.querySelectorAll("#carName .select")[0];

        selectCar.classList.remove('select');
        selectCar.previousElementSibling.classList.add('select');

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('clockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('clockwise_rotating'));

        /* slide.style.transition = "left 3s"; */

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
        }, 2500);
    }

    const counterclockwise_rotating = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;
        isClickable = false; // 클릭 비활성화

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('counterclockwise_rotating'));

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('counterclockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
            isClickable = true; // 클릭 활성화
        }, 2500);
    }

    const clockwise_rotating = () => {
        nextButton.disabled = true;
        prevButton.disabled = true;
        isClickable = false; // 클릭 비활성화

        // 바퀴에 회전 애니메이션 추가
        const leftTiers = document.querySelectorAll('.left_tier');
        const rightTiers = document.querySelectorAll('.right_tier');

        leftTiers.forEach(tier => tier.classList.add('clockwise_rotating'));
        rightTiers.forEach(tier => tier.classList.add('clockwise_rotating'));

        setTimeout(() => {
            // 바퀴 회전 애니메이션 제거
            const leftTiers = document.querySelectorAll('.left_tier');
            const rightTiers = document.querySelectorAll('.right_tier');

            leftTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));
            rightTiers.forEach(tier => tier.classList.remove('clockwise_rotating'));

            nextButton.disabled = false;
            prevButton.disabled = false;
            isClickable = true;  // 클릭 활성화
        }, 2500);
    }

    function changeInfo(index) {
        carInfos[index - 1].style.transform = "translateY(-100%)";
        carInfos[index - 1].style.opacity = "0";
        /* carInfos[index].style.transform = "translateY(100%)"; */
        carInfos[index].style.opacity = "1";
    }




    nextButton.addEventListener("click", () => {
        if (currentIndex == 3) return;

        //현재 Index 애니메이션
        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(-100%)";
        carInfos[currentIndex].style.opacity = "0";


        //바뀔 Index 애니메이션
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide(currentIndex);
        toLeftMove();

        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(0)";
        carInfos[currentIndex].style.opacity = "1";

        setTimeout(() => {
            carInfos[currentIndex - 1].style.transform = "translateY(100%)";
            carInfos[currentIndex - 1].style.transition = "none";
        }, 2000);
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex == 0) return;

        //현재 Index 애니메이션
        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(-100%)";
        carInfos[currentIndex].style.opacity = "0";

        //바뀔 Index 애니메이션
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide(currentIndex);
        toRightMove();

        carInfos[currentIndex].style.transition = "all 2s";
        carInfos[currentIndex].style.transform = "translateY(0)";
        carInfos[currentIndex].style.opacity = "1";

        setTimeout(() => {
            carInfos[currentIndex + 1].style.transform = "translateY(100%)";
            carInfos[currentIndex + 1].style.transition = "none";
        }, 2000);
    });

    carNames.forEach((carName, index) => {
        carName.addEventListener("click", () => {
            if (isClickable) {
                // Index 차이
                const x = currentIndex - index;

                //현재 Index 애니메이션
                if (currentIndex < index) counterclockwise_rotating();
                else if (currentIndex > index) clockwise_rotating();
                else return;

                carInfos[currentIndex].style.transition = "all 2s";
                carInfos[currentIndex].style.transform = "translateY(-100%)";
                carInfos[currentIndex].style.opacity = "0";

                //바뀔 Index 애니메이션
                currentIndex = index;
                updateSlide(currentIndex);

                carInfos[currentIndex].style.transition = "all 2s";
                carInfos[currentIndex].style.transform = "translateY(0)";
                carInfos[currentIndex].style.opacity = "1";

                setTimeout(() => {
                    carInfos[currentIndex + x].style.transform = "translateY(100%)";
                    carInfos[currentIndex + x].style.transition = "none";
                }, 2000);

                // 차량 이름 애니니메이션
                const selectCar = document.querySelectorAll("#carName .select")[0];

                selectCar.classList.remove('select');
                carName.classList.add('select');
            };
        });
    });


});