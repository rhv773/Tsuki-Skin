const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

document.querySelectorAll(".rrr").forEach((element) => {
  observer.observe(element);
});











const cards = document.querySelectorAll('.ingredient-card');
const tagsContainer = document.querySelector('.details-group .tags'); 

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    card.classList.toggle('active-card');
    
    let statusIcon = card.querySelector('.icon-status');
    
    // *التعديل هون:* بدل ما نجيب الـ badge، بنجيب النص الموجود جوة الـ h3 (اسم المكون)
    let titleElement = card.querySelector('h3');
    let ingredientName = titleElement ? titleElement.textContent : '';
    
    if (statusIcon) {
      
      if (card.classList.contains('active-card')) {
        statusIcon.textContent = '✓';
        statusIcon.classList.add('check-mark');
      
        if (ingredientName) {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'tag';
         
          // بنخزن اسم المكون بالـ attribute عشان نعرف نحذفه بعدين
          tagSpan.setAttribute('data-ingredient', ingredientName); 
          
          // طباعة الاسم بدل البادج
          tagSpan.innerHTML = `${ingredientName} <button class="close-btn">&times;</button>`;
          
          // حدث الضغط على زر الإغلاق (X)
          tagSpan.querySelector('.close-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // ملاحظة: ضفنا الأقواس هون لأنها دالة (function)
            card.classList.remove('active-card');
            statusIcon.textContent = '+';
            statusIcon.classList.remove('check-mark');
            tagSpan.remove();
          });

          tagsContainer.appendChild(tagSpan);
        }
        
      } 
      else {
        statusIcon.textContent = '+';
        statusIcon.classList.remove('check-mark');
        
        // البحث عن العنصر باستخدام الـ data-ingredient لحذفه لما اليوزر يلغي الاختيار من الكارت نفسه
        const tags = tagsContainer.querySelectorAll('.tag');
        tags.forEach(tag => {
          if (tag.getAttribute('data-ingredient') === ingredientName) {
            tag.remove();
          }
        });
      }
      
    }
  });
});