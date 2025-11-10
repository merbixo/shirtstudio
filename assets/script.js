async function openIntaSend(productId = "spy-family") {
  try {
    const customerEmail = prompt("Enter your email:");
    const customerName = prompt("Enter your name:");

    const resp = await fetch('https://your-backend-url.com/create-intasend-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId,
        customerEmail,
        customerName,
        quantity: 1,
        variant: "M"
      })
    });

    const data = await resp.json();
    if (data.checkoutUrl) window.location.href = data.checkoutUrl;
    else alert("Failed to initiate payment");
  } catch (err) {
    console.error(err);
    alert("Error initiating payment.");
  }
}
