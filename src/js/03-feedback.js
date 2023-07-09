import throttle from 'lodash.throttle'

window._ = {
    throttle: throttle
  };

const formState = {
    email: '',
    message: '',
};

function saveFormState() {
    const feedbackForm = document.querySelector('.feedback-form')
    const emailInput = feedbackForm.querySelector('input[name="email"]')
    const messageInput = feedbackForm.querySelector('textarea[name="message"]')
    formState.email = emailInput.value;
    formState.message = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formState))
}

function fillForm() {
    const feedbackForm = document.querySelector('.feedback-form')
    const formState = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (formState) {
        const { email, message } = formState
        const emailInput = feedbackForm.querySelector('input[name="email"]')
        const messageInput = feedbackForm.querySelector('textarea[name="message"]')
        emailInput.value = email
        messageInput.value = message
    }
}

function clearForm() {
    const feedbackForm = document.querySelector('.feedback-form')
    const emailInput = feedbackForm.querySelector('input[name="email"]')
    const messageInput = feedbackForm.querySelector('textarea[name="message"]')
    feedbackForm.reset()
    emailInput.value = ''
    messageInput.value = ''
    localStorage.removeItem('feedback-form-state')
}

function handleSubmit(evt) {
    evt.preventDefault()
    const feedbackForm = document.querySelector('.feedback-form')
    const emailInput = feedbackForm.querySelector('input[name="email"]')
    const messageInput = feedbackForm.querySelector('textarea[name="message"]')
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    }
    console.log(formState)
    clearForm()
}

document.addEventListener('DOMContentLoaded', function() {
    fillForm()
})

document.addEventListener('input', _.throttle(saveFormState, 500))

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handleSubmit)