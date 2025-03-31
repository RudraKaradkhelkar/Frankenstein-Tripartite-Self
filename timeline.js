document.addEventListener("DOMContentLoaded", function () {
    const idButton = document.getElementById("idButton");
    const egoButton = document.getElementById("egoButton");
    const superegoButton = document.getElementById("superegoButton");

    const idTimeline = document.getElementById("idTimeline");
    const egoTimeline = document.getElementById("egoTimeline");
    const superegoTimeline = document.getElementById("superegoTimeline");

    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");

    // Function to show popup
    function showPopup(event, text) {
        popupText.innerText = text || "No additional information available.";
        popup.style.display = "block";
        popup.style.left = event.pageX + 10 + "px";  // Offset to right of mouse
        popup.style.top = event.pageY -170 + "px";  // Offset to below mouse
    }

    // Function to hide popup
    function hidePopup() {
        popup.style.display = "none";
    }

    // Function to switch timelines and buttons
    function switchTimeline(selectedButton, selectedTimeline) {
        // Reset all buttons
        [idButton, egoButton, superegoButton].forEach(button => button.classList.remove("active"));
        selectedButton.classList.add("active");

        // Hide all timelines
        [idTimeline, egoTimeline, superegoTimeline].forEach(timeline => timeline.style.display = "none");
        selectedTimeline.style.display = "block";
    }

    // Event listeners for timeline buttons
    idButton.addEventListener("click", () => switchTimeline(idButton, idTimeline));
    egoButton.addEventListener("click", () => switchTimeline(egoButton, egoTimeline));
    superegoButton.addEventListener("click", () => switchTimeline(superegoButton, superegoTimeline));

    // Automatically display the first timeline (idTimeline) when the page loads
    switchTimeline(idButton, idTimeline);  // Default timeline set to "idTimeline"

    // Add event listeners to timeline events
    document.querySelectorAll(".event").forEach(event => {
        event.addEventListener("mouseover", function (e) {
            showPopup(e, event.getAttribute("data-popup"));
        });
        event.addEventListener("mouseout", hidePopup);
    });
});
