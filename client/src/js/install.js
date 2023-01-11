const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
// Store the triggered events
deferredPrompt = event;
// Remove the hidden class from the button.
butInstall.classList.remove('hidden'); 
});
// TODO: Implement a click event handler on the butInstall element
butInstall.addEventListener('click', async () => {

if (!deferredPrompt) {
return;
}
// Show prompt
deferredPrompt.prompt();
// Wait for user to respond to the prompt
deferredPrompt.userChoice.then((choice) => {
if (choice.outcome === 'accepted') {
console.log("User accepted the A2HS prompt.");
} else {
console.log("User dismissed the A2HS prompt.");
}
// Reset the deferred prompt variable, it can only be used once.
deferredPrompt = null;
butInstall.classList.add('hidden');
});
});

// TODO: Add an handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
// Clear prompt
deferredPrompt = null;
});
