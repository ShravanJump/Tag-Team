const roomTypeDropdown = document.getElementById('room-type');
const numRoomsInput = document.getElementById('rooms');
const priceInput = document.getElementById('price');

  const roomPrices = {
    standard: 2999,    //change it accordingly
    premium: 5599,
    honeymoon: 7599,
  };

  function calculatePrice() {
    const selectedRoomType = roomTypeDropdown.value;
    const selectedPrice = roomPrices[selectedRoomType];
    priceInput.value = selectedPrice;
    const numRooms = parseInt(numRoomsInput.value);
    const totalPrice = selectedPrice * numRooms;
    priceInput.value = totalPrice;
  }
  roomTypeDropdown.addEventListener('change', calculatePrice);
  numRoomsInput.addEventListener('input', calculatePrice);

  function calculateNumberOfNights() {
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);

    if (checkInDate > checkOutDate) {
      alert("Check-out date must be greater than the Check-in date.");
      return;
    }
    
    const timeDifference = checkOutDate - checkInDate;
    const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    document.getElementById('numberOfNights').value = numberOfNights;
  }
  

  function handleFormSubmit(event) {
    event.preventDefault();
    alert('Payment processing and booking confirmation would happen here.');
  }
  
  document.getElementById('billingForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('rooms').addEventListener('change', calculatePrice);
  document.getElementById('checkIn').addEventListener('change', calculateNumberOfNights);
  document.getElementById('checkOut').addEventListener('change', calculateNumberOfNights);
  