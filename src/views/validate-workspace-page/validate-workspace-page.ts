import { IRouteableComponent, IRouter } from '@aurelia/router';
import { inject } from 'aurelia';
import { TheHook } from '../../infra/hook';
import { TheSecondHook } from '../../infra/second-hook';

@inject(IRouter)
export class ValidateWorkspacePage implements IRouteableComponent {
    static dependencies = [TheHook, TheSecondHook];
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
