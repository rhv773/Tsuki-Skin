document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".a, .title, .subtitle, .vipsese, .mnbv, .play-area-card, .d, .howw, .step, .sq, .sqq, .sqqq,  .sqqqq ,.lab, .beaa,.ewo, .atsc, .kids, .topi, .topii, .inn, .dete, .skin-footer .our, .card, .potwo, .dodo, .ddd, .dodoo, .doc, .lin, play-area-card, .vipdiv"
    );

    elements.forEach(function (element) {
        element.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(function (element) {
        observer.observe(element);
    });

});




const buttons=document.querySelectorAll('ww');
buttons.forEach(button => {button.addEventListener('click',() =>  {document.querySelector('ww.active')?.classList.remove('active');

    button.classList.add('active');
});});

const si=document.getElementById('searshicon');
const hawe=document.getElementById('search-overlay');
const ext=document.getElementById('close-btn');

si.addEventListener('click' ,() =>{
    hawe.classList.add('active');
});

ext.addEventListener('click' , () => {
    hawe.classList.remove('active');
} );


window.addEventListener('click', (event) => {
    // إذا كان العنصر المكبوس عليه هو الخلفية المعتمة نفسها وليس المحتوى الداخلي
    if (event.target === hawe) {
        hawe.classList.remove('active');
    }
});



const cartt =document.getElementById('cartwq');
const braccart=document.getElementById('cart-overlay');
const secart=document.getElementById('cart-drawer');
const exz=document.getElementById('close-cart-btn');

function openCart() {
    secart.classList.add('active');
    braccart.classList.add('active');
}


cartt.addEventListener('click', openCart);


// دالة لإغلاق السلة بإزالة الكلاس active
function closeCart() {
    secart.classList.remove('active');
    braccart.classList.remove('active');
}

// ربط زر الإكس (X) بدالة الإغلاق
exz.addEventListener('click', closeCart);

// ربط الخلفية المعتمة (Overlay) بدالة الإغلاق عند الضغط عليها
braccart.addEventListener('click', closeCart);


const memex =document.getElementById('threw');

const meme=document.getElementById('meme');
const hawememe=document.getElementById('meno-overlay');


meme.addEventListener('click' ,() =>{
    hawememe.classList.add('active');
});

memex.addEventListener('click' , () => {
    hawememe.classList.remove('active');
} );


window.addEventListener('click', (event) => {
    // إذا كان العنصر المكبوس عليه هو الخلفية المعتمة نفسها وليس المحتوى الداخلي
    if (event.target === hawememe) {
        hawememe.classList.remove('active');
    }
});



const newp=document.getElementById('newp');
const skinp=document.getElementById('skinp');
const makeupp=document.getElementById('makeupp');



const mgp=document.getElementById('mgp');
const namep=document.getElementById('namep');
const wasefp=document.getElementById('wasefp');
const prap=document.getElementById('prap');
const taqep=document.getElementById('taqep');



const mgp2=document.getElementById('mgp2');
const namep2=document.getElementById('namep2');
const wasefp2=document.getElementById('wasefp2');
const prap2=document.getElementById('prap2');
const taqep2=document.getElementById('taqep2');


const mgp3=document.getElementById('mgp3');
const namep3=document.getElementById('namep3');
const wasefp3=document.getElementById('wasefp3');
const prap3=document.getElementById('prap3');
const taqep3=document.getElementById('taqep3');


const mgp4=document.getElementById('mgp4');
const namep4=document.getElementById('namep4');
const wasefp4=document.getElementById('wasefp4');
const prap4=document.getElementById('prap4');
const taqep4=document.getElementById('taqep4');







const group1 = [
  { mgp: 's3ane.JPEG', hoverImg: 's3b.jpg', namep: 'Vitamin E SPF 50+', wasefp: 'Lightweight Vitamin E Sunscreen for All Skin Tones (50mL)', prap: '24.38 JOD', taqep: '★★★★☆ 20.3k reviews' }, // المنتج الأول
  { mgp2: 'q3an.PNG',hoverImg2: 'e3b.jpg', namep2: 'PDRN Hyaluronic Serum', wasefp2: 'Triple Revitalizing Complex ─ Combining PDRN, Hyaluronic Acid. (30mL)',  prap2: '28.00 JOD', taqeim: '★★★★⯪ 34.1k reviews' }, // المنتج الثاني
  { mgp3: 'l1an.png',hoverImg3: 'l1d.webp', namep3: 'Easy Bake Powder ', wasefp3: 'Blurs, sets & locks in makeup for an all-day (20g)',  prap3: '43.00 JOD', taqeim: '★★★★★ 56.2k review' }, // المنتج الثالث
  { mgp4: 'p2a.webp',hoverImg4: 'p2d.webp', namep4: 'Dior Addict Lip Glow Oil', wasefp4: '24h Hydrating Lip Oil - 3 Ultra-Glossy Finishes (6ML)',  prap4: '45.00 JOD', taqeim: '★★★★★ 44.2k review' }  // المنتج الرابع
];


const group2 = [
  { mgp: 'e2an.webp', hoverImg: 'e2b.jpg', namep: 'GIM PDRN Sleep Mask', wasefp: 'A sleeping mask infused with PDRN derived from Wando-grown gim (80mL)', prap: '24.30 JOD', taqep: '★★★★☆ 844 reviews' }, // المنتج الأول
  { mgp2: 'aha.webp', hoverImg2: 'e1b.jpg', namep2: 'The AHA BHA PHA Peel', wasefp2: 'Dramatically smooths skin texture and clears congested pores . (30mL)',  prap2: '20.14 JOD', taqeim: '★★★⯪☆ 20k reviews' }, // المنتج الثاني
  { mgp3: 'mamaa.png', hoverImg3: 'm1c.jpg', namep3: 'Advanced Snail Mucin ', wasefp3: 'K-Beauty Favorite Essence for Glass Skin(100ML)',  prap3: '24.26 JOD', taqeim: '★★★★★ 50k reviews' }, // المنتج الثالث
  { mgp4: 'annn.png', hoverImg4: 'q3b.jpg', namep4: '8 Hyaluronic Cleanser', wasefp4: 'A deeply hydrating gel cleanser designed to minimized the irritation .(150ML)',  prap4: '15.00 JOD', taqeim: '★★★★☆ 10K reviews' }  // المنتج الرابع
];


const group3 = [
  { mgp: 'h1a.webp',hoverImg: 'h1b.webp', namep: '1 Coat WOW Mascara', wasefp: 'Gives lashes dramatic volume & lift with just one coat(10ML)', prap: '25.00 JOD', taqep: '★★★★★ 55.9k reviews' }, // المنتج الأول
  { mgp2: 'f3a.webp',hoverImg2: 'f3e.webp', namep2: 'Mask Fit Red Cushion', wasefp2: 'Achieve Flawless, Long-Lasting Coverage (20ML)',  prap2: '20.00 JOD', taqeim: '★★★★★ 53k reviews' }, // المنتج الثاني
  { mgp3: 'k1an.jpg',hoverImg3: 'k2e.jpg', namep3: 'Dior Forever Skin Glow', wasefp3: 'Glow foundation - High coverage - 24-hour wear and 48-hour hydration(50ML)',  prap3: '59.00 JOD', taqeim: '★★★★★ 60.2k reviews' }, // المنتج الثالث
  { mgp4: 'b1a.jpg',hoverImg4: 'b1i.jpg', namep4: 'Juice Stick Gel Blush', wasefp4: 'Hydrating dewy gel blush stick, fresh-squeezed flush .(8G)',  prap4: '34.00 JOD', taqeim: '★★★★★ 41.7k reviews' }  // المنتج الرابع
];



function updateProducts(group) {
  // 1. المنتج الأول
  mgp.src = group[0].mgp;
  namep.textContent = group[0].namep;
  wasefp.textContent = group[0].wasefp;
  prap.textContent = group[0].prap;
  taqep.textContent = group[0].taqep;
  applyHover(mgp, group[0].mgp, group[0].hoverImg);

  // 2. المنتج الثاني (ملاحظة: مفاتيحك هنا فيها 2 مثل mgp2 و namep2)
  mgp2.src = group[1].mgp2;
  namep2.textContent = group[1].namep2;
  wasefp2.textContent = group[1].wasefp2;
  prap2.textContent = group[1].prap2;
  taqep2.textContent = group[1].taqeim; 
  applyHover(mgp2, group[1].mgp2, group[1].hoverImg2);

  // 3. المنتج الثالث
  mgp3.src = group[2].mgp3;
  namep3.textContent = group[2].namep3;
  wasefp3.textContent = group[2].wasefp3;
  prap3.textContent = group[2].prap3;
  taqep3.textContent = group[2].taqeim;
  applyHover(mgp3, group[2].mgp3, group[2].hoverImg3);

  // 4. المنتج الرابع
  mgp4.src = group[3].mgp4;
  namep4.textContent = group[3].namep4;
  wasefp4.textContent = group[3].wasefp4;
  prap4.textContent = group[3].prap4;
  taqep4.textContent = group[3].taqeim;
  applyHover(mgp4, group[3].mgp4, group[3].hoverImg4);
}



newp.addEventListener('click', function() {
  updateProducts(group1);
  colorBox1.style.display = 'none';
    colorBox2.style.display = 'none';
    colorBox3.style.display = 'block'; // يظهر ديف الأزرار للمنتج الثالث
    colorBox4.style.display = 'block'; // يظهر ديف الأزرار للمنتج الرابع

});

skinp.addEventListener('click', function() {
  updateProducts(group2);
  colorBox1.style.display = 'none';
    colorBox2.style.display = 'none';
    colorBox3.style.display = 'none';
    colorBox4.style.display = 'none';
});

makeupp.addEventListener('click', function() {
  updateProducts(group3);
colorBox1.style.display = 'none';
 colorBox2.style.display = 'block';
  colorBox3.style.display = 'block'; // يظهر ديف الأزرار للمنتج الثالث
    colorBox4.style.display = 'block'; // يظهر ديف الأزرار للمنتج الرابع

});




const bqw=document.getElementById('onecolor');
const bqww=document.getElementById('twcolor');
const bqwww=document.getElementById('thcolor');
const bqwwww=document.getElementById('focolor');
const bqwwwwi=document.getElementById('ficolor');
const bqwwwwii=document.getElementById('fiicolor');



const bqwr=document.getElementById('onecolor1');
const bqwrr=document.getElementById('onecolor2');
const bqwrrr=document.getElementById('onecolor3');
const bqwrrrr=document.getElementById('onecolor4');
const bqwrrrrr=document.getElementById('onecolor5');


bqwr.addEventListener('click', function() {
    mgp4.src = 'p2a.webp'; 



});

// الزر الثاني يغير الصورة للصورة الثانية
bqwrr.addEventListener('click', function() {
    mgp4.src = 'p2h.webp'; // استبدلي المسار بصورتك الثانية
});

// الزر الثالث يغير الصورة للصورة الثالثة
bqwrrr.addEventListener('click', function() {
    mgp4.src = 'p2j.webp'; // استبدلي المسار بصورتك الثالثة
});

// الزر الرابع يغير الصورة للصورة الرابعة
bqwrrrr.addEventListener('click', function() {
    mgp4.src = 'p2l.webp'; // استبدلي المسار بصورتك الرابعة
});









function applyHover(imgElement, defaultImg, hoverImgSource) {
    // إزالة أي أحداث سابقة لتجنب التداخل
    imgElement.onmouseenter = null;
    imgElement.onmouseleave = null;

    // عند وضع الماوس
    imgElement.onmouseenter = function() {
        if (hoverImgSource) {
            imgElement.src = hoverImgSource;
        }
    };

    // عند إبعاد الماوس (تعود للصورة الحالية الأساسية)
    imgElement.onmouseleave = function() {
        imgElement.src = defaultImg;
    };
}












function removeActiveFromAll() {
  newp.classList.remove('active');
  skinp.classList.remove('active');
  makeupp.classList.remove('active');
}

// 3. مراقبة الضغط على الزر الأول
newp.addEventListener('click', () => {
  removeActiveFromAll(); // نشيل الكبس عن الكل
  newp.classList.add('active'); // نكبس الزر الأول فقط
   bqw.style.backgroundColor = 'rgb(249, 207, 191)';
  bqww.style.backgroundColor = '#f7aacf';
  bqwww.style.backgroundColor = '#fdca7e';
  bqwwww.style.backgroundColor = '#e4e5e6';
  bqwwwwi.style.backgroundColor = '#ffffff';
  bqwwwwii.style.backgroundColor = '#ffffff';
  bqwr.style.backgroundColor='#ff7fc1;';
bqwrr.style.backgroundColor='#ea6666';
bqwrrr.style.backgroundColor='#eeeded';
bqwrrrr.style.backgroundColor='#d1f2cf';
bqwrrrrr.style.backgroundColor='#ffffff';


bqw.onclick = function() {
      mgp3.src = 'l1a.webp';
  };
 

bqww.onclick = function() {
      mgp3.src = 'l1f.webp';
  };

  bqwww.onclick = function() {
      mgp3.src = 'l1k.webp';
  };

bqwwww.onclick = function() {
      mgp3.src = 'l1h.webp';
  };




  console.log("تم كبس الزر الأول");
});

// 4. مراقبة الضغط على الزر الثاني
skinp.addEventListener('click', () => {
  removeActiveFromAll();
  skinp.classList.add('active'); // نكبس الزر الثاني فقط
  
  console.log("تم كبس الزر الثاني");
});

// 5. مراقبة الضغط على الزر الثالث
makeupp.addEventListener('click', () => {
  removeActiveFromAll();
  makeupp.classList.add('active'); // نكبس الزر الثالث فقط
  
  bqw.style.backgroundColor = '#fdeded';
  bqww.style.backgroundColor = '#F5D6C6';
  bqwww.style.backgroundColor = '#d6a48a';
  bqwwww.style.backgroundColor = '#a96341';
  bqwwwwi.style.backgroundColor = '#422b1f';
  bqwwwwii.style.backgroundColor = '#281d17';
bqwr.style.backgroundColor='#f17878';
bqwrr.style.backgroundColor='#a5416e';
bqwrrr.style.backgroundColor='#fd2f2f';
bqwrrrr.style.backgroundColor='#892142';
bqwrrrrr.style.backgroundColor='#ae4d35';


bqw.onclick = function() {
      mgp3.src = 'k1an.jpg';
  };
 

bqww.onclick = function() {
      mgp3.src = 'k2an.jpg';
  };

  bqwww.onclick = function() {
      mgp3.src = 'k3an.jpg';
  };

bqwwww.onclick = function() {
      mgp3.src = 'k4an.jpg';
  };

bqwwwwi.onclick = function() {
      mgp3.src = 'k5an.jpg';
  };

  bqwwwwii.onclick = function() {
      mgp3.src = 'k6an.jpg';
  };



bqwr.onclick = function() {
      mgp4.src = 'b1a.jpg';
  };

  bqwrr.onclick = function() {
      mgp4.src = 'guly2.webp';
  };
  bqwrrr.onclick = function() {
      mgp4.src = 'guly3.webp';
  };

  bqwrrrr.onclick = function() {
      mgp4.src = 'guly4.webp';
  };
  bqwrrrrr.onclick = function() {
      mgp4.src = 'guly5.webp';
  };






  console.log("تم كبس الزر الثالث");
});








const colorBox1 = document.getElementById('color-box-1');
const colorBox2 = document.getElementById('color-box-2');
const colorBox3 = document.getElementById('color-box-3');
const colorBox4 = document.getElementById('color-box-4');






function toggleProfile() {
  const profileModal = document.getElementById("profileSection");
  // يضيف كلاس active إذا مش موجود، أو بشيله إذا موجود
  profileModal.classList.toggle("active");
}

window.onclick = function(event) {
  const profileModal = document.getElementById("profileSection");
  if (event.target === profileModal) {
    profileModal.classList.remove("active");
  }
}





