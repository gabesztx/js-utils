import {CourseActiveView} from './model';
import {Jegy} from './model';

const courseActivity = <CourseActiveView>{};


// az interface (modell) alapján létrehozom az objektumot
const courseActivJegy = <Jegy>{
    name: 'komp',
    data: 'kastely'
};

 courseActivity.label = '100';
//  courseActivJegy.name = 'komp';

 console.log(courseActivity);
 console.log(courseActivJegy);
