document.addEventListener('input', function(event) {
    const inputField = event.target;
  
    // Target number-only fields that are not disabled
    if (inputField.type === 'text' && inputField.value.match(/^\d+$/) && !inputField.disabled) {
      // Format phone number with country code and Brazilian format
      let formattedNumber = '+55 (' + inputField.value.slice(0, 2) + ') ' + inputField.value.slice(2, 7) + '-' + inputField.value.slice(7);
  
      // Ensure a valid length for Brazilian phone numbers
      if (formattedNumber.length === 18) {
        inputField.value = formattedNumber;
      }
    }
  });
  