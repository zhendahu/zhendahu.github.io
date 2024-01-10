export const sendContactForm = async (data) => fetch('/api/send/route', {
    method:"POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});