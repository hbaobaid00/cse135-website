(function () {
  const complimentBtn = document.getElementById("complimentBtn");
  const complimentOut = document.getElementById("complimentOut");

  const compliments = [
    "Beyond Two Souls",
    "Life is Strange (esp the first one)",
    "Minecraft",
    "Animal Crossing: New Horizons",
    "Phasmophobia",
    "Five Nights at Freddy's"
  ];

  if (complimentBtn && complimentOut) {
    complimentBtn.addEventListener("click", () => {
      const idx = Math.floor(Math.random() * compliments.length);
      complimentOut.textContent = compliments[idx];
    });
  }

  const vibeOut = document.getElementById("vibeOut");
  const vibeButtons = document.querySelectorAll(".vibe");

  const vibeMap = {
    study: "grind HW + good music + matcha?",
    thrift: "good finds + cute little trinkets + pics after",
    gym: "running or yoga + smoothie + a nice view",
    hike: "gliderport or beach view trail + sunset pics",
    shop: "UTC + try on cute outfits + grabbing coffee",
    eat: "find a new spot + dessert + good company"
  };

  if (vibeOut && vibeButtons.length > 0) {
    vibeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-vibe");
        vibeOut.textContent = vibeMap[key] || "down for anything tbh";
      });
    });
  }
})();
