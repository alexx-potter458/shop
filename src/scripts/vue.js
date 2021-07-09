let app1 = new Vue({
    el: '#categories',
    data: {
        categories: [{
            selector:'Home',
            subCategories: ['Home1', 'Home2', 'Home3']
        }, {
            selector: 'Shop',
            subCategories: ['pag1', 'pag2']
        }, {
            selector: 'Icons',
            subCategories: ['pag1', 'pag2']
        }, {
            selector: 'Pages',
            subCategories: ['pag1', 'pag2']
        }, {
            selector: 'Docs',
            subCategories: ['pag1', 'pag2']
        }
        ]
    }
})

let footerApp = Vue.createApp({});

footerApp.component('customFooter', {
    template: `<div>aici</div>`
  })

footerApp.mount('#footer')