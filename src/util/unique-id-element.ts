import { uniqueId } from "./unique-id";


export class UniqueIdElement<T>
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

	public get(): T
	{
		return <T>this.root.querySelector(`#${this.id}`);
	}
}
