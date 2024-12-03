describe("Tests de l'application Counter", () => {
	beforeEach(() => {});
	it("devrait afficher un compte initial de 0", () => {
		cy.visit("http://localhost:5173/");
		cy.get("#counter").should("have.text", "count is 0");
	});

	it("devrait augmenter le compte lors du clic sur le bouton", () => {
		cy.visit("http://localhost:5173/");
		cy.get("#counter").click();
		cy.get("#counter").should("have.text", "count is 1");
	});
	it("devrai augmenter le compte de 2 lors de deux clics sur le bouton", () => {
		cy.visit("http://localhost:5173/");
		for (let i = 0; i < 2; i++) {
			cy.get("#counter").click();
		}
		cy.get("#counter").should("have.text", "count is 2");
	});
	let count = 0;
	let itération = 30;
	it(`devrai augmenter le compte de ${itération} lors de ${itération} clics sur le bouton`, () => {
		cy.visit("http://localhost:5173/");
		for (let i = 0; i < itération; i++) {
			count += 1;
			cy.get("#counter").click();
		}
		cy.get("#counter").should("have.text", `count is ${count}`);
	});
	it("devrait trouver le lien vite.js sur le logo vite", () => {
		cy.visit("http://localhost:5173/");
		cy.get(".logo").eq(0).should("be.visible");
		cy.get(".logo")
			.eq(0)
			.parents("a")
			.should("have.attr", "href", "https://vite.dev");
	});
	it("devrait trouver le lien vite.js sur le logo vite", () => {
		cy.visit("http://localhost:5173/");
		cy.get(".logo.vanilla").eq(0).should("be.visible");
		cy.get(".logo.vanilla")
			.eq(0)
			.parents("a")
			.should(
				"have.attr",
				"href",
				"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
			);
	});
	it("devrait augmenter le compte lors du shift clic de 10", () => {
		cy.visit("http://localhost:5173/");
		cy.get("body").type("{shift}", { release: false });
		cy.get("#counter").click();
		cy.get("#counter").should("have.text", "count is 10");
	});
});
