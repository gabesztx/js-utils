import { Type, Component, OnInit } from '@angular/core';
import { CustomTypeModel, LAYOUT_META } from '../../models/custom-type.model';
// import { FormLayoutHolder } from './models/FormLayoutHolder';


@Component({
  selector: 'app-reflect-metadata',
  templateUrl: './reflect-metadata.component.html',
  styleUrls: ['./reflect-metadata.component.scss']
})

export class ReflectMetadataComponent implements OnInit {
  modelType: Type<any>;
  constructor(){
    this.modelType = CustomTypeModel;
  }

  ngOnInit(){
    const layout = Reflect.getMetadata(LAYOUT_META, this.modelType)
    console.log('custom Type layout', layout);
  }
}
