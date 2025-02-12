function greetingMessage(){
  console.log("Ты программируешь на JavaScript!");
  };
  greetingMessage()

  let currentImageIndex=0;
  const images=["assets/images/cat1.jpg", "assets/images/cat2.jpg", "assets/images/cat3.jpg"];
  
  function updateImage(){
    const imgElement=document.querySelector(`.gallery_img`);
    imgElement.src=images[currentImageIndex];
  }

  function nextImage(){
    currentImageIndex=(currentImageIndex+1);
    updateImage();
  }
 
  function previousImage(){
    currentImageIndex=(currentImageIndex-1);
    updateImage();
  }
  
  