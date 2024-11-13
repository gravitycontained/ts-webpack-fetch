import template from './component.html';
import './component.scss';

export class MyComponent {
  private element: HTMLElement;

	public constructor()
	{
    this.element = document.createElement("div");
		this.element.classList.add('my-component');
		
    this.element.innerHTML = template;
	}

  render(parent: HTMLElement)
	{
    parent.appendChild(this.element);
  }
}
