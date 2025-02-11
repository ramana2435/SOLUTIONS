const progressBar = document.getElementById("progress-bar");


window.addEventListener("scroll", function () {
  
  
    
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight; 
    
    const currentScroll = window.scrollY; 
    
    const scrollProgress = (currentScroll / scrollableHeight) * 100; 
    
  progressBar.style.width = `${scrollProgress}%`;
});