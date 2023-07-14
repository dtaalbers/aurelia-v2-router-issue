import { Navigation, Parameters, RoutingInstruction } from '@aurelia/router';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class TheSecondHook {
    public async canLoad(component: any, params: Parameters, instruction: RoutingInstruction, nav: Navigation) {
        console.log('TheSecondHook', component.constructor.name);
        return true;
    }
}
