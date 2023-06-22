import { IRouteableComponent, IRouter } from '@aurelia/router';
import { inject } from 'aurelia';

@inject(IRouter)
export class ValidateWorkspacePage implements IRouteableComponent {
    private navWorkspace: string;

    public constructor(
        private readonly router: IRouter //
    ) {}

    // How I would get the workspace parameter in Aurelia 1.
    // public activate(params: any): void {
    //     this.navWorkspace = params.workspace;
    // }

    public async attached(): Promise<void> {
        console.log('Validating workspace');

        // I am trying to update my Aurelia 1 app to Aurelia 2.
        // In my case a user can have one or more workspaces.
        // The user can open a application by going to the root like this:
        // http://localhost:9000/
        // Or the user can open a application by going to the root and adding a workspace like this:
        // http://localhost:9000/abstergo/
        // In this case this page is skipped and it would go to the starter page right away.

        // Normally this workspace would be an API call or it would already be present in de url.
        const workspace = this.navWorkspace || 'abstergo';

        // Here some workspace validation would happen.
        // For example if the user is allowed to use this workspace etc.

        // Lets asume the workspace is valid so we can navigate to the starter page.
        // In Aurelia 1 I was able to do it like this. I used the following routes:
        // {
        //     route: [''],
        //     name: 'validate-workspace-page',
        //     moduleId: PLATFORM.moduleName('views/validate-workspace-page/validate-workspace-page'),
        //     title: ''
        // },
        // {
        //     route: ':workspace/',
        //     name: 'starter-page',
        //     moduleId: PLATFORM.moduleName('views/starter-page/starter-page'),
        //     title: ''
        // },
        // I was able to navigate by using using the NAME ('starter-page') of the route.
        // this.router.navigateToRoute('starter-page', { workspace });
        // And the url would look like this http://localhost:9000/abstergo/
        // A user can have one or more workspaces so the URL would always reflect the active workspace.

        // I am trying to do the same thing in Aurelia 2 but this does not seem to work.
        // It stays on the validate workspace page, I would expect it to go the starter page.
        // If you comment below line and uncomment the nav in 'my-app.html' I am able to navigate to the starter page.
        await this.router.load('starter-page', { parameters: { workspace } });

        // Although <a load="route:starter-page; params.bind:{workspace: 'abstergo'}">View Profile</a> doesn't work either.
        // I am getting error: 'Uncaught Error: AUR0707:route,load' with this line
    }
}
