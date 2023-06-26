import { Navigation, Parameters, RoutingInstruction } from '@aurelia/router';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class TheHook {
    public async canLoad(component: any, params: Parameters, instruction: RoutingInstruction, nav: Navigation) {
        console.log(component.constructor.name, component, params, instruction, nav);
        return true;
    }
}
