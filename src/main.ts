import { TitleComponent } from './app/title/title.component';

// import global style
import '../html/style.scss';
import { ButtonComponent } from './control/button/button';
import { OutputComponent } from './app/output/output';

async function main()
{
	const app = document.getElementById("app");
	
	const titleComponent = new TitleComponent();
	titleComponent.render(app);

	const button = new ButtonComponent();
	button.setLabel("Request Cat Facts");
	button.render(app);

	const output = new OutputComponent();
	output.render(app);

	button.clicked.subscribe(() =>
	{
		const result = fetch("https://catfact.ninja/fact");
		result.then(v => v.json()).then(v => output.setDescription(v.fact));
	});
}

main();
