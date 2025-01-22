setInterval(()=>{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    console.log(h,m,s);
    let sec_dot=document.querySelector('.sec_dot');
    let min_dot=document.querySelector('.min_dot');
    let hr_dot=document.querySelector('.hr_dot');

    sec_dot.style.transform='rotate(${s*6}deg)';
    min_dot.style.transform='rotate(${m*6}deg)';
    hr_dot.style.transform='rotate(${h*6}deg)';

})




