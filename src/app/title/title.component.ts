import { BaseComponent } from '../../util';

import template from './title.component.html';
import './title.component.scss';

export class TitleComponent
extends BaseComponent
{
  public constructor()
  {
    super('title-component', template);
  }
}
