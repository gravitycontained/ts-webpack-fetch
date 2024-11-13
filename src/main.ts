import '../html/style.scss';
import { MyComponent } from './component/component';
import { InputComponent } from './input/input';

async function main()
{
	const app = document.getElementById("app");
	
	const component = new MyComponent();
	const input1 = new InputComponent();
	const input2 = new InputComponent();
	
	input1.setLabel("1:");
	input2.setLabel("2:");
	
	component.render(app);
	
	input1.render(app);
	input2.render(app);
}

main();
