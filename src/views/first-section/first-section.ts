import { IRoute, IRouteableComponent } from '@aurelia/router';
import { TheHook } from '../../infra/hook';
import { TheSecondHook } from '../../infra/second-hook';

export class FirstSection implements IRouteableComponent {
    static dependencies = [TheHook, TheSecondHook];
    static routes: IRoute[] = [
        {
            path: '',
            redirectTo: 'first-section-first-child'
        } as IRoute,
        {
            id: 'first-section-first-child',
            path: 'first-section-first-child',
            component: () => import('../first-section-first-child/first-section-first-child'),
            title: 'First Section First Child',
            viewport: 'first-section'
        } as IRoute,
        {
            id: 'first-section-second-child',
            path: 'first-section-second-child',
            component: () => import('../first-section-second-child/first-section-second-child'),
            title: 'First Section Second Child',
            viewport: 'first-section'
        } as IRoute,
        {
            id: 'first-section-third-child',
            path: 'first-section-third-child',
            component: () => import('../first-section-third-child/first-section-third-child'),
            title: 'First Section Third Child',
            viewport: 'first-section'
        } as IRoute
    ];
}
