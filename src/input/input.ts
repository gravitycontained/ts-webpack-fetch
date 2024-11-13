import { LabeledElement } from '../labeled-element/labeled-element';

import template from './input.html';
import './input.scss';

export class InputComponent {
	protected element: HTMLElement;
	protected label: LabeledElement;

	public constructor()
	{
		this.element = document.createElement("div");
		this.element.classList.add('input-component');

		this.element.innerHTML = template;

		this.label = new LabeledElement(this.element, 'label');
	}

	public setLabel(text: string)
	{
		this.label.get().innerHTML = text;
	}

	render(parent: HTMLElement)
	{
		parent.appendChild(this.element);
	}
}
