
function calculateTotalAmount() {
    const rooms = parseInt(document.getElementById('rooms').value);
    const totalAmount = rooms * 100; // change it according to hotel
    document.getElementById('totalAmount').value = totalAmount;
  }
  
  function calculateNumberOfNights() {
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);
    
    const timeDifference = checkOutDate - checkInDate;
    const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    document.getElementById('numberOfNights').value = numberOfNights;
  }
  

  function handleFormSubmit(event) {
    event.preventDefault();
    alert('Payment processing and booking confirmation would happen here.');
  }
  
  document.getElementById('billingForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('rooms').addEventListener('change', calculateTotalAmount);
  document.getElementById('checkIn').addEventListener('change', calculateNumberOfNights);
  document.getElementById('checkOut').addEventListener('change', calculateNumberOfNights);
  