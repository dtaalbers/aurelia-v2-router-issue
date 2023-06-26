import { IRoute, IRouteableComponent } from '@aurelia/router';

export class MyApp implements IRouteableComponent {
    static routes: IRoute[] = [
        {
            id: 'validate-workspace-page',
            path: '',
            component: () => import('./views/validate-workspace-page/validate-workspace-page'),
            title: '',
            viewport: 'global'
        } as IRoute,
        {
            id: 'starter-page',
            path: ':workspace',
            component: () => import('./views/starter-page/starter-page'),
            title: 'Test',
            viewport: 'global'
        } as IRoute
    ];
}
