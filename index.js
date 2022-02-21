// console.log('hei');

//Initilize The VAriables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progress_bar = document.getElementById('progress_bar');
// var icon = document.getElementById('icon');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('song-item'));

let song_Array = [ {song_name: 'Wallian | Harnoor' , song_path: "1.mp3" ,song_cover: "1.jpg"} , 
                    {song_name: 'Kinna Chir | Prophec' , song_path: "2.mp3" ,song_cover: "2.jpg"} , {song_name: 'MoonLight | Harnoor' , song_path: "3.mp3" ,song_cover: "3.jpg"} , {song_name: 'Bijli | Harrdy Sadnhu' , song_path: "4.mp3" ,song_cover: "4.jpg"} , {song_name: 'Parshava | Harnoor' , song_path: "5.mp3" ,song_cover: "5.jpg"} , 
                 ]

songItems.forEach((element , i) => {
    
    element.getElementsByTagName('img')[0].src = song_Array[i].song_cover;
    element.getElementsByClassName('song_name')[0].innerText = song_Array[i].song_name;
});
// audioEleme.play();

//Handle PLay/ Pause Click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        masterSongName.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        masterSongName.style.opacity =0;
    }
})



// Listen events

audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate');
    var progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    // console.log(progress);
    progress_bar.value = progress;
});

progress_bar.addEventListener('change' ,()=> {
    audioElement.currentTime = (progress_bar.value * audioElement.duration)/100;
});

const makeAllPlay = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        // console.log(e.target.src);
        
       e.target.classList.remove('fa-play-circle') ;
       e.target.classList.add('fa-pause') ;

       audioElement.src = `/audio/${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterSongName.style.opacity =1;
       masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
        masterSongName.innerText =song_Array[songIndex].song_name;
    });
});

document.getElementById('next').addEventListener('click', ()=>
{
    if(songIndex >=4)
    {
        songIndex = 0;
    }
    else
    {
        songIndex++;
    }
    // e.target.src = ("/icons/pause-circle-regular.svg");
       audioElement.src = `${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       masterSongName.innerText =song_Array[songIndex].song_name;
   
});
document.getElementById('previous').addEventListener('click', ()=>
{
    if(songIndex <=0)
    {
        songIndex = 4;
    }
    else
    {
        songIndex--;
    }
    // e.target.src = ("/icons/pause-circle-regular.svg");
       audioElement.src = `${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       masterSongName.innerText =song_Array[songIndex].song_name;
});