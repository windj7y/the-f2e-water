(function() {
  // 當滑動捲軸時
  window.onscroll = function() {
    // 取得捲軸上緣的位置，否則就取得 body 上緣的位置
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const distance = 182;
    
    const banner = document.querySelector('.js-banner');
    const lightning = document.querySelector('.js-lightning');
    if ((banner.offsetTop - distance) <= scrollPosition) {
      lightning.classList.add('animate__animated', 'animate__headShake', 'animate__repeat-2');
    }

    const bounceIn = document.querySelectorAll('.js-bounceIn');
    bounceIn.forEach((item, index) => {
      if ((item.offsetTop - distance) <= scrollPosition) {
        item.classList.add('animate__animated');

        switch(index) {
          case 2:
            item.classList.add('animate__bounceInLeft');
            break;
          default:
            item.classList.add('animate__bounceInRight');
        }
        
        item.classList.add('opacity-100');
      }
    })
  };
})();