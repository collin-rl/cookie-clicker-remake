// Get the necessary elements
const cookieCountElement = document.getElementById("cookieCount")
const bigCookieElement = document.getElementById("bigCookie")
const cpsCountElement = document.getElementById("cpsCount")

// Initialize the cookie count and CPS
let cookieCount = 0
let cps = 0

// Function to format large numbers with commas for thousands separation
function formatNumber(number) {
    if (number >= 1000000) {
        const million = Math.floor(number / 1000000)
        const remainder = Math.floor((number % 1000000) / 1000)
        return `${million}.${String(remainder).padStart(3, "0")} million`
    } else {
        return Math.floor(number).toLocaleString()
    }
}

// Function to format CPS count
function formatCPS(cps) {
    if (cps % 1 === 0) {
        // If CPS is a whole number, don't display decimal
        return cps.toFixed(0)
    } else {
        // If CPS has a fractional part, display decimal
        return cps.toFixed(1)
    }
}

// Update the tab title
function updateTabTitle() {
    document.title = `${formatNumber(
        Math.floor(cookieCount)
    )} Cookies - Cookie Clicker`
}

// Add a click event listener to the bigCookie element
bigCookieElement.addEventListener("click", (event) => {
    // Increment the cookie count
    cookieCount++

    // Play the click audio
    const cookieAudio = new Audio("./audio/click.wav")
    cookieAudio.volume = 0.1
    cookieAudio.play()

    // Update the cookie count element's text
    cookieCountElement.textContent = `${formatNumber(cookieCount)} Cookies`

    // Create a new element to display the "+1" above the cursor
    const plusOne = document.createElement("div")
    plusOne.classList.add("plusOne")
    plusOne.textContent = "+1"
    document.body.appendChild(plusOne)

    // Position the "+1" element above the cursor
    const cursorX = event.clientX - plusOne.offsetWidth / 2
    const cursorY = event.clientY - plusOne.offsetHeight
    plusOne.style.left = `${cursorX}px`
    plusOne.style.top = `${cursorY}px`

    // Disable pointer events for the "+1" element
    plusOne.style.pointerEvents = "none"

    // Animate the "+1" element floating up
    plusOne.classList.add("floatUp")

    // Remove the "+1" element after a short delay
    setTimeout(() => {
        plusOne.remove()
    }, 1000)
})

// Function to update the cookie count every 100 milliseconds
function updateCookieCount() {
    cookieCount += cps / 10

    // Update the cookie count element's text with formatted number
    cookieCountElement.textContent = `${formatNumber(cookieCount)} Cookies`
}

// Start the interval to update the cookie count every 100 milliseconds
setInterval(updateCookieCount, 100)

// Start the interval to update the tab title every second
setInterval(updateTabTitle, 1000)

// Get the necessary elements for the cursor upgrade
const cursorUpgradeButton = document.getElementById("cursorUpgrade")

// Initialize the Cursor upgrade variables
let cursorUpgradeCost = 15
const cursorUpgradeRate = 0.1

// Add a click event listener to the cursorUpgradeButton
cursorUpgradeButton.addEventListener("click", () => {
    // Check if there are enough cookies to buy the cursor upgrade
    if (cookieCount >= cursorUpgradeCost) {
        // Subtract the cost of the upgrade from the cookie count
        cookieCount -= cursorUpgradeCost

        // Update the cookie count element's text
        cookieCountElement.textContent = `${formatNumber(cookieCount)} Cookies`

        // Increase the CPS (Cookies Per Second) by the cursor upgrade rate
        cps += cursorUpgradeRate

        // Update the CPS count element's text
        cpsCountElement.textContent = `per second: ${formatCPS(cps)}`

        // Increment the cost for the next Cursor upgrade
        cursorUpgradeCost += Math.floor(cursorUpgradeCost * 0.2) + 3

        // Update the cursor upgrade button's text and cost with formatted number
        cursorUpgradeButton.textContent = `Buy Cursor Upgrade (Cost: ${formatNumber(
            cursorUpgradeCost
        )} Cookies)`
    }
})

// Get the necessary elements for the grandma upgrade
const grandmaUpgradeButton = document.getElementById("grandmaUpgrade")

// Initialize the Grandma upgrade variables
let grandmaUpgradeCost = 100
const grandmaUpgradeRate = 1

// Add a click event listener to the grandmaUpgradeButton
grandmaUpgradeButton.addEventListener("click", () => {
    // Check if there are enough cookies to buy the grandma upgrade
    if (cookieCount >= grandmaUpgradeCost) {
        // Subtract the cost of the upgrade from the cookie count
        cookieCount -= grandmaUpgradeCost

        // Update the cookie count element's text
        cookieCountElement.textContent = `${formatNumber(cookieCount)} Cookies`

        // Increase the CPS (Cookies Per Second) by the grandma upgrade rate
        cps += grandmaUpgradeRate

        // Update the CPS count element's text with formatted number
        cpsCountElement.textContent = `per second: ${formatCPS(cps)}`

        // Increment the cost for the next Grandma upgrade
        grandmaUpgradeCost = Math.floor(grandmaUpgradeCost * 1.15)

        // Update the grandma upgrade button's text and cost with formatted number
        grandmaUpgradeButton.textContent = `Buy Grandma Upgrade (Cost: ${formatNumber(
            grandmaUpgradeCost
        )} Cookies)`
    }
})

// Get the necessary elements for the farm upgrade
const farmUpgradeButton = document.getElementById("farmUpgrade")

// Initialize the Farm upgrade variables
let farmUpgradeCost = 1100
const farmUpgradeRate = 8

// Add a click event listener to the farmUpgradeButton
farmUpgradeButton.addEventListener("click", () => {
    // Check if there are enough cookies to buy the farm upgrade
    if (cookieCount >= farmUpgradeCost) {
        // Subtract the cost of the upgrade from the cookie count
        cookieCount -= farmUpgradeCost

        // Update the cookie count element's text
        cookieCountElement.textContent = `${formatNumber(cookieCount)} Cookies`

        // Increase the CPS (Cookies Per Second) by the farm upgrade rate
        cps += farmUpgradeRate

        // Update the CPS count element's text with formatted number
        cpsCountElement.textContent = `per second: ${formatCPS(cps)}`

        // Increment the cost for the next Farm upgrade
        farmUpgradeCost = Math.floor(farmUpgradeCost * 1.15)

        // Update the farm upgrade button's text and cost with formatted number
        farmUpgradeButton.textContent = `Buy Farm Upgrade (Cost: ${formatNumber(
            farmUpgradeCost
        )} Cookies)`
    }
})

// Get the necessary elements for the mine upgrade
const mineUpgradeButton = document.getElementById("mineUpgrade")

// Initialize the Mine upgrade variables
let mineUpgradeCost = 12000
const mineUpgradeRate = 47

// Add a click event listener to the mineUpgradeButton
mineUpgradeButton.addEventListener("click", () => {
    // Check if there are enough cookies to buy the mine upgrade
    if (cookieCount >= mineUpgradeCost) {
        // Subtract the cost of the upgrade from the cookie count
        cookieCount -= mineUpgradeCost

        // Update the cookie count element's text
        cookieCountElement.textContent = `${formatNumber(cookieCount)} Cookies`

        // Increase the CPS (Cookies Per Second) by the mine upgrade rate
        cps += mineUpgradeRate

        // Update the CPS count element's text with formatted number
        cpsCountElement.textContent = `per second: ${formatCPS(cps)}`

        // Increment the cost for the next Mine upgrade
        mineUpgradeCost = Math.floor(mineUpgradeCost * 1.15)

        // Update the mine upgrade button's text and cost with formatted number
        mineUpgradeButton.textContent = `Buy Mine Upgrade (Cost: ${formatNumber(
            mineUpgradeCost
        )} Cookies)`
    }
})
