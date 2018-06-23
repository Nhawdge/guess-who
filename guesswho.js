function GuessWhoViewModel() {
    var self = this;

    self.games = ko.observableArray();
    self.selectedGame = ko.observable();

    self.images = ko.computed(function () {
        if (self.selectedGame()) {
            console.log(self.selectedGame())
            return self.selectedGame().images.map(function (i) {
                return new Image(i)
            });
        }
    })


    self.onLoad = function () {
    }

    self.onLoad();
}

function Image(img) {
    var self = this;

    self.src = ko.observable(img.src);
    self.title = ko.observable(img.title);
    self.selected = ko.observable(false);

    self.select = function () {
        self.selected(!self.selected());
    }
}