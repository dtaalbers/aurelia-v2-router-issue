import { Navigation, Parameters, RoutingInstruction } from '@aurelia/router';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class TheHook {
    public async canLoad(component: any, params: Parameters, instruction: RoutingInstruction, nav: Navigation) {
        console.log('TheHook canLoad');
        // return true;
        if (instruction.component.name === 'redirect-page') return true;
        return '/redirect';
    }
}
