const roomTypeDropdown = document.getElementById('room-type');
    // const confirmationDiv = document.getElementById('confirmation');
  
    const priceInput = document.getElementById('price');

  const roomPrices = {
    standard: 100,    //change it accordingly
    premium: 200,
    honeymoon: 300,
  };

  function calculatePrice() {
    const selectedRoomType = roomTypeDropdown.value;
    const selectedPrice = roomPrices[selectedRoomType];
    priceInput.value = selectedPrice;
  }
  roomTypeDropdown.addEventListener('change', calculatePrice);
  function calculateNumberOfNights() {
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);
    
    const timeDifference = checkOutDate - checkInDate;
    const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    document.getElementById('numberOfNights').value = numberOfNights;
    
  }

  
  calculateTotalAmount();

  function handleFormSubmit(event) {
    event.preventDefault();
    alert('Payment processing and booking confirmation would happen here.');
  }
  
  document.getElementById('billingForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('rooms').addEventListener('change', calculateTotalAmount);
  document.getElementById('checkIn').addEventListener('change', calculateNumberOfNights);
  document.getElementById('checkOut').addEventListener('change', calculateNumberOfNights);
  