import { IRouteableComponent, IRouter } from '@aurelia/router';
import { inject } from 'aurelia';

@inject(IRouter)
export class MyFirstPage implements IRouteableComponent {
    public constructor(
        private readonly router: IRouter //
    ) {}

    public async attached(): Promise<void> {
        console.log('NAVIGATING');
        // Navigate to the app starter.
        await this.router.load('/test');
    }
}
