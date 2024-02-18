// button click handler ///
let ticketPrice= 550;
let array=[]
// console.log(array.length);
 const seatsButton=document.getElementsByClassName('kbd');

for (const seat of seatsButton){

    seat.addEventListener("click",function (event){
        const target=event.target;
         array.push(target);
         
         if (array.length <= 4){
            target.classList.add('bg-[#1DD100]');
            // current ticket ///
            const currentTickets=document.getElementById('current-ticket');
            const currentTicket=parseInt(currentTickets.innerText)
            console.log(currentTicket);
             const ticket=currentTicket -1 ;
            //  console.log(ticket);
            currentTickets.innerText=ticket
            const seatAdd=document.getElementById("seat-add");
            const seats=parseInt(seatAdd.innerText);
             const seat= seats + 1;
             seatAdd.innerText=seat; 
    
             const tbody=document.getElementById('tbody');
             const tr=document.createElement('tr');
             tr.innerHTML=`
             <td>${target.innerText}</td>
             <td>Economy</td>
             <td>${ticketPrice}</td>
             `;
             tbody.appendChild(tr)
              
            
         }
         else{
            alert('No Allow')
         }
      
          

      
       


        

    })
}