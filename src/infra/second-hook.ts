import { LoadInstruction, Navigation, Parameters, RoutingInstruction } from '@aurelia/router';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class TheSecondHook {
    public async canLoad(
        component: any,
        params: Parameters,
        instruction: RoutingInstruction,
        nav: Navigation
        // previousHookResult: undefined | boolean | LoadInstruction | LoadInstruction[]
    ): Promise<boolean | LoadInstruction | LoadInstruction[]> {
        console.log('TheSecondHook canLoad', instruction.component.name);
        // if ((previousHookResult ?? true) !== true) {
        //     console.log('TheSecondHook has result', previousHookResult);
        //     return previousHookResult;
        // }
        // // Remove comment to see the error
        await fetch('https://dummyjson.com/users').then((res) => res.json());
        return true;
    }
}
