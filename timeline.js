document.addEventListener("DOMContentLoaded", function () {
    const idButton = document.getElementById("idButton");
    const egoButton = document.getElementById("egoButton");
    const superegoButton = document.getElementById("superegoButton");

    const idTimeline = document.getElementById("idTimeline");
    const egoTimeline = document.getElementById("egoTimeline");
    const superegoTimeline = document.getElementById("superegoTimeline");

    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");

    function showPopup(event, text) {
        popupText.innerText = text || "No additional information available.";
        popup.style.display = "block";
        popup.style.left = event.pageX + 10 + "px";  // Offset to right of mouse
        popup.style.top = event.pageY -170 + "px";  // Offset to below mouse
    }

    function hidePopup() {
        popup.style.display = "none";
    }

    function switchTimeline(selectedButton, selectedTimeline) {
        [idButton, egoButton, superegoButton].forEach(button => button.classList.remove("active"));
        selectedButton.classList.add("active");

        [idTimeline, egoTimeline, superegoTimeline].forEach(timeline => timeline.style.display = "none");
        selectedTimeline.style.display = "block";
    }

    idButton.addEventListener("click", () => switchTimeline(idButton, idTimeline));
    egoButton.addEventListener("click", () => switchTimeline(egoButton, egoTimeline));
    superegoButton.addEventListener("click", () => switchTimeline(superegoButton, superegoTimeline));

    switchTimeline(idButton, idTimeline); 

    document.querySelectorAll(".event").forEach(event => {
        event.addEventListener("mouseover", function (e) {
            showPopup(e, event.getAttribute("data-popup"));
        });
        event.addEventListener("mouseout", hidePopup);
    });
});
