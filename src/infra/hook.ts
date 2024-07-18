import { Navigation, Parameters, RoutingInstruction } from '@aurelia/router';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class TheHook {
    public async canLoad(component: any, params: Parameters, instruction: RoutingInstruction, nav: Navigation) {
        console.log('TheHook canLoad', instruction.component.name);

        // if (instruction.component.name === 'second-section') {
        //     return '/redirect';
        // }

        return '/redirect';
        // return true;
    }
}
