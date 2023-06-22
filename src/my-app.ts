import { IRoute, IRouteableComponent } from '@aurelia/router';

export class MyApp implements IRouteableComponent {
    static routes: IRoute[] = [
        {
            id: 'my-first-page',
            path: ['', 'first'],
            component: () => import('./views/my-first-page/my-first-page'),
            title: ''
        } as IRoute,
        {
            id: 'test',
            path: 'test',
            component: () => import('./views/test/test'),
            title: 'Test'
        } as IRoute
    ];
}
