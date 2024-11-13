import '../html/style.scss';
import { MyComponent } from './component/component';

async function main()
{
	const app = document.getElementById("app");
	
	const component = new MyComponent();
	
	if (app)
		component.render(app);
}

main();
