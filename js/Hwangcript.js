document.addEventListener("DOMContentLoaded", () => {

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
 
   const observer = new IntersectionObserver (entries=>{ 
     // IntersectionObserver : reflow(매 스크롤마다 함수동작 >> 성능저하 및 메인스레드 부하) 발생 방지 (리팩토링 목적)
     // entries : IntersectionObserverEntry를 담은 배열 (매개변수), 요소(observer2)의 가시성 상태와 관련된 속성들을 가지고 있음
     // IntersectionObserverEntry : 루트요소와 타겟요소의 교차(threshold를 만났을 때)의 상황 묘사
       observer2(entries[0])
   },{threshold:0.5}) // 요소가 50% 화면에 보일 때 실행할 함수
   //observer 콜백함수
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
   },600) // 시간 간격마다 요소를 띄움
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
 // window 화면 상단에서 한 요소의 가장 높은위치까지의 크기와 윈도우 높이를 비교
 
 let difference = windowHeight - item.getBoundingClientRect().top
 
 if(difference > 150 && difference < item.offsetHeight+200){
     item.style.opacity = (difference-150)/(item.offsetHeight+50) // padding 포함된 높이
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
 
 });