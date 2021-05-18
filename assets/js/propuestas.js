const CARD_TITLES = ["Esquelético", "Orgánico", "Muscular", "Energético", "Circulatorio", "Chakras", "Espiritual"];

let cardDiv = $(".cards");

for (cardTitle of CARD_TITLES) {
	let card = `<div class="card">
				  <div class="card-body">${cardTitle}</div>
				</div>`;
	cardDiv.append(card);
}
