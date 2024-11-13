import { uniqueId } from "../util/unique-id";


export class LabeledElement
{
	protected id;
	protected readonly root: HTMLElement;

	public constructor(root: HTMLElement, id: string)
	{
		this.root = root;

		const labelElement = this.root.querySelector(`#${id}`);

		this.id = uniqueId(id);

		if (labelElement) {
			labelElement.id = this.id;
		}
	}

	public get()
	{
		return this.root.querySelector(`#${this.id}`);
	}
}
