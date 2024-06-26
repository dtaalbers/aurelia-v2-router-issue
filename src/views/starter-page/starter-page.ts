import { IRoute, IRouteableComponent, Parameters } from '@aurelia/router';
import { TheHook } from '../../infra/hook';
import { TheSecondHook } from '../../infra/second-hook';

export class StarterPage implements IRouteableComponent {
    static dependencies = [TheHook, TheSecondHook];
    static routes: IRoute[] = [
        {
            path: '',
            redirectTo: 'first-section'
        } as IRoute,
        {
            id: 'first-section',
            path: 'first-section',
            component: () => import('../first-section/first-section'),
            title: 'First Section',
            viewport: 'starter'
        } as IRoute,

        {
            id: 'second-section',
            path: 'second-section',
            component: () => import('../second-section/second-section'),
            title: 'Second Section',
            viewport: 'starter'
        }
    ];

    // public async loading(parameters: Parameters): Promise<void> {}
    public loading(parameters: Parameters): void {}
}
