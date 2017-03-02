define(['jquery', 'handlebars', 'utils'], function($, hbs, utils) {
    var data = utils.store()

    var App = {
        init: function() {
            this.cacheElements();
            this.bindEvents();
            this.render();
        },

        cacheElements: function() {
            this.$ul = $('#todo-list');
            this.$input = $('#todo-input');
            this.template = hbs.compile($('#card-template').html());
        },

        bindEvents: function() {
            this.$input.on('keyup', this.create.bind(this));
            this.$ul
                .on('click', '.delete', this.delete.bind(this))
                .on('change', '.toggle', this.complete.bind(this));
        },

        create: function(e) {
            if (e.keyCode === 13) {
                data.push({
                    id: utils.uuid(),
                    name: this.$input.val(),
                    completed: false
                })

                this.$input.val('');
                this.render()
            }
        },

        delete: function(e) {
            var uuid = $(e.target).closest('li').data('id');
            var idx = this.convertUuidToArrayIndex(uuid);
            data.splice(idx, 1);

            this.render();
        },

        complete: function(e) {
            var $checkbox = $(e.target);
            var uuid = $checkbox.closest('li').data('id');
            var idx = this.convertUuidToArrayIndex(uuid);
            data[idx].completed = $checkbox.val();

            this.render();
        },

        render: function() {
            utils.store(data);
            var markup = this.template(data);
            this.$ul.html(markup);
        },

        convertUuidToArrayIndex: function(uuid) {
            var l = data.length;
            while(l--) {
                if (data[l].id === uuid) {
                    return l;
                }
            }
        }
    }

    return App;
})