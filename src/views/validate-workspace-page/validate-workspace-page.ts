import { IRouteableComponent, IRouter } from '@aurelia/router';
import { inject } from 'aurelia';

@inject(IRouter)
export class ValidateWorkspacePage implements IRouteableComponent {
    public constructor(
        private readonly router: IRouter //
    ) {}

    public async attached(): Promise<void> {
        // Ment to validate some things here.
        setTimeout(async () => {
            await this.router.load(`/abstergo`);
        }, 1000);
    }
}
