//All images link have been linked, they have all come websites which were recommended or came up using the Creative Commons licenses tool in google images
const formatTime = num => (num/100).toFixed(2).replace(".",":");
//solution to making 500 into 5:00
var timer;
var timeNotChanged=0;
var messsagesTimer;
var keysCollected=false;
var bookCollected=false;
var time=500;
var talkedToDadBefore=false;
var foundPhone=false;
var bookGiven=false;
var count=0;
var firstMathAnswer;
var secondMathAnswer;
var thirdMathAnswer;
var fourthMathAnswer;
var mathsQuestionsCorrect;
var safeUnlocked=false;
var talkedToSisterBefore=false;
var givenNecklace=false;
var flaskedCollected=false;
var bottleCollected=false;
var flashLightOn = false;
var haveBook=false;
var haveNecklace=false;
var haveCupboardKey=false;
 var shownInventory=false;
var shownChecklist=false;
var talkToBrother=false;
var mathsHomeworkDone=false;
var lastPageMaths=false;
var safeAttempts=0;
var mathsAttempts=0;
var attemptsRemaining=3;
var foundCharger=false;
var phoneCharged=false;
var gotCupboardKey=false;
var taskRemaining=5;
var timerRanOut=false;
var safeAttemptsRanOut=false;
var playerName;
var friendName;
var favouriteDrink;
var hintsOn=false;
var keyAttempts=0;
var safeLastPage=false;
var loseScreen=false;
var timeRemainingWhenBottleCollected=0;
var timeRemainingWhenkeysCollected=0;
var timeRemainingWhenWalletCollected=0;
var timeRemainingWhenFlaskedCollected=0;
var timeRemainingWhenPhoneCharged=0;

function set(){
    
    document.body.style='background-color: white;'
}

function setback(){
    
    var back = sessionStorage.getItem('Mode');
    
    
    if (back=='light'){
        
          document.body.style='color:black; background-color: white;'
    } else if (back=='dark'){
        
          document.body.style='color:white; background-color: black;'
       var elem=document.getElementById('passcode');
        if (elem!=null)
        document.getElementBy('passcode').style='color:black;';
        
        document.getElementById('inventory').style='color:white;'  
        document.getElementById('checklist').style='color:white;'     
    }
    
}

function accessFeatures(){
    
   light = document.getElementById('light')
   dark = document.getElementById('dark')
   
    
   if(light.checked==true){
       
       mode='light'
       sessionStorage.setItem('Mode',mode)
       
   } else if (dark.checked==true){
       
       mode='dark'
       sessionStorage.setItem('Mode',mode)
       
   } 
   
    nText = document.getElementById('nText')
    lText  = document.getElementById('lText')
     sText = document.getElementById('sText')

    if(nText.checked==true){
    
        text='nText'
       sessionStorage.setItem('Text',text)
       
       
       } else if (lText.checked==true){
           
           text='lText'
           sessionStorage.setItem('Text',text)
           
       } else if (sText.checked==true){
           
           text='sText'
           sessionStorage.setItem('Text',text)
    
       }
    
}


function localAccess(){
    
    
   var light2 = document.getElementById('light')
   var dark2 = document.getElementById('dark')
   
    if(dark2.checked==true){
        
        
        
        document.getElementById('title').style='background-color: black'
    
     document.getElementsByClassName("gameLanding1stLeftCol").style='background-color: black;'
    
        
        
        
        document.getElementsByClassName('gameLandingRightCol').style='background-color: black;'
        
        document.body.style='color:white; background-color: black;'
        
      
        
    } else if(light2.checked==true){
        
        
         document.body.style='color:black; background-color: white;'
        
        document.getElementById('title').style='background-color: white'
        
    }
    var elem=document.getElementById('landing');
      nText = document.getElementById('nText')
    lText  = document.getElementById('lText')
     sText = document.getElementById('sText')
    
    if(nText.checked==true){
        if (elem!=null)
document.getElementById('landing').style.fontSize='100%'
           document.style.fontSize='100%' 
        
    } else if (lText.checked==true){
        
    //    document.style.fontSize='130%'
        if (elem!=null)
        document.getElementById('landing').style.fontSize='130%'
       document.style.fontSize='130%' 
    } else if (sText.checked==true){
    if (elem!=null)    
document.getElementById('landing').style.fontSize='80%'
           document.style.fontSize='80%' 
    }
    
    
    
}

function change(){
 var hint=document.getElementById('hints').value;
 playerName = document.getElementById('PlayerName').value ;
        friendName = document.getElementById('FriendName').value;
        favouriteDrink=document.getElementById('FavouriteDrink').value;
    if (hint=="yes")
        {
            hintsOn=true;
            
        }
        sessionStorage.setItem('Name',playerName);
        sessionStorage.setItem('fName',friendName);
     sessionStorage.setItem('FavouriteDrink',favouriteDrink);
    sessionStorage.setItem('hintsOn',hintsOn);
    if((playerName==='') || (friendName==='') || (favouriteDrink==='Select Drink')){
       
       alert('Fields are empty')
   }else
       window.open('gameScreen1.html', '_self');
  

    
    
    

    
}   

     function receive() {
             playerName = sessionStorage.getItem('Name');
            friendName = sessionStorage.getItem('fName');
            favouriteDrink=sessionStorage.getItem('FavouriteDrink');
            hintsOn=JSON.parse(sessionStorage.getItem('hintsOn'));
         var CurrentMode= sessionStorage.getItem('Mode');
          var size = setSize();
         if (loseScreen==false)
             {
         if(CurrentMode=='light'){
             
          document.getElementById('leftcol').style=size;
             
          
         } else if (CurrentMode=='dark'){
             
            
          
            
            
           document.getElementById('leftcol').style='background-color: black; color:white;' + size;
            
             document.getElementById('rightcol').style='background-color: black; color:white'
             var elem=document.getElementById('inventoryChecklist'); 
             if (elem!=null)
               { document.getElementById("inventoryChecklist").style='color:white;'          
                document.getElementById('inventory').style='color:white;'
             document.getElementById('checklist').style='color:white;';
               }
                document.getElementById('title').style='background-color: black; color:white'
             document.getElementsByClassName('secondHeading').style='background-color:color:white';
          document.body.style.backgroundColor='black'
             
         document.body.style.color='white';     
             
           
         }
    
            
        }
     }
function setSize(){
    
     var textSize = sessionStorage.getItem('Text')
         
    if(textSize=='nText'){
             
             document.getElementById('leftcol').style='font-size: 100%;'

             return 'font-size: 100%;'
             
         } else if(textSize=='lText'){
             
              document.getElementById('leftcol').style='font-size: 140%;'
           
              return 'font-size: 140%;'
         } else if(textSize=='sText'){
             
              document.getElementById('leftcol').style='font-size: 90%;'
               
             return 'font-size: 90%;'
         }
         
    
    
    
    
    
}

function startTimer(){
      timeNotChanged++;
    timer = window.setInterval(displayTimer,1000);
    messsagesTimer=window.setInterval(messages,1000)
   
}

function displayTimer()
{
    time--;
    timeNotChanged++;
    
  var timeText = document.getElementById('timer');
    
    if (time === 499) {
    time = 459;
  } else if (time === 399) {
    time = 359;
  } else if (time === 299) {
    time = 259;
  } else if (time === 199) {
    time = 159;
  } else if (time === 99) {
    time = 59;
  }
    if (time>0)
        {
  timeText.innerHTML =formatTime(time);    
     
        }
    if (time<31 && time>1)
        {
            var elem=document.getElementById('clock');
           
            document.getElementById('rightcol').innerHTML+='<audio loop  id="clock" src="Sounds/countdownClock.ogg" type="audio/ogg"> </audio>'//Sound Link:
            document.getElementById('clock').play();
              
                }
            else if (time==0)
                {
                    timerRanOut=true
                    clearInterval(timer);
                    nextPage();
                    window.open('LosingScreen.html',"_self")
                }
        
}
function nextPage() {
  clearInterval(timer);
    
    sessionStorage.setItem('hintsOn',hintsOn);
    sessionStorage.setItem('FavouriteDrink',favouriteDrink)
   sessionStorage.setItem('Name',playerName);
        sessionStorage.setItem('fName',friendName);
    sessionStorage.setItem('timeNotChanged',timeNotChanged);
  sessionStorage.setItem('timerem', time);
    sessionStorage.setItem('bookCollected',bookCollected);
    sessionStorage.setItem('keysCollected',keysCollected);
    sessionStorage.setItem('talkedToDadBefore',talkedToDadBefore);
    sessionStorage.setItem('foundPhone',foundPhone);
    sessionStorage.setItem('bookGiven',bookGiven);
     sessionStorage.setItem('safeUnlocked',safeUnlocked)
    sessionStorage.setItem('talkedToSisterBefore',talkedToSisterBefore);
 sessionStorage.setItem('givenNecklace',givenNecklace);
    sessionStorage.setItem('flaskedCollected',flaskedCollected);
    sessionStorage.setItem('bottleCollected',bottleCollected);
    sessionStorage.setItem('haveBook',haveBook);
    sessionStorage.setItem('talkToBrother',talkToBrother);
    sessionStorage.setItem('mathsHomeworkDone',mathsHomeworkDone);
    sessionStorage.setItem('lastPageMaths',lastPageMaths);
    sessionStorage.setItem('mathsAttempts',mathsAttempts);
    sessionStorage.setItem('safeAttempts',safeAttempts);
    sessionStorage.setItem('attemptsRemaining',attemptsRemaining)
    sessionStorage.setItem('foundCharger',foundCharger);
    sessionStorage.setItem('gotCupboardKey',gotCupboardKey);
    sessionStorage.setItem('taskRemaining',taskRemaining);
    sessionStorage.setItem('safeAttemptsRanOut',safeAttemptsRanOut);
    sessionStorage.setItem('timerRanOut',timerRanOut);
    sessionStorage.setItem('timeRemainingWhenBottleCollected',timeRemainingWhenBottleCollected);
    sessionStorage.setItem('timeRemainingWhenFlaskedCollected',timeRemainingWhenFlaskedCollected);
    sessionStorage.setItem('timeRemainingWhenKeysCollected',timeRemainingWhenkeysCollected);
    sessionStorage.setItem('timeRemainingWhenPhoneCharged',timeRemainingWhenPhoneCharged);
    sessionStorage.setItem('timeRemainingWhenWalletCollected',timeRemainingWhenWalletCollected);
  
}
function messages()
{
     if (time==459 && foundPhone==true && foundCharger==true)
        {
           document.getElementById('leftcol').innerHTML+='<p>['+friendName+']: Hey, you ready for tonight? I can not wait!</p>'
        }
    else if(time==430 && foundPhone==true && foundCharger==true)
        {
              document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']: I am gonna be leaving soon. See you in a bit!</p>'
        }
   else if (time==359 && foundPhone==true && foundCharger==true)
       {
            document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:On my way now. Your bus is later, right?</p>'
       }
    else if (time==330 && foundPhone==true && foundCharger==true)
        {
            document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:I bet you are looking forward to some'+favouriteDrink+'!</p>'
        }
    else if(time==259 && foundPhone==true && foundCharger==true)
        {
            document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:When are you showing up again</p>'
        }
    else if (time==250 && foundPhone==true && foundCharger==true)
        {
                        document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:I am not gonna wait around forever. When are you getting here</p>'
        }
    else if (time==159 && foundPhone==true && foundCharger==true)
        {
              document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:Come on dude. I’m not waiting much longer. Just lemme know when you’re on the bus.</p>'
        }
    else if(time==130 && foundPhone==true && foundCharger==true)
        {
             document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:You are missing out!'+favouriteDrink+' is in everything here!</p>'
        }
    else if (time==59 && foundCharger==true && foundPhone==true)
        {
            document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+']:Hurry up you are gonna miss all the fun!</p>'
        }
        else if (time==30 && foundCharger==true && foundPhone==true)
            {
                document.getElementById('leftcol').innerHTML+='<br> <p>['+friendName+'] You are such a buzzkill for missing this!</p>'
            }
}
function loadTimer() {
 var timeText = document.getElementById('timer');
 
  if (sessionStorage.getItem('timerem') === null) {
    timeText.innerHTML = 'ERROR';
  } else {
      time--;
      timeNotChanged++;
    time = sessionStorage.getItem('timerem');
      
    timeText.innerHTML = formatTime(time);
    
      startTimer();
  
  }
}
function MoveToHallway()
{
        if (keysCollected==true)
            {
        nextPage();
        window.open('gameScreen2.html',"_self")
    }
    else 
        {
            window.alert("Need to find keys before you can leave bedroom");
            document.getElementById('leftcol').innerHTML+="["+playerName+"]: I better find my keys before I leave my room!"
        }
}
function clickMap(id)
{ var elem=document.getElementById('unlock');        
 if (elem ==null)
     
            document.getElementById('rightcol').innerHTML+='<audio id="unlock" src="Sounds/unlockSound_freesound.wav" type="audio/wav"> </audio>'//Sound Link: https://freesound.org/people/TolerableDruid6/sounds/456154/
     
         document.getElementById('unlock').play();
    if (id=="drawer1" && keysCollected==false)
    {   
        alert("KEYS FOUND!");
    keysCollected=true;
     taskRemaining--;
       
        timeRemainingWhenkeysCollected=time;
      
       
   document.getElementById('leftcol').innerHTML+='<p>['+playerName+']:YES! there are my keys!</p> <br><p class="inventory">Keys Added to Inventory</p><br><p class="checklist">TASK COMPLETED, '+taskRemaining+' tasks left</p>' ;
     keyAttempts++;
    }
if (id=="drawer2" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
        keyAttempts++;
    }
    if (id=="drawer3" &&keysCollected==false)
    {
        alert("keys aren't in this drawer,Try Again")
          keyAttempts++;
    }
    if (id=="drawer4" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
          keyAttempts++;
    }
    if (id=="drawer5" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
          keyAttempts++;
    }
    if (id=="drawer6" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
          keyAttempts++;
    }
    if (id=="drawer7" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
          keyAttempts++;
    }
    if (id=="drawer8" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
          keyAttempts++;
    }
    if (id=="drawer9" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
      keyAttempts++;
    }
    if (id=="drawer10" &&keysCollected==false)
    {
        alert("Keys aren't in this drawer,Try Again")
      keyAttempts++;
    }
    if (keyAttempts==3 &&hintsOn)
        {
            document.getElementById('keysAttempts').innerHTML+='<button onclick="keysHint()">HINT</button>'
        }
}

function room(buttonName)
{
   
   if (safeLastPage==false)
       {
        var media = document.getElementById("doorSound");//Sound Link: https://www.freesoundeffects.com/free-track/open-door-1-426743/
const playPromise = media.play();
if (playPromise !== null){//this is to stop the pause play exception chrome browser has been throwing.
    playPromise.catch(() => { media.play(); })
}
    var elem1=document.getElementById('safeAttemptsDia')
    if (elem1!=null)
        elem1.parentNode.removeChild(elem1);
       }
    if (safeLastPage==true)
        {
            safeLastPage=false;
        }
           if (buttonName=="parents"){
          
               if (bottleCollected==false)
                   {
        document.getElementById('img').src='Images/ParentsBedroomPixabay_with_bottle.jpg';//Image links ParentsRoom: https://pixabay.com/photos/bedroom-sleep-bed-hotel-room-5664223/ Bottle: https://pixabay.com/photos/bedroom-sleep-bed-hotel-room-5664223/
        document.getElementById('img').alt='Pictures of bedroom';
        document.getElementById('location').innerHTML="Parents Bedroom"
                   }
               else if (bottleCollected==true)
                   {
                    document.getElementById('img').src='Images/ParentsBedroomPixabay_without_bottle.jpg';
                        document.getElementById('img').alt='Pictures of bedroom';
        document.getElementById('location').innerHTML="Parents Bedroom"
                   }
                   var elem11=document.getElementById('bookDia');
            if (elem11 !=null)
                elem11.parentNode.removeChild(elem11);
        
               
               parentsRoom();
    }
       
    if (buttonName==="hallway")
        {
              var elem12=document.getElementById('parentMap')
    if (elem12!=null)
              elem12.parentNode.removeChild(elem12);
            var elem13=document.getElementById('sisterMap');
            if (elem13 !=null)
                elem13.parentNode.removeChild(elem13);
           if (bookCollected==true)
               {
            document.getElementById('img').src='Images/upstairsHallway_wikimedia.jpg'//Image Link:https://commons.wikimedia.org/wiki/File:Sixes,_Oregon_-_Patrick_Hughes_House_-_interior_28_-_upstairs_hallway.jpg
             document.getElementById('img').alt="Picture of hallway"
            document.getElementById('location').innerHTML="The Hallway"
                  
               }
            else if (bookCollected==false)
                {
                     document.getElementById('img').src='Images/upstairsHallway_with_book_wikimedia.jpg'//Book Image link:http://clipart-library.com/clipart/2074778.html
             document.getElementById('img').alt="Picture of hallway"
            document.getElementById('location').innerHTML="The Hallway"
                     if (document.getElementById('bookHallway') ==null) 
                   document.getElementById('rightcol').innerHTML+='<map name="hallway" id="bookHallway"><area coords="526,486,22" shape="circle" onclick="book()"></map>';
                    document.getElementById('img').useMap="#hallway";
                }
                   document.getElementById('introMessage').innerHTML='[System]:You enter the hall. Obvious exits are your room,your SISTER’S ROOM, your PARENTS’ ROOM and DOWNSTAIRS. What do you do?<br> <button id="parents" onclick=room("parents")>Parents Bedroom</button> <button onclick=room("sister")>Sisters Room</button><button onclick=room("downStairs")>DownStairs</button></p>'
         

 var elem4=document.getElementById('passcode');        
 if (elem4 !=null)
 elem4.parentNode.removeChild(elem4);

        var  elem8=document.getElementById('safeDia');
            if (elem8!=null)
                elem8.parentNode.removeChild(elem8);
            var elem9=document.getElementById('safeSuccess')
            if (elem9!=null)
                elem9.parentNode.removeChild(elem9);
            var elem10=document.getElementById('sisInt')
            if (elem10 !=null)
                elem10.parentNode.removeChild(elem10);
          
        }
    if (buttonName=="sister")
        {
            var elem12=document.getElementById('bookHallway')
            if (elem12 !=null)
                elem12.parentNode.removeChild(elem12);
             var elem11=document.getElementById('bookDia');
            if (elem11 !=null)
                elem11.parentNode.removeChild(elem11);
            if (givenNecklace==false)
                {
            document.getElementById('img').src='Images/SisterBedroom_with_Sister_Wallet_Pixabay.jpg'//sister room image link:https://pixabay.com/de/photos/bett-schlafzimmer-teppich-vorh%C3%A4nge-1839183/   sister  image link:https://www.pngjoy.com/preview/k8u1s0o7n1x6n8_teenager-relaxation-transparent-png/ wallet image link:https://pixabay.com/de/photos/brieftasche-geld-pfund-wette-4262349/
            document.getElementById('img').alt="Picture of Sister's bedroom"
            document.getElementById('location').innerHTML="Sister's Bedroom"
                }
            else if (givenNecklace==true)
                {
                     document.getElementById('img').src='Images/SisterBedroom_with_Sister_Necklace_Pixabay.jpg' //necklace image link:https://pixabay.com/de/illustrations/bijouterie-schmuck-halskette-juwel-5579142/
            document.getElementById('img').alt="Picture of Sister's bedroom"
            document.getElementById('location').innerHTML="Sister's Bedroom"
                }
                    sistersRoom();
            
        }
    if (buttonName=="downStairs")
        {
           
             nextPage();
       
            window.open('gameScreen3.html',"_self")
        
            
        }
    if (buttonName=="living_Room")
        {
             
           var elem1=document.getElementById('dadInt')
            if (elem1!=null)
                     elem1.parentNode.removeChild(elem1); 
            var elem2=document.getElementById('cupboardInt');
            if (elem2!=null)
                elem2.parentNode.removeChild(elem2);
            var elem3=document.getElementById('chargerInt');
            if (elem3!=null)
                elem3.parentNode.removeChild(elem3);
            var elem4=document.getElementById('"kitchenMap"');
            if (elem4!=null)
                elem4.parentNode.removeChild(elem4);
            
           
            
            if (foundPhone==false)
                {
                    document.getElementById('door').src='Images/LivingRoom_with_brother_phone_Pixabay.jpg'//living room image link: https://pixabay.com/de/photos/wohnzimmer-sofa-innenraum-zimmer-2732939/ brother image link:https://www.clipartkey.com/view/iibihJx_asian-man-png-person-with-arms-crossed-png/ phone image link:https://pixabay.com/de/vectors/smartphone-handy-telefon-mobil-5087176/
            document.getElementById('door').alt="Picture of your Living room"
            document.getElementById('location').innerHTML="Living Room";
                }
            else if (foundPhone==true)
                {
                    document.getElementById('door').src='Images/LivingRoom_with_brother_Pixabay.jpg'
            document.getElementById('door').alt="Picture of your Living room"
            document.getElementById('location').innerHTML="Living Room";
                }
         
            document.getElementById('door').useMap='#livingroom';
            livingRoom();
            
        }
    if (buttonName=="upstairs")
        {
            
            nextPage();
           
            window.open('gameScreen2.html',"_self");
           
        }
    if (buttonName=="kitchen")
        {
            var elem1=document.getElementById('brotherMap');
            if (elem1!=null)
                elem1.parentNode.removeChild(elem1);
            if (foundCharger==true && bookGiven==false)
                {
            document.getElementById('door').src='Images/Kitchen_with_dad_Pixabay.jpg';//kitchen image link:https://pixabay.com/de/photos/k%C3%BCche-home-innenraum-modern-zimmer-2165756/ Dad image link:http://clipart-library.com/clip-art/man-transparent-background-19.htm
           document.getElementById('door').alt="Picture of your Kitchen";
            document.getElementById('door').useMap="#cupboards";
            document.getElementById('location').innerHTML="Kitchen";
                }
            if (foundCharger==false && bookGiven==false)
                {
                    document.getElementById('door').src='Images/Kitchen_with_dad_charger_Pixabay.jpg';//charger image link:https://www.pngarea.com/view/18100d7a_mobile-battery-png-battery-charging-png-transparent-images/
           document.getElementById('door').alt="Picture of your Kitchen";
            document.getElementById('door').useMap="#cupboards";
            document.getElementById('location').innerHTML="Kitchen";
                }
            if (bookGiven==true && foundCharger==false)
                {
                    document.getElementById('door').src='Images/Kitchen_with_dad_charger_book_Pixabay.jpg';//closed book image link:https://pixabay.com/vectors/book-closed-black-blank-library-306468/
           document.getElementById('door').alt="Picture of your Kitchen";
            document.getElementById('door').useMap="#cupboards";
            document.getElementById('location').innerHTML="Kitchen";
                }
            if (bookGiven==true && foundCharger==true)
                {
                    document.getElementById('door').src='Images/Kitchen_with_dad_book_Pixabay.jpg';
           document.getElementById('door').alt="Picture of your Kitchen";
            document.getElementById('door').useMap="#cupboards";
            document.getElementById('location').innerHTML="Kitchen";
                }
                    var elem=document.getElementById('bro');
            if (elem!=null)
                elem.parentNode.removeChild(elem);
            kitchen();
        }
    if (buttonName=="frontDoor")
        {
            
            var elem1=document.getElementById('dadInt')
            if (elem1!=null)
                     elem1.parentNode.removeChild(elem1); 
    
                
            var elem2=document.getElementById('cupboardInt');
            if (elem2!=null)
                elem2.parentNode.removeChild(elem2);
             var elem3=document.getElementById('chargerInt');
            if (elem3!=null)
                elem3.parentNode.removeChild(elem3);
            var elem4=document.getElementById('bro');
            if (elem4!=null)
                elem4.parentNode.removeChild(elem4);
            var elem5=document.getElementById('brotherMap');
            if (elem5!=null)
                elem5.parentNode.removeChild(elem5);
            var elem6=document.getElementById('"kitchenMap"');
            if (elem6!=null)
                elem6.parentNode.removeChild(elem6);
         document.getElementById('door').useMap="#frontDoor";
            document.getElementById('door').src="Images/hallway_pexels.jpg"//image link: https://www.pexels.com/photo/brown-wooden-staircase-with-brass-chandelier-3288103/
            document.getElementById('door').alt="Picture of your front door"
            document.getElementById('location').innerHTML="Front Door"
            document.getElementById('intro').innerHTML='[System]:You stand at the front door. Do you have everything to go out? If not, You may enter the LIVING ROOM, or go back upstairs to the HALL. <br> <button onclick=room("upstairs")> UpStairs</button><button onclick=room("living_Room")>Living room</button><button onclick=room("kitchen")>Kitchen</button>'
            frontDoor();
            
    }
    }
    function parentsRoom()
{
    
            var elem12=document.getElementById('bookHallway')
            if (elem12 !=null)
                elem12.parentNode.removeChild(elem12);
       
        var elem2=document.getElementById('passcode');        
 if (elem2 !=null)
 elem2.parentNode.removeChild(elem2);
    var elem3=document.getElementById('attempts');
 if (elem3 !=null)
 elem3.parentNode.removeChild(elem3);
    document.getElementById('img').useMap='#parentsBottle'
    if (bottleCollected==false)
        {
         
    document.getElementById('rightcol').innerHTML+= '<map id="parentMap" name="parentsBottle"><area target="" alt="safe" title="safe"  coords="360,92,451,203" shape="rect" onclick="safe()"><area target="" alt="bottle" title="bottle" coords="588,242,639,334" shape="rect" onclick="bottle()"></map>'
        }
    if (bottleCollected==true)
        {
          document.getElementById('rightcol').innerHTML+='<map id="parentMap" name="parentsBottle"><area target="" alt="safe" title="safe"  coords="360,92,451,203" shape="rect" onclick="safe()"></map>'   
        }
   
    
   if (talkedToSisterBefore==false && bottleCollected==false)
        {
            document.getElementById('introMessage').innerHTML='[System]:You enter your parents room,You can still leave through the HALL.<br> <button onclick=room("hallway")>Hall </button><br>['+playerName+']: Don’t they have a bottle of '+favouriteDrink+ ' somewhere in here?';
        }
    else if (talkedToSisterBefore==true && bottleCollected==false && safeUnlocked==false)
        {
            document.getElementById('introMessage').innerHTML='[System]:You enter your parents room,You can still leave through the HALL.<br> <button onclick=room("hallway")>Hall </button><br>['+playerName+']:Don’t they have a bottle of '+favouriteDrink+ ' somewhere in here? I could check out that safe to see if there is anything in there my sister would want so I get my wallet back!';
        }
     else if (talkedToSisterBefore==true && bottleCollected==true && safeUnlocked==false)
         {
             document.getElementById('introMessage').innerHTML='[System]:You enter your parents room,You can still leave through the HALL.<br> <button onclick=room("hallway")>Hall </button><br>['+playerName+']: I could check out that safe to see if there is anything in there my sister would want so I get my wallet back!';
         }
     else if ( talkedToSisterBefore==false && bottleCollected==true)
         {
             document.getElementById('introMessage').innerHTML='[System]:You enter your parents room,Do you need anything in here?You can still leave through the HALL.<br> <button onclick=room("hallway")>Hall </button><br>'
              
         }
    else if (talkedToSisterBefore==true && bottleCollected==true && safeUnlocked==true)
        {
            
             document.getElementById('introMessage').innerHTML='[System]:You enter your parents room,Do you need anything in here?You can still leave through the HALL.<br> <button onclick=room("hallway")>Hall</button>'
        }
    else if (talkedToSisterBefore==true && bottleCollected==false && safeUnlocked==true)
        {
             document.getElementById('introMessage').innerHTML='[System]:You enter your parents room,You can still leave through the HALL.<br> <button onclick=room("hallway")>Hall </button><br>['+playerName+']:Don’t they have a bottle of '+favouriteDrink+ ' somewhere in here?'
        }
    
        }

function sistersRoom()
{
    var elem=document.getElementById('book');
    if (elem!=null)
 elem.parentNode.removeChild(elem);
    
    
    
    document.getElementById('introMessage').innerHTML='[System]:You enter your sister’s room to a truly terrifying scene. She’s got your wallet! Will you TALK to her? Or will you go back to the HALL?<br> <button onclick=room("hallway")>Hall </button>';
  
    document.getElementById('img').useMap='#sisters'
    document.getElementById('rightcol').innerHTML+='<map id="sisterMap" name="sisters"><area alt="sister" title="sister" coords="588,214,837,522" shape="rect" onclick="sisterInteraction();"></map>'
    if (givenNecklace==false)
        {
             
    document.getElementById('introMessage').innerHTML='[System]:You enter your sister’s room to a truly terrifying scene. She’s got your wallet! Will you TALK to her? Or will you go back to the HALL?<br> <button onclick=room("hallway")>Hall </button>';
    
        }
            else if (givenNecklace==true)
    {
         
    document.getElementById('introMessage').innerHTML='[System]:You enter your sister room, you have already got your wallet back from her. Will you go back to the HALL?<br> <button onclick=room("hallway")>Hall </button>';
          document.getElementById('rightcol').innerHTML+='<img  id="necklace" src="Images/necklace_pixabay.PNG" class="clsThirdImgSisterBedroom" style="width:22px;height:40px;" alt="Picture of your wallet">';
    }

        
}

function kitchen()
{

     var elem1=document.getElementById('frontDoor');
 if (elem1 !=null)
 elem1.parentNode.removeChild(elem1);

    if (foundCharger==false)
        {
            document.getElementById('rightcol').innerHTML+='<map id="kitchenMap" name="kitchenCharger"><area target="" alt="charger" title="charger"  coords="157,477,64,404" shape="rect" onclick="collectCharger()"><area target="" alt="dad" title="dad" coords="394,121,554,463" shape="rect" onclick="dadInteraction()"> <area shape="rect" coords="280,279,335,324" onclick=clickCupboard("cupboard") title="kitchen cupboard"><area shape="rect" coords="282,327,334,372" onclick=clickCupboard("correctCupboard") title="kitchen cupboard"></map>'
            document.getElementById('door').useMap="#kitchenCharger"
        }
    if (foundCharger==true)
        {
            document.getElementById('rightcol').innerHTML+='<map id="kitchenMap" name="kitchenCharger"><area target="" alt="dad" title="dad" coords="394,121,554,463" shape="rect" onclick="dadInteraction()"> <area shape="rect" coords="280,279,335,324" onclick=clickCupboard("cupboard") title="kitchen cupboard"><area shape="rect" coords="282,327,334,372" onclick=clickCupboard("correctCupboard") title="kitchen cupboard"></map>'
          document.getElementById('door').useMap="#kitchenCharger";
        }
        
   if (bookGiven==false)
       {
            document.getElementById('intro').innerHTML='[System]:You enter you the kitcen knowing your flask is in here, and you see your dad,he sits at the kitchen table, waiting to talk to you. You can go back to the Front door or the living room. <br> <button onclick=room("frontDoor")>Front Door </button> <button onclick=room("living_Room")>Living Room</button>';
       }
    if (bookGiven==true && flaskedCollected==false)
        {
            
            document.getElementById('intro').innerHTML='[System]:You enter you the kitcen knowing your flask is in here, and you have already collected the cupboard key from your dad, you can try to see which cupboard is it in (one on the left of the oven). You can go back to the Front door or the living room. <br> <button onclick=room("frontDoor")>Front Door </button> <button onclick=room("living_Room")>Living Room</button>';
        }
    if (bookGiven==true && flaskedCollected==true)
        {
             document.getElementById('intro').innerHTML='[System]:You enter you the kitcen having already collected your flask in here.Is there anything else you need in here? You can go back to the Front door or the living room. <br> <button onclick=room("frontDoor")>Front Door </button> <button onclick=room("living_Room")>Living Room</button>';
        }
       

}
function livingRoom()
{
    
 var elem=document.getElementById('frontDoor');
 if (elem !=null)
 elem.parentNode.removeChild(elem);
 
 if (foundPhone==true)
     {
   document.getElementById('intro').innerHTML='[System]:You enter you the living room, and you see your brother and he has your phone.Should you talk to him and make a deal? You can go back to the Front door or the living Kitchen. <br> <button onclick=room("frontDoor")>Front Door </button> <button onclick=room("kitchen")>kitchen</button>';
     }
 if (foundPhone==false)
     {
          document.getElementById('intro').innerHTML='[System]:You enter you the living room, and you see your brother, you have already done his maths homework and got your phone back.You can go back to the Front door or the living Kitchen. <br> <button onclick=room("frontDoor")>Front Door </button> <button onclick=room("kitchen")>kitchen</button>';
     }
    
    document.getElementById('rightcol').innerHTML+='<map id="brotherMap" name="livingroom"><area target="" alt="brother" title="brother"  coords="601,127,738,480" shape="rect" onclick="brotherInteraction();"></map>'
  
        
}
function book()
{ 
  if (talkedToDadBefore==false && bookCollected==false)
        {
            document.getElementById('img').src='Images/upstairsHallway_wikimedia.jpg'
             document.getElementById('img').alt="Picture of hallway"
            document.getElementById('location').innerHTML="The Hallway"
   document.getElementById('leftcol').innerHTML+="<p id='bookDia'>["+playerName+"]:Oh look, there’s some dumb book sitting here. Yoink.</p>";
     
            var elem=document.getElementById('bookHallway')
            if (elem !=null)
                elem.parentNode.removeChild(elem);
    bookCollected=true;
    haveBook=true;
         document.getElementById('leftcol').innerHTML+='<p class="inventory">Book Added to Inventory</p><br>';
        }
 if (talkedToDadBefore==true && bookCollected==false)
        {
            document.getElementById('leftcol').innerHTML+="<p id='bookDia'>["+playerName+"]:This is that book dad was talking about! Better give it back to him!</p>";
             var elem=document.getElementById('bookHallway')
            if (elem !=null)
                elem.parentNode.removeChild(elem);
            bookCollected=true;
        haveBook=true;
             document.getElementById('img').src='Images/upstairsHallway_wikimedia.jpg'
             document.getElementById('img').alt="Picture of hallway"
            document.getElementById('location').innerHTML="The Hallway"
            document.getElementById('leftcol').innerHTML+='<p class="inventory">Book Added to Inventory</p><br>';
        }
 }
function dadInteraction()
{
   
 if (talkedToDadBefore!=true && bookCollected!=true && bookGiven!=true)
     {
        talkedDadBefore="true";
         talkedToDadBefore=true;
         document.getElementById('leftcol').innerHTML+="<p id='dadInt'> [DAD]: You want the cupboards key? Not happening! I am too busy trying to find that book I was reading <br>  ["+playerName+"]: oh ok! I will go look for it now!";
      
     }
   else  if (talkedToDadBefore==true && bookCollected!=true && bookGiven!=true)
        {
            var elem=document.getElementById('dadInt')
            if (elem!=null)
                {
                     document.getElementById('dadInt').innerHTML="<p>[Dad]: You have not got my book why are you talking to me!!</p>";
           
                }
                    else document.getElementById('leftcol').innerHTML+="<p id='dadInt'>[Dad]: You have not got my book why are you talking to me!!</p>";
      
        }
   else if (talkedToDadBefore!=true && bookCollected==true && bookGiven!=true)
     {
        talkedDadBefore="true";
         talkedToDadBefore=true;
         if (foundCharger==false)
             {
                 document.getElementById('door').src="Images/Kitchen_with_dad_charger_book_Pixabay.jpg"
             }
         if (foundCharger==true)
             {
                 document.getElementById('door').src="Images/Kitchen_with_dad_book_Pixabay.jpg"
             }
           var elem=document.getElementById('dadInt')
            if (elem==null)
                {
         document.getElementById('leftcol').innerHTML+="<p id='dadInt'> [DAD]: You want the cupboards key? Not happening! I am too busy trying to find that book I was reading!<br>["+playerName+"]:Wait!I have already found the book you are looking for<br>[Dad]: Thanks, I needed this badly!! You have done me a real solid here. I guess I can look the other way this time. Here is the cupbords key.What you're looking for should be in one of the cupboards to the left of the oven. <br> ['System']:You listen to your dad whisper to himself, encouraging the protagonist of the book. You are not even sure if he knows you are there. Weirdo.</p>";
                }
         else{
              document.getElementById('dadInt').innerHTML="<p> [DAD]: You want the cupboards key? Not happening! I am too busy trying to find that book I was reading… </p>";
         document.getElementById('dad').innerHTML+="<p>["+playerName+"]:Wait!I have already found the book you're looking for"
            document.getElementById('dadInt').innerHTML+="<p>[Dad]: Thanks, I needed this badly!! You have done me a real solid here. I guess I can look the other way this time. Here’s the cupbords key.What you are looking for should be in one of the cupboards to the left of the oven. <br> [System]:You listen to your dad whisper to himself, encouraging the protagonist of the book. You are not even sure if he knows you are there. Weirdo.</p>";
         }
         bookGiven=true;   
         gotCupboardKey=true;
       
                 document.getElementById('leftcol').innerHTML+='<p class="inventory">Book Removed from Inventory</p><br><p class="inventory">Cupboard Key added to inventory</p>';
     }
    else if (talkedToDadBefore==true &&bookCollected==true && bookGiven!=true)
        {
            gotCupboardKey=true;
               bookGiven=true;
                     if (foundCharger==false)
            if (foundCharger==false)
             {
                 document.getElementById('door').src="Images/Kitchen_with_dad_charger_book_Pixabay.jpg"
             }
         if (foundCharger==true)
             {
                 document.getElementById('door').src="Images/Kitchen_with_dad_book_Pixabay.jpg"
             }
            var elem=document.getElementById('dadInt')
            if (elem==null)
            document.getElementById('leftcol').innerHTML+="<p id='dadInt'>[Dad]: Thanks, I needed this badly!! You have done me a real solid here. I guess I can look the other way this time. Here is the cupbords key.What you are looking for should be in one of the cupboards to the left of the oven. <br> [System]:You listen to your dad whisper to himself, encouraging the protagonist of the book. You are not even sure if he knows you are there. Weirdo.</p>";
            else
                  document.getElementById('dadInt').innerHTML="<p id='dadInt'>[Dad]: Thanks, I needed this badly!! You have done me a real solid here. I guess I can look the other way this time. Here is the cupbords key.What you're looking for should be in one of the cupboards to the left of the oven. <br> [System]:You listen to your dad whisper to himself, encouraging the protagonist of the book. You are not even sure if he knows you are there. Weirdo.</p>";
       
         document.getElementById('leftcol').innerHTML+='<p class="inventory">Book Removed from Inventory</p><br><p class="inventory">Cupboard Key added to inventory</p>';
        }
    else if (bookGiven==true && flaskedCollected==false)
        {
             var elem=document.getElementById('dadInt')
            if (elem==null)
            document.getElementById('leftcol').innerHTML+="<p id='dadInt'>[Dad]:I told you the flask was in one of the cupboards to the left of the oven!</p>"
            else
                document.getElementById('dadInt').innerHTML="[Dad]:I told you the flask was in one of the cupboards to the left of the oven!"
        }
    else if (bookGiven==true && flaskedCollected==true)
        {
              var elem=document.getElementById('dadInt')
            if (elem==null)
            document.getElementById('leftcol').innerHTML+="<p id='dadInt'>[Dad]:I'm Reading my Book, go Away!</p>"
            else
                document.getElementById('dadInt').innerHTML="<p>[Dad]:I'm Reading my Book, go Away!</p>"
        }
}
function sisterInteraction()
{
    
    if (talkedToSisterBefore!=true && safeUnlocked!=true)
    {
        
    document.getElementById('leftcol').innerHTML+="<p id='sisInt'>[Sister]:Why are you so surprised? You have owed me £7.50 ever since I bought dinner 5 years ago! With interest, that is like £2000! The wallet is staying with me until you can pay me back with something of equal or greater value!<br>["+playerName+"]: I will look for something then</p>" 
    talkedToSisterBefore=true;
    }
    
    else if (talkedToSisterBefore==true && safeUnlocked!=true)
        {
            var elm=document.getElementById('sisInt')
            if (elm==null)
             document.getElementById('leftcol').innerHTML+="<p id='sisInt'>[Sister]:Go Away until you get something that repays all that money you have stole from me!</p>"
            else 
            document.getElementById('sisInt').innerHTML='<p id="sisInt">[Sister]:Go Away until you get something that repays all that money you have stole from me!</p>';
        }
    else if (safeUnlocked==true && givenNecklace!=true && talkedToSisterBefore==true)
    {
        var elm=document.getElementById('sisInt')
        if (elm==null)
        document.getElementById('leftcol').innerHTML+="<p id='sisInt'>[Sister]:Thanks for the necklace that makes up for all the free meals the last 5 years!<br>["+playerName+"]:can I now have my wallet back please<br>[sister]:Yea here you go</p>"
        else
            document.getElementById('sisInt').innerHTML="<p id='sisInt'>[Sister]:Thanks for the necklace that makes up for all the free meals the last 5 years!<br>["+playerName+"]:can I now have my wallet back please<br>[sister]:Yea here you go</p>"
        givenNecklace=true;
        haveNecklace=false;
        timeRemainingWhenWalletCollected=time;
       document.getElementById('img').src="Images/SisterBedroom_with_Sister_Necklace_Pixabay.jpg"
      
         taskRemaining--;
         document.getElementById('leftcol').innerHTML+='<p class="inventory">Necklace Removed from Inventory</p><br><p class="inventory">Wallet added to inventory</p><br><p class="checklist">TASK COMPLETED, '+taskRemaining+'tasks left</p>' ;
    }
    else if (givenNecklace==true)
        {
            var elm=document.getElementById('sisInt')
            if (elm==null)
            document.getElementById('leftcol').innerHTML+="<p id='sisInt'>[Sister]:Go away loser</p>" 
        else 
            document.getElementById('sisInt').innerHTML="<p id='sisInt'>[Sister]:Go away loser</p>"
        }
}
function loadValues(){
    time=parseInt(sessionStorage.getItem('timerem'));
   keysCollected=JSON.parse(sessionStorage.getItem('keysCollected'));
    talkedToDadBefore=JSON.parse(sessionStorage.getItem('talkedToDadBefore'));
            bookCollected=JSON.parse(sessionStorage.getItem('bookCollected')); 
    bookGiven=JSON.parse(sessionStorage.getItem('bookGiven'));
    if (bookCollected==true)
            {
    var elem=document.getElementById('book');
    if (elem != null)
 elem.parentNode.removeChild(elem);
            }
safeUnlocked=JSON.parse(sessionStorage.getItem('safeUnlocked'));
 talkedToSisterBefore=JSON.parse(sessionStorage.getItem('talkedToSisterBefore'));
 givenNecklace=JSON.parse(sessionStorage.getItem('givenNecklace'));
flaskedCollected=JSON.parse(sessionStorage.getItem('flaskedCollected'));
bottleCollected=JSON.parse(sessionStorage.getItem('bottleCollected'));
talkToBrother=JSON.parse(sessionStorage.getItem('talkToBrother'));   
mathsHomeworkDone=JSON.parse(sessionStorage.getItem('mathsHomeworkDone'));
lastPageMaths=JSON.parse(sessionStorage.getItem('lastPageMaths'));
mathsAttempts= parseInt(sessionStorage.getItem('mathsAttempts'),10);
safeAttempts= parseInt(sessionStorage.getItem('safeAttempts'),10);
attemptsRemaining=parseInt(sessionStorage.getItem('attemptsRemaining'),10);
foundCharger=JSON.parse(sessionStorage.getItem('foundCharger'));
gotCupboardKey=JSON.parse(sessionStorage.getItem('gotCupboardKey'));
foundPhone=JSON.parse(sessionStorage.getItem('foundPhone'));
taskRemaining=parseInt(sessionStorage.getItem('taskRemaining'),10);
    timeNotChanged=parseInt(sessionStorage.getItem('timeNotChanged'),10);
    timerRanOut=JSON.parse(sessionStorage.getItem('timerRanOut'));
    safeAttemptsRanOut=JSON.parse(sessionStorage.getItem('safeAttemptsRanOut'));
    timeRemainingWhenBottleCollected=parseInt(sessionStorage.getItem('timeRemainingWhenBottleCollected'));

    timeRemainingWhenFlaskedCollected=parseInt(sessionStorage.getItem('timeRemainingWhenFlaskedCollected'));
        timeRemainingWhenkeysCollected=parseInt(sessionStorage.getItem('timeRemainingWhenKeysCollected'));
        timeRemainingWhenPhoneCharged=parseInt(sessionStorage.getItem('timeRemainingWhenPhoneCharged'));
        timeRemainingWhenWalletCollected=parseInt(sessionStorage.getItem('timeRemainingWhenWalletCollected'));
     
}

     function frontDoor()
{
    document.getElementById('rightcol').innerHTML+='<map id="frontDoor" name="frontDoor">  <area coords="527,436,663,485,660,123,531,157" shape="poly" onclick="frontDoorClick()" title="front door"></map>'
}
function brotherInteraction()
{
    if (talkToBrother==false)
        {
    document.getElementById('leftcol').innerHTML+="<p id='bro'>["+playerName+"]:hey!Give my phone back, I need it! <br>[Brother]:Hmmm,Lets Make a deal,You do my maths homework and you get it back<br>Will you do the maths homework?<br> <button onclick=mathsHomework()>Maths</button></p>"
    talkToBrother=true;
        }
    else if (talkToBrother==true && mathsHomeworkDone==false )
        {
            var elem=document.getElementById('bro')
            if (elem != null)
            document.getElementById('bro').innerHTML="<p id='bro'>[BROTHER]: don't talk to me to you have my maths homework done! <br> Will you do the maths homework?<br> <button onclick=mathsHomework()>Maths</button>"
        else
            {
                document.getElementById('leftcol').innerHTML+="<p id='bro'>[BROTHER]: don't talk to me to you have my maths homework done! <br> Will you do the maths homework?<br> <button onclick=mathsHomework()>Maths</button>"
            }
        }
    else if (mathsHomeworkDone==true && foundPhone==false)
        {
           
           var elem=document.getElementById('bro')

            foundPhone=true;
           document.getElementById('door').src='Images/LivingRoom_with_brother_Pixabay.jpg'
            if (foundCharger==true)
                {
                    timeRemainingWhenPhoneCharged=time;
                    if (elem==null)
                document.getElementById('leftcol').innerHTML+="<p id='bro'>[BROTHER]:Thanks! You saved me loads of time! Anyway you can have your phone back.<br>["+playerName+"]:It is out of charge but luckily I collected that charger from the kitchen!<br>["+playerName+"]:That marketing was not lying! That charger can charge! And fast, too! <br>[System]: Your phone reaches 110% in a matter of seconds, and you pocket it soon after. </p>"
                    else
                        document.getElementById('bro').innerHTML="<p id='bro'>[BROTHER]:Thanks! You saved me loads of time! Anyway you can have your phone back.<br>["+playerName+"]:It is out of charge but luckily I collected that charger from the kitchen!<br>["+playerName+"]:That marketing was not lying! That charger can charge! And fast, too! <br>[System]: Your phone reaches 110% in a matter of seconds, and you pocket it soon after. </p>"
                taskRemaining--;
         document.getElementById('leftcol').innerHTML+='<p class="inventory">Phone added to Inventory</p><br><p class="checklist">TASK COMPLETED, '+taskRemaining+'tasks left</p>' ;
                }
             if(foundCharger==false)
                {
                    if (elem==null)
                     document.getElementById('leftcol').innerHTML+='<p id="bro">[BROTHER]:Thanks! You saved me loads of time! Anyway you can have your phone back.<br>['+playerName+']:It’s out of charge. I  have a super fast portable charger ultra V2.5 (patent pending) somewhere in the house, .</p>'
                    else 
                        document.getElementById('bro').innerHTML='<p id="bro">[BROTHER]:Thanks! You saved me loads of time! Anyway you can have your phone back.<br>['+playerName+']:It’s out of charge. I  have a super fast portable charger ultra V2.5 (patent pending) somewhere in the house, .</p>'
                      document.getElementById('leftcol').innerHTML+='<p class="inventory">Phone added to Inventory</p>';
                }
        }
    else if (foundPhone==true)
        {
            var elem=document.getElementById('bro')
            if (elem==null)
            document.getElementById('leftcol').innerHTML+="<p id='bro'>[BROTHER]: Stop talking to me or you will miss your bus</p>"
            else 
                document.getElementById('bro').innerHTML="<p id='bro'>[BROTHER]: Stop talking to me or you will miss your bus</p>"
        }
        }
    
function firstMathsAnswer()
{
    var elem=document.getElementById('first');
 if (elem !=null)
 elem.parentNode.removeChild(elem);
    
    firstMathAnswer=window.prompt("Enter The Number for the red square:",0)
     if (isNaN(firstMathAnswer))
   
document.getElementById('rightcol').innerHTML+='<p id="first"  class="firstAnswerOutput">'+0+'</p>';
  else if (firstMathAnswer==null)
    {
        
    }   
    else 
    document.getElementById('rightcol').innerHTML+='<p id="first" class="firstAnswerOutput">'+firstMathAnswer+'</p>';
 
}
function secondMathsAnswer()
{
       var elem=document.getElementById('second');
 if (elem !=null)
 elem.parentNode.removeChild(elem);
    secondMathAnswer=window.prompt("Enter The Number for the Green square:",0)
     if (isNaN(secondMathAnswer))
        
document.getElementById('rightcol').innerHTML+='<p id="second"  class="secondAnswerOutput">'+0+'</p>';
else if (secondMathAnswer==null)
    {
        
    }
    else 
    document.getElementById('rightcol').innerHTML+='<p id="second"  class="secondAnswerOutput">'+secondMathAnswer+'</p>';
}
function thirdMathsAnswer()
{
     var elem=document.getElementById('third');
 if (elem !=null)
 elem.parentNode.removeChild(elem);
    thirdMathAnswer=window.prompt("Enter The Number for the Blue square:",0);
     if (isNaN(thirdMathAnswer) )
document.getElementById('rightcol').innerHTML+='<p id="third"  class="thirdAnswerOutput">'+0+'</p>';
else if (thirdMathAnswer==null)
    {
        
    }
    else 
    document.getElementById('rightcol').innerHTML+='<p id="third"  class="thirdAnswerOutput">'+thirdMathAnswer+'</p>';
}
function fourthMathsAnswer()
{
      var elem=document.getElementById('fourth');
 if (elem !=null)
 elem.parentNode.removeChild(elem);
    fourthMathAnswer=window.prompt("Enter The Number for the Yellow square:",0);
    if (isNaN(fourthMathAnswer))        
document.getElementById('rightcol').innerHTML+='<p id="fourth"  class="fourthAnswerOutput">'+0+'</p>';
else if (fourthMathAnswer==null)
    {
        
    }
    else 
    document.getElementById('rightcol').innerHTML+='<p id="fourth"  class="fourthAnswerOutput">'+fourthMathAnswer+'</p>';
       
}

function checkMathsAnswers()
{
    mathsAttempts++;
    mathsQuestionsCorrect=true;
    if (firstMathAnswer!=7)
        mathsQuestionsCorrect=false;
    if (secondMathAnswer!=9)
        mathsQuestionsCorrect=false;
    if (thirdMathAnswer!=19)
        mathsQuestionsCorrect=false;
    if (fourthMathAnswer!=7)
        mathsQuestionsCorrect=false;
        
        if (mathsQuestionsCorrect==true)
            {
                window.alert("MATHS HOMEWORK DONE CORRECTLY!!");
                mathsHomeworkDone=true;
                openGameScreen3();
            }
     if(mathsQuestionsCorrect==false)
        {
            window.alert("MATHS HOMEWORK IS INCORRECT, TRY AGAIN");
        }
    if (hintsOn==true && mathsAttempts==2)
        {
            document.getElementById('mathsHint').innerHTML+='<button onclick="mathsHint()">Hint</button>';
        }
}
function safe()
{
    if (talkedToSisterBefore==false)
        {
            var elem=document.getElementById('safeDia')
            if (elem==null)
            document.getElementById('leftcol').innerHTML+="<p id='safeDia'>["+playerName+"]:I got no need to open this safe!";
            else  document.getElementById('safeDia').innerHTML="<p id='safeDia'>["+playerName+"]:I got no need to open this safe!";
        }
   else if (safeUnlocked==true)
        {
            var elem=document.getElementById('safeDia')
            if (elem==null)
    document.getElementById('leftcol').innerHTML+="<p id='safeDia'>["+playerName+"]:I have already got the necklace for my sister, I don't need to steal anymore of my parents stuff.</p>"           
        else document.getElementById('safeDia').innerHTML="<p id='safeDia'>["+playerName+"]::I have already got the necklace for my sister, I don't need to steal anymore of my parents stuff.</p>";
        }
    else if (safeUnlocked!=true)
        {
               safeLastPage=true;
              var elem2=document.getElementById('parentMap')
    elem2.parentNode.removeChild(elem2);
            attemptsRemaining=3-safeAttempts;

    document.getElementById('introMessage').innerHTML='['+playerName+']:Let crack this code and open the safe to see if anything in here can help me!I only have 3 attempts so I need to be Careful<br><button onclick=room("parents")>leave safe</button><span id="safeHint"></span><br><p id="attempts">Attempts Remaining:'+attemptsRemaining+'</p>';
    document.getElementById('img').src='Images/safeUpClose.jpg';
    document.getElementById('img').alt='Up close image of a safe';
    document.getElementById('location').innerHTML="safe";
    document.getElementById('img').width='300px';
    document.getElementById('rightcol').innerHTML+='<p id="passcode">CRACK THE SAFE<br> 3 Digits, clues are:<br> <span class="numbers">3</span> <span class="numbers">6</span> <span class="numbers">8</span> One Number is correct and well placed <br> <span class="numbers">3</span> <span class="numbers">8</span> <span class="numbers">7</span>  Nothing is correct<br> <span class="numbers">2</span> <span class="numbers">7</span> <span class="numbers">6</span>  One number is correct but wrong placed <br><span class="numbers">4</span> <span class="numbers">7</span> <span class="numbers">1</span> Two Numbers are correct but wrongly placed <br> <button onclick="codePuzzleAnswer()">Enter Passcode</button></p>';
             var elem10=document.getElementById('passcode');
            if (elem10!=null)
        document.getElementById('passcode').style='color:black';
        reloadSafeHint();
}
}
function codePuzzleAnswer()
{
        

    var answer=window.prompt("Enter the Safe Passcode",0)
if (isNaN(answer))
    {
     window.alert("ENTER A NUMBER");
}
    else if (answer==null)
        {
            
        }
   else  if (answer==164)
        {
            window.alert('PASSCODE IS CORRECT! SAFE OPENED')
         
             var med = document.getElementById("unlock");
const play = med.play();
if (play !== null){
    play.catch(() => { med.play(); })
        }
            document.getElementById('leftcol').innerHTML+='<p id="safeSuccess">['+playerName+']:YES That is it, it worked! There is a necklace that I can give to my sister and get my wallet back!</p>'
         haveNecklace=true;
            safeUnlocked=true;
            safeAttempts++;
     var elem=document.getElementById('passcode');        
  if (elem !=null)
 elem.parentNode.removeChild(elem);
  document.getElementById('leftcol').innerHTML+='<p class="inventory">Necklace added to Inventory</p>';
    room('parents');
         
        }
    else if (answer != 164)
        {
            
        window.alert('INCORRECT PASSCODE ENTERED!TRY AGAIN!')
        document.getElementById('leftcol').innerHTML+='<p id="safeAttemptsDia">['+playerName+']:That is not right, I need to try again!</p>'
          safeAttempts+=1;
            attemptsRemaining=3-safeAttempts;
            document.getElementById('attempts').innerHTML='Attempts Remaining:'+attemptsRemaining;
          
        }
    if (safeAttempts==2 && hintsOn==true)
        {
            
            document.getElementById('safeHint').innerHTML+='<button onclick="safeHint()">Hint</button>'
        }
    if (safeAttempts==3 && safeUnlocked==false)
        {
            
        safeAttemptsRanOut=true;
            nextPage();
          window.open('LosingScreen.html',"_self")
        }
}
function clickCupboard(cupboard)
{
    if (bookGiven!=true)
        {
              var elem=document.getElementById('audio');        
 if (elem ==null)
     {
            document.getElementById('rightcol').innerHTML+='<audio id="audio" src="Sounds/lockSound_freesound.wav" type="audio/wav"> </audio>'
     }
         document.getElementById('audio').play();
            window.alert("I can't open this cupboard without the cupboard key")
            
        }
    else if (cupboard=="cupboard" &&flaskedCollected==false)
        {
              var elem=document.getElementById('unlock');        
                var elm=document.getElementById('cupboardInt');
            if (elem ==null)
            document.getElementById('rightcol').innerHTML+='<audio  id="unlock" src="Sounds/unlockSound_freesound.wav" type="audio/wav"> </audio>'//Sound Link:https://freesound.org/people/BeezleFM/sounds/512139/
         document.getElementById('unlock').play();
            window.alert("["+playerName+"]The flask isn't in this cupboard")
            if (elm==null)
          document.getElementById('leftcol').innerHTML+='<p id="cupboardInt">[Name]: The flask is Not in this cupboard</p>';
            else
                document.getElementById('cupboardInt').innerHTML='<p id="cupboardInt">[Name]: The flask is Not in this cupboard</p>';
        }
    else if (cupboard=="correctCupboard" && flaskedCollected==false)
        {
                var elem=document.getElementById('unlock');  
              var elm=document.getElementById('cupboardInt');
            if (elem ==null)
          document.getElementById('rightcol').innerHTML+='<audio  id="unlock" src="Sounds/unlockSound_freesound.wav" type="audio/wav"> </audio>'
     
            document.getElementById('unlock').play();
            window.alert("The flask is in this cupboard")
            timeRemainingWhenFlaskedCollected=time;
            if (elm==null)
            document.getElementById('leftcol').innerHTML+='<p id="cupboardInt">['+playerName+']: Yes there is the flask</p>';
            else 
            document.getElementById('cupboardInt').innerHTML='<p id="cupboardInt">['+playerName+']: Yes there is the flask</p>';
            taskRemaining--;
            flaskedCollected=true;
            document.getElementById('leftcol').innerHTML+='<p class="inventory">Flask Added to Inventory</p><br><p class="checklist">TASK COMPLETED, '+taskRemaining+' tasks left</p>';
        }
    else if (flaskedCollected==true)
        {
            window.alert('I have already collected the flask');
        }
}
function bottle()
{
 document.getElementById('img').src="Images/ParentsBedroomPixabay_without_bottle.jpg";
    var elem=document.getElementById('parentMap')
    elem.parentNode.removeChild(elem);
     
    document.getElementById('rightcol').innerHTML+='<map id="parentMap" name="parentsBottle"><area target="" alt="safe" title="safe"  coords="360,92,451,203" shape="rect" onclick="safe();"></map>'   
   document.getElementById('img').useMap="#parentsBottle";
    document.getElementById('leftcol').innerHTML+='<p>['+playerName+']: Yes! a bottle of '+favouriteDrink+', my favourite drink!';
    bottleCollected=true;
    taskRemaining--;
    timeRemainingWhenBottleCollected=time;
      document.getElementById('leftcol').innerHTML+='<p class="inventory">bottle of '+favouriteDrink+' added to Inventory</p><br><p class="checklist">TASK COMPLETED, '+taskRemaining+'tasks left</p>' ;
 }
                
function frontDoorClick()
{
    if (flaskedCollected==true && keysCollected==true && givenNecklace==true && foundPhone==true &&foundCharger==true)
        {
            nextPage();
          window.open('VictoryScreen.html',"_self");  
        }
    else
        window.alert("I Haven't collected everything yet!I need Check the CheckList")
   checklist();
}
function checklist()
{
    if (shownChecklist==false)
        {
            
document.getElementById('inventoryChecklist').innerHTML="CheckList <br>";
if (keysCollected==true)
    {
document.getElementById('inventoryChecklist').innerHTML+="Keys <span class='checklist'><img src='Images/checkMark_pixabay.png' style='height:15px;width:10px;'></span><br>"
    }
         if (keysCollected==false)
{
            document.getElementById('inventoryChecklist').innerHTML+="Keys <span class='checklist'><img src='Images/redCross_pixabay.png' style='height:15px;width:10px;'></span><br>"
}
    if (givenNecklace==true)
        {
            document.getElementById('inventoryChecklist').innerHTML+="Wallet <span class='checklist'><img src='Images/checkMark_pixabay.png' style='height:15px;width:10px;'></span><br>"
        }
     if (givenNecklace==false)
    {
     document.getElementById('inventoryChecklist').innerHTML+="Wallet <span class='checklist'><img src='Images/redCross_pixabay.png' style='height:15px;width:10px;'></span><br>"   
    }
            if (foundPhone==true && foundCharger==true)
                {
            document.getElementById('inventoryChecklist').innerHTML+="Phone Which has been Charged<span class='checklist'><img src='Images/checkMark_pixabay.png' style='height:15px;width:10px;'></span><br>"
                }
     if (foundPhone==false ||foundCharger==false)
        {
             document.getElementById('inventoryChecklist').innerHTML+="Phone Which has been Charged<span class='checklist'><img src='Images/redCross_pixabay.png' style='height:15px;width:10px;'></span><br>"
        }
            if (flaskedCollected==true)
                {
            document.getElementById('inventoryChecklist').innerHTML+="Flask <span class='checklist'><img src='Images/checkMark_pixabay.png' style='height:15px;width:10px;'></span><br>"
                }
             if (flaskedCollected==false)
                {
                    document.getElementById('inventoryChecklist').innerHTML+="Flask <span class='checklist'><img src='Images/redCross_pixabay.png' style='height:15px;width:10px;'></span><br>"
                }
            if (bottleCollected==true)
                {
                    document.getElementById('inventoryChecklist').innerHTML+="Bottle Of "+favouriteDrink+"<span class='checklist'><img src='Images/checkMark_pixabay.png' style='height:15px;width:10px;'></span><br>"
                }
             if (bottleCollected==false)
                {
                       document.getElementById('inventoryChecklist').innerHTML+="Bottle Of " +favouriteDrink+"<span class='checklist'><img src='Images/redCross_pixabay.png' style='height:15px;width:10px;'></span><br>"
                }
                    shownChecklist=true;
            shownInventory=false;
        }
    else if (shownChecklist==true)
        {
             document.getElementById('inventoryChecklist').innerHTML="";
    shownChecklist=false;
        }
}
function inventory()
{
   
    if (shownInventory==false)
        {
             shownInventory=true;
            shownChecklist=false;
    var count=0;
    document.getElementById('inventoryChecklist').innerHTML="Inventory <br>";
    if (keysCollected==true)
        {
            document.getElementById('inventoryChecklist').innerHTML+='Keys <br>';
                    count++
        }
            if (haveBook==true)
        {
            document.getElementById('inventoryChecklist').innerHTML+='Book <br>';
            count++;
        }
            if (flaskedCollected==true)
                {
                    document.getElementById('inventoryChecklist').innerHTML+='Flask <br>';
                    count++;
                }
            if (bottleCollected==true)
                {
                     document.getElementById('inventoryChecklist').innerHTML+='Bottle of '+favouriteDrink+'<br>';
                    count++;
                }
            if (haveNecklace==true)
                {
                     document.getElementById('inventoryChecklist').innerHTML+='Necklace <br>';
                count++;
                }
            if (haveCupboardKey==true)
                {
                    document.getElementById('inventoryChecklist').innerHTML+='Cupboard key <br>';
                    count++
                }
            if (givenNecklace==true)
                {
                  document.getElementById('inventoryChecklist').innerHTML+='Wallet<br>';
                    count++  
                }
            if (foundPhone==true)
                {
                    document.getElementById('inventoryChecklist').innerHTML+='Phone <br>';
                    count++
                }
            if (foundCharger==true)
                {
                    document.getElementById('inventoryChecklist').innerHTML+='Phone Charger<br>'
                    count++;
                }
            if (gotCupboardKey==true)
                {
                      document.getElementById('inventoryChecklist').innerHTML+='Cupboard Key<br>';
                    count++;
                }
   else if (count==0){
        document.getElementById('inventoryChecklist').innerHTML+='No Items';
        }
        }
else if (shownInventory==true )
    {
    document.getElementById('inventoryChecklist').innerHTML="";
    shownInventory=false;
    }
}
function mathsHomework()
{
    if (mathsHomeworkDone==false)
        {
            lastPageMaths=true;
        nextPage();
             
        window.open('mathsProblemScreen.html',"_self")

        }
        }

function returnToLivingRoom()
{
  
   if (lastPageMaths==true)
       {
           lastPageMaths=false;
           room("living_Room");
       }
}
function openGameScreen3()
{
    nextPage();
    window.open('gameScreen3.html',"_self")
}
function collectCharger()
{
    var elem=document.getElementById('kitchenMap');
    elem.parentNode.removeChild(elem);
    if (bookGiven==false)
        {
 document.getElementById('door').src="Images/Kitchen_with_dad_Pixabay.jpg" 
        }
    if (bookGiven==true)
        {
             document.getElementById('door').src="Images/Kitchen_with_dad_book_Pixabay.jpg" 
        }
            document.getElementById('rightcol').innerHTML+='<map id="kitchenMap" name="kitchenCharger"><area target="" alt="dad" title="dad" coords="394,121,554,463" shape="rect" onclick="dadInteraction()"> <area shape="rect" coords="280,279,335,324" onclick=clickCupboard("cupboard") title="kitchen cupboard"><area shape="rect" coords="282,327,334,372" onclick=clickCupboard("correctCupboard") title="kitchen cupboard"></map>'
          document.getElementById('door').useMap="#kitchenCharger";
    if (foundPhone==false)
        {
              foundCharger=true;
           document.getElementById('leftcol').innerHTML+='<p id="chargerInt">['+playerName+']:This might come in handy later on</p><br><p class="inventory">Charger Added to Inventory</p>';
          
        }
    else if (foundPhone==true)
        {
            timeRemainingWhenPhoneCharged=time;
            foundCharger=true;
            taskRemaining--;
             document.getElementById('leftcol').innerHTML+='<p id="chargerInt">['+playerName+']:Yes! I can use this to charge my phone.<br>['+playerName+']:That marketing was not lying! That charger can charge! And fast, too! Your phone reaches 110% in a matter of seconds, and you pocket it soon after. <br></p><p class="inventory">Charger Added to Inventory<br><p class="checklist">TASK COMPLETED, '+taskRemaining+' tasks left</p>'
        
            
        }
}
function victoryScreen()
{
 document.getElementById('name').innerHTML=playerName;
    document.getElementById('timeTaken').innerHTML=formatTime(time);
        document.getElementById('safeAttempts').innerHTML=safeAttempts;
        document.getElementById('mathsAttempts').innerHTML=mathsAttempts;
   
            document.getElementById('keyCollection').innerHTML=formatTime(timeRemainingWhenkeysCollected);
    document.getElementById('walletCollection').innerHTML=formatTime(timeRemainingWhenWalletCollected);
     document.getElementById('bottleCollection').innerHTML="Time remaining when bottle of "+favouriteDrink+" collected:"+formatTime(timeRemainingWhenkeysCollected);
    document.getElementById('flaskCollection').innerHTML=formatTime(timeRemainingWhenFlaskedCollected);
    document.getElementById('phoneCharged').innerHTML=formatTime(timeRemainingWhenPhoneCharged);
}
function losingScreen()
{
    if (timerRanOut==true)
        {
            
            document.getElementById('stats').innerHTML+='YOU LOSE '+playerName+' ! You were scrambling for all your items and the has Bus left!<br>You have missed the NIGHT OUT!<br>'
            
        }
     if (safeAttemptsRanOut==true)
        {
            document.getElementById('stats').innerHTML+='YOU LOSE!The safe alarm went off after 3 attempts and you have been grounded!<br> You have missed the Night OUT!<br>';
        
        }
    document.getElementById('stats').innerHTML+='<span id="title">STATS</span><br>';
    if (keysCollected!=true)
        {
              document.getElementById('stats').innerHTML+='Keys:<img src="Images/redCross_pixabay.png" style="height:15px;width:10px; alt="Picture of a red cross">';
        }
    if (keysCollected==true)
        {
             document.getElementById('stats').innerHTML+='<br>Keys: <img src="Images/checkMark_pixabay.png" style="height:30px;width:20px;" alt="Picture of a check mark">Time remaining when collected:'+formatTime(timeRemainingWhenkeysCollected);
        }
    if (givenNecklace==false)
        {
            document.getElementById('stats').innerHTML+='<br>Wallet:<img src="Images/redCross_pixabay.png" style="height:15px;width:10px; alt="Picture of a red cross">';
        }
    if (givenNecklace==true)
        {
            document.getElementById('stats').innerHTML+='<br>Wallet: <img src="Images/checkMark_pixabay.png" style="height:30px;width:20px;" alt="Picture of a check mark">Time remaining when collected:'+formatTime(timeRemainingWhenWalletCollected);
        }
    if (foundCharger==false || foundPhone ==false)
        {
             document.getElementById('stats').innerHTML+='<br>Phone Which has been Charged:<img src="Images/redCross_pixabay.png" style="height:15px;width:10px; alt="Picture of a red cross">';
        }
    if (foundCharger==true && foundPhone==true)
        {
             document.getElementById('stats').innerHTML+='<br>Phone Charged: <img src="Images/checkMark_pixabay.png" style="height:30px;width:20px;" alt="Picture of a check mark">Time remaining phone charged:'+formatTime(timeRemainingWhenPhoneCharged);
        }
    if (flaskedCollected==true)
        {
             document.getElementById('stats').innerHTML+='<br>Flask: <img src="Images/checkMark_pixabay.png" style="height:30px;width:20px;" alt="Picture of a check mark">Time remaining when collected:'+formatTime(timeRemainingWhenFlaskedCollected);
        }
    if (flaskedCollected==false)
        {
             document.getElementById('stats').innerHTML+='<br>Flask:<img src="Images/redCross_pixabay.png" style="height:15px;width:10px; alt="Picture of a red cross">';
        }
    if (bottleCollected==true)
        {
            document.getElementById('stats').innerHTML+='<br>Bottle of '+favouriteDrink+': <img src="Images/checkMark_pixabay.png" style="height:30px;width:20px;" alt="Picture of a check mark">Time remaining when collected:'+formatTime(timeRemainingWhenBottleCollected);
        }
     if (bottleCollected==false)
        {
            document.getElementById('stats').innerHTML+='<br>Bottle of '+favouriteDrink+':<img src="Images/redCross_pixabay.png" style="height:15px;width:10px; alt="Picture of a red cross">';
        }
    document.getElementById('stats').innerHTML+='<br><span id="title"><button onclick="playAgain();">Play Again</button><button onclick="landingScreen();">Landing Screen</button></span>'
}
function playAgain()
{
    window.open("gameScreen1.html","_self")
}
function landingScreen()
{
    window.open("GameLanding.html","_self")
}
function safeHint()
{
    window.alert("The code is 1_4");
}
function keysHint()
{
    window.alert("Check the cupboards below the bed");
}
function mathsHint()
{
    window.alert("The Red and yellow square answers are 7.");
}
function reloadMathsHint()
{
    if (mathsAttempts>1 && hintsOn==true)
        {
            document.getElementById('mathsHint').innerHTML+='<button onclick="mathsHint()">Hint</button>';  
        }
}
function reloadSafeHint()
{
     if (safeAttempts>1 && hintsOn==true)
        {
            
            document.getElementById('safeHint').innerHTML+='<button onclick="safeHint()">Hint</button>'
        }
}

function lost()
{
    loseScreen=true;
}