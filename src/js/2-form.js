const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function fillFormFields() {
  const savedFormData = localStorage.getItem(storageKey);
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageTextarea.value = message;
  }
}

form.addEventListener('input', saveFormState);

window.addEventListener('load', fillFormFields);

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
 
  localStorage.removeItem(storageKey);

  
  emailInput.value = '';
  messageTextarea.value = '';

  
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  console.log(formData);
});
