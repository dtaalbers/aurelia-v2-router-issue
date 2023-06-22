import { IRouteableComponent, IRouter } from '@aurelia/router';
import { inject } from 'aurelia';

@inject(IRouter)
export class MyFirstPage implements IRouteableComponent {
    public constructor(
        private readonly router: IRouter //
    ) {}

    public async attached(): Promise<void> {
        console.log('NAVIGATING');
        // Do some logic here, validating the workspace and recirecting the user
        // to a different page if needed.
        
        await this.router.load('/test');
    }
}
