// Backend URL
const API_URL = "http://localhost:5000";

// Function to fetch data from backend
async function fetchData() {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    const data = await response.json();
    console.log("Data from backend:", data);
    // You can update your HTML with the data here
    document.getElementById("status").innerHTML = `✅ ${data.message}`;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("status").innerHTML = "❌ Backend not connected";
  }
}

// Function to submit data to backend
async function submitData(text) {
  try {
    const response = await fetch(`${API_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });
    const data = await response.json();
    console.log("Response from backend:", data);
    alert(data.message);
  } catch (error) {
    console.error("Error submitting data:", error);
    alert("Failed to submit data");
  }
}

// Fetch data when page loads
window.addEventListener("load", fetchData);
