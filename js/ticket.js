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

            //  total price ///
            const totalPriceText=document.getElementById('total-price');
            const GrandTotal=document.getElementById('grand-total');
            const price =parseInt(totalPriceText.innerText);
            const totalPrice= price + ticketPrice;
            totalPriceText.innerText=totalPrice
            GrandTotal.innerText=totalPrice;   
         }
         else{
            alert('No Allow')
         }   

    })
}


    //  discount offer ////
    document.getElementById('apply').addEventListener('click',function (){
    const couponId=document.getElementById('coupon').value;
    const grandTotalText=document.getElementById('grand-total');
    const grandTotal=grandTotalText.innerText;
    if(couponId==='NEW15'){
        const discount=  15 * grandTotal / 100;
        const totalDiscount= grandTotal -discount;
      grandTotalText.innerText=totalDiscount;
    //   discount amount show 
    const discountAmountId=document.getElementById('discount-amount')
    const discountAmount=parseInt(discountAmountId.innerText);
    const totalAmount= discount + discountAmount;
    discountAmountId.innerText= totalAmount
    //    discount done ///
    const discountApply=document.getElementById('discount-done');
    discountApply.classList.add('hidden')
    }
    else if (couponId==='Couple 20') {
        const discount=  20 * grandTotal / 100;
        const totalDiscount= grandTotal -discount;
        grandTotalText.innerText=totalDiscount;
        const discountAmountId=document.getElementById('discount-amount')
    const discountAmount=parseInt(discountAmountId.innerText);
    const totalAmount= discount + discountAmount;
    discountAmountId.innerText= totalAmount
    //    discount done ///
    const discountApply=document.getElementById('discount-done');
    discountApply.classList.add('hidden')


    }
   



    })