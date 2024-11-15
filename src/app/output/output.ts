import { BaseComponent, UniqueIdElement } from '../../util';

// import HTML and Style for component
import template from './output.html';
import './output.scss';

export class OutputComponent
extends BaseComponent
{
	protected readonly description: UniqueIdElement<HTMLLabelElement>;

	public constructor()
	{
    super('output-component', template);

		this.description = new UniqueIdElement(this.element, 'description');
	}

	public setDescription(text: string)
	{
		this.description.get().innerHTML = text;
	}
}
