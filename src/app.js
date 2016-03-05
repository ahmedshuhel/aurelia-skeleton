export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'main/welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'main/users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'main/child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
