import { BehaviorSubject } from "rxjs";

export class BaseComponent
{
	public readonly element: HTMLElement;
	public readonly visible: BehaviorSubject<boolean>;

	public constructor(componentName: string, template: string)
	{
		this.element = document.createElement("div");
		this.element.classList.add(componentName);

		this.element.innerHTML = template;

		this.visible = new BehaviorSubject<boolean>(true);
	}

	public render(parent: HTMLElement)
	{
		this.visible.subscribe(visible =>
		{
			const contained = parent.contains(this.element);

			if (visible && !contained)
				parent.appendChild(this.element);
			
			else if (!visible && contained)
				parent.removeChild(this.element);
		});
	}
}
