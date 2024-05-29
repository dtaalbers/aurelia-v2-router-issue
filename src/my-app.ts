import { IRoute, IRouteableComponent } from '@aurelia/router';
import { TheHook } from './infra/hook';
import { TheSecondHook } from './infra/second-hook';

export class MyApp implements IRouteableComponent {
    static dependencies = [TheHook, TheSecondHook];
    static routes: IRoute[] = [
        {
            id: 'validate-workspace-page',
            path: '',
            component: () => import('./views/validate-workspace-page/validate-workspace-page'),
            title: '',
            viewport: 'global'
        } as IRoute,
        {
            id: 'redirect',
            path: 'redirect',
            component: () => import('./views/redirect-page/redirect-page'),
            title: 'Redirect',
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
