const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close menu':'Open menu')});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const campaign=document.querySelector('.campaign img');let ticking=false;addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{const r=campaign.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)campaign.style.transform=`translateY(${(innerHeight/2-(r.top+r.height/2))*.08}px)`;ticking=false});ticking=true}},{passive:true});
document.getElementById('year').textContent=new Date().getFullYear();
