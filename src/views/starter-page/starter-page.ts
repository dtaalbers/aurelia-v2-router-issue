import { IRoute, IRouteableComponent } from '@aurelia/router';

export class StarterPage implements IRouteableComponent {
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
}
