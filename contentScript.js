function speeder(){
    let videos = document.querySelectorAll('video')
    let add = document.querySelector('.ytp-ad-overlay-container.ytp-rounded-overlay-ad');
    let skip = document.querySelector('button.ytp-skip-ad-button');
    let unskip = document.querySelector('.ytp-ad-text.ytp-ad-preview-text')
    let unskip2 = document.querySelector('.ytp-preview-ad__text')
        if(add){
	  add.style.display = 'none';	
	}
        if(skip || unskip || unskip2){
	  videos.forEach(function(vid){
	    	vid.muted = true;
	    	vid.playbackRate = 10;	
			console.log('video muted........')
	     })
        
            console.log('Feel Free Speeding: ........😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁')
        }
	if( skip ) {
          skip.click();
          console.log('Feel Free Skiping: .......😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁') 	
	}
}

setInterval(() => {
    setTimeout(() => {
        speeder();
    }, 500)
}, 500);
