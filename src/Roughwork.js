<script type="text/javascript">(function() {
  $(document).ready(function() {
    var slides, slideshow;
    slides = ['https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515100/0.jpg', 
    'https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515111/fea-2019-white-coat-ceremony.jpg',
     'https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515112/landing-banner.jpg',
      'https://dk-media.s3.amazonaws.com/media/1vjrh/headers/3515128/midage_group_inside_doctors_001_web_banner_center.jpg'];
    slideshow = new DK.Slideshow('#header_img', slides, {
      duration: 5,
      responsive: true
    });
    return slideshow.start();
  });

}).call(this);
</script>