import { TitleComponent } from './app/title/title.component';

// import global style
import '../html/style.scss';

function main()
{
	const app = document.getElementById("app");
	
	const titleComponent = new TitleComponent();
	
	titleComponent.render(app);
}

main();
