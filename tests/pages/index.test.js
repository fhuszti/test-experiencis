import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';
import Home from "../../pages/index";

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

it("render correctement", () => {
	const tree = renderer.create(<Home/>).toJSON();
	expect(tree).toMatchSnapshot();
});