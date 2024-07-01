// Function to fetch data from Google Sheets
async function fetchData() {
    const apiKey = 'YOUR_RESTRICTED_API_KEY'; // Replace with your actual API key
    const sheetId = '1GbXxAkgTFVERTEAvrw-4MCULrhWzR3h4Uy5XnoI467E'; // Replace with your actual Sheet ID
    const range = 'Sheet1!A1:C100'; // Adjust range as per your sheet structure

    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }
        console.log('Fetched data:', data.values); // Log the fetched data
        return data.values;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to render menu sections
function renderMenuSection(sectionName, items) {
    let sectionHtml = `
        <div class="section-container">
            <h2 class="section-title">${sectionName}</h2>
            <table>`;
    
    items.forEach(item => {
        sectionHtml += `<tr><td class="item-name">${item[0]}</td><td class="item-price">${item[1]}</td></tr>`;
    });

    sectionHtml += `
            </table>
            <a href="https://sample-order-link.com" target="_blank" class="order-button">Order Now</a>
        </div>`;
    return sectionHtml;
}

// Function to initialize menu
async function initMenu() {
    const menuContainer = document.getElementById('menu-container');
    const data = await fetchData();

    if (!data) {
        menuContainer.innerHTML = '<p style="color: red;">Failed to load menu. Please try again later.</p>';
        return;
    }

    // Example data structure based on sheet content
    const sections = {
        "XYZ Eats Special": [],
        "XYZ Eats Grilled Foods": [],
        "XYZ Burgers and Sandwiches": [],
    };

    data.forEach(row => {
        const [section, itemName, itemPrice] = row;
        if (sections[section]) {
            sections[section].push([itemName, itemPrice]);
        }
    });

    for (const [sectionName, items] of Object.entries(sections)) {
        if (items.length > 0) {
            menuContainer.innerHTML += renderMenuSection(sectionName, items);
        }
    }
}

// Initialize menu on page load
document.addEventListener('DOMContentLoaded', initMenu);