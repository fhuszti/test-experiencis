import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Link from "../../components/Link";

let container = null;
beforeEach(() => {
	//On crée un élément du DOM comme cible pour le render pour chaque test
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	//On nettoie après chaque test
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("render avec ou sans href", () => {
	act(() => {
		render(<Link>Child</Link>, container);
	});
	expect(container.querySelector('a').getAttribute('href')).toBe("/");
	
	act(() => {
		render(<Link href="/test">Child</Link>, container);
	});
	expect(container.querySelector('a').getAttribute('href')).toBe("/test");
});