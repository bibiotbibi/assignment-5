
document.addEventListener("DOMContentLoaded", function(){
    const blankHearts = document.querySelectorAll(".fa-regular.fa-heart")
    blankHearts.forEach(blankHeart => {
        blankHeart.addEventListener("click", function(e){
            e.preventDefault();
            const heartElement = document.getElementById("heart");
            let currentHeartAmmount = parseInt(heartElement.innerText);
            let newHeart = currentHeartAmmount + 1;
            
            heartElement.innerText = newHeart;
        })
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const callButton = document.querySelectorAll(".call-btn")
    callButton.forEach(button => {
        button.addEventListener("click", function(e){
            e.preventDefault();
            const coinElement = document.getElementById("coin");
            let currentCoinAmmount = parseInt(coinElement.innerText);
            if(currentCoinAmmount >= 20){
                let newCoinAmmount = currentCoinAmmount - 20;
                coinElement.innerText = newCoinAmmount;
                // alert("calling")
                 const title =
     button.parentNode.parentNode.children[1].innerText; 
     
    const num = 
    button.parentNode.parentNode.children[3].innerText;
    
    alert("📞 Calling " + title + " : " + num + "....")
 
   
    const callBox = document.getElementById("call-history")
    const newCall = document.createElement("div");
    newCall.innerHTML = `
    <div  class="flex justify-between items-center bg-gray-200 m-3   rounded-xl p-3 ">
    <div>
    <h1 class="font-semibold ">${title}</h1>
              <p>${num}</p>
             </div>
               <p class="text-[14px]">${data}</p>
             </div>
             `;
             callBox.append(newCall);
            }
            else{
                alert("❌ You dont have enugh coin! At least 20 coins required.")
            }
            
            coinElement.innerText = newHeart;
        })
    })
})

 
    function getElement(id){
        const element = document.getElementById(id);
        return element;
    }
    

const callbtns = document.getElementsByClassName("call-btn");


for(let callButton of callbtns){
   callButton.addEventListener("click", function(){

    const title =
     callButton.parentNode.parentNode.children[1].innerText; 
     
    const num = 
    callButton.parentNode.parentNode.children[3].innerText;
    
    const data = new Date().toLocaleTimeString();
    // console.log(title, num, data)


    const callAll = getElement("call-history").innerText;
    
    
    const callBox = getElement("call-history")
    const newCall = document.createElement("div");
    newCall.innerHTML = `
    <div  class="flex justify-between items-center bg-gray-200 m-3   rounded-xl p-3 ">
    <div>
    <h1 class="font-semibold ">${title}</h1>
              <p>${num}</p>
             </div>
               <p class="text-[14px]">${data}</p>
             </div>
             `;
             callBox.append(newCall);

            });
        }


const clearButton= document.getElementById("clear-btn")
const callHistoryList =document.getElementById("call-history")

clearButton.addEventListener("click", function(){
    callHistoryList.innerHTML="";
})

//
let copyCount = 0;
function copyAndCount(buttonElement){
    const parentDiv = buttonElement.closest('.bg-white.rounded-2xl');
    if(!parentDiv){
        alert("no card founded")
        return;
    }
    const numberElement = parentDiv.querySelector('.number-to-copy');
    if(!numberElement){
        alert("No number founed to copy")
        return;
    }
   navigator.clipboard.writeText(numberElement.textContent)
.then(() => {
    copyCount++;
    const copyNumElement = document.getElementById('copy-num');
    if (copyNumElement) {
        copyNumElement.textContent = copyCount;
    }
    alert('Copy Done.');
})
.catch(err => {
    console.error('Faild:', err);
    alert("Faild");
});
}
//



