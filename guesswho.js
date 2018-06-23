function GuessWhoViewModel() {
    var self = this;

    self.Images = ko.observableArray();

    self.onLoad = function () {
        self.Images(config.images.map(function (i) {
            return new Image(i)
        }));
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