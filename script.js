const slides = Array.from(document.querySelectorAll('.slide'));
const slideSize = slides[0].getBoundingClientRect().width;
const track = document.querySelector('.cerousel');
const serviceWrap = document.querySelector('.service_wrap');
const bloges = document.querySelector('.blogs');
// nav bar in mobile version 
window.addEventListener('scroll',()=>{
    const header = document.querySelector('#header');
    if(window.scrollY>0){
            header.classList.add('header_active')
        }else{
        header.classList.remove('header_active')
    }
})
document.querySelector('.barger').addEventListener('click',()=>{
    const navBar = document.querySelector('.nav_bar');
    navBar.classList.toggle('toggle_nav')
})

// hero slider ------
function move(track, currentSlide, moveTo){
    track.style.transform = `translateX(-${moveTo.style.left})`;
    currentSlide.classList.remove('current_slide');
    moveTo.classList.add('current_slide')
}
slides.forEach((slide,i)=>{
    slide.style.left = `${slideSize * i}px`
})
// right btn -----------
document.querySelector('.right').addEventListener('click',()=>{
    const currentSlide = document.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    move(track, currentSlide, nextSlide)
    
})
// left btn -----------
document.querySelector('.left').addEventListener('click',()=>{
    const currentSlide = document.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    move(track, currentSlide, prevSlide);
})


// sercive section -----------------------
const serviceArr = [
    {
        icon:'./img/icon/mountain.png',
        pera:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        title:'climb'
    },
    {
        icon:'./img/icon/camera.png',
        pera:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        title:'Photography'
    },
    {
        icon:'./img/icon/sea.png',
        pera:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        title:'Nature'
    },
    {
        icon:'./img/icon/hammock.png',
        pera:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        title:'Chill'
    },
    {
        icon:'./img/icon/map.png',
        pera:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        title:'Travel'
    },
    {
        icon:'./img/icon/suitcase.png',
        pera:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        title:'Suitcase'
    }
]
serviceArr.map((service)=>{
    let html = `
    <div class="service">
        <div class="icon"><img src="${service.icon}" alt=""></div>
        <p>${service.pera}</p>
        <a href="#">${service.title}</a>
    </div>
    `;
    serviceWrap.innerHTML += html
})

// blog section ------------------------------------------------
const blogArr = [
    {
        img:'./img/blog/blog-1.jpg',
        name:'jhon doe',
        time:'february 19, 2000',
        title:'Taking Feedback Impersonally',
        body:'With value???, we don\'t make you start from an empty slate. All you have to do is to pic ...'
    },
    {
        img:'./img/blog/blog-2.jpg',
        name:'jhon doe',
        time:'february 19, 2000',
        title:'Taking Feedback Impersonally',
        body:'With value???, we don\'t make you start from an empty slate. All you have to do is to pic ...'
    },
    {
        img:'./img/blog/blog-3.jpg',
        name:'jhon doe',
        time:'february 19, 2000',
        title:'Taking Feedback Impersonally',
        body:'With value???, we don\'t make you start from an empty slate. All you have to do is to pic ...'
    }
]
blogArr.map((blog)=>{
    let html = `
    <div class="blog">
        <div class="blog_img">
            <img src="${blog.img}">
        </div>
        <div class="blog_desc">
            <span>${blog.name} | ${blog.time}</span>
            <h3>${blog.title}</h3>
            <p>${blog.body}</p>
        </div>
    </div>
    `;
    bloges.innerHTML += html
})

