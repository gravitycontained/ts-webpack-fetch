import { BaseComponent } from '../util';

// import HTML and Style for component
import template from './component.html';
import './component.scss';

export class MyComponent
extends BaseComponent
{
	public constructor()
	{
    super('my-component', template);
	}
}
