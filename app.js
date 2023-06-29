// Get the necessary elements
const cookieCountElement = document.getElementById("cookieCount")
const bigCookieElement = document.getElementById("bigCookie")

// Initialize the cookie count
let cookieCount = 0

// Add a click event listener to the bigCookie element
bigCookieElement.addEventListener("click", () => {
    // Increment the cookie count
    cookieCount++

    // Update the cookie count element's text
    cookieCountElement.textContent = `Cookies: ${cookieCount}`
})
