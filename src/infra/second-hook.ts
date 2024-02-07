import { Navigation, Parameters, RoutingInstruction } from '@aurelia/router';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class TheSecondHook {
    public async canLoad(component: any, params: Parameters, instruction: RoutingInstruction, nav: Navigation): Promise<boolean | string> {
        console.log('TheSecondHook canLoad');
        // Remove comment to see the error
        // await fetch('https://dummyjson.com/users').then((res) => res.json());
        return true;
    }
}
