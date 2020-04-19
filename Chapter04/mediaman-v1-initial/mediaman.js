"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var localforage_1 = __importDefault(require("localforage"));
var class_transformer_1 = require("class-transformer");
require("reflect-metadata");
var Genre;
(function (Genre) {
    Genre["Horror"] = "Horror";
    Genre["Fantastic"] = "Fantastic";
    Genre["Thriller"] = "Thriller";
    Genre["Romance"] = "Romance";
    Genre["Fiction"] = "Fiction";
})(Genre || (Genre = {}));
var Media = /** @class */ (function () {
    function Media(_name, _description, _pictureLocation, _genre, identifier) {
        this._name = _name;
        this._description = _description;
        this._pictureLocation = _pictureLocation;
        this._genre = _genre;
        if (identifier) {
            this._identifier = identifier;
        }
        else {
            this._identifier = Math.random().toString(36).substr(2, 9);
        }
    }
    Object.defineProperty(Media.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (identifier) {
            this._identifier = identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "pictureLocation", {
        get: function () {
            return this._pictureLocation;
        },
        set: function (pictureLocation) {
            this._pictureLocation = pictureLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (genre) {
            this._genre = genre;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        class_transformer_1.Expose()
    ], Media.prototype, "identifier", null);
    __decorate([
        class_transformer_1.Expose()
    ], Media.prototype, "name", null);
    __decorate([
        class_transformer_1.Expose()
    ], Media.prototype, "description", null);
    __decorate([
        class_transformer_1.Expose()
    ], Media.prototype, "pictureLocation", null);
    __decorate([
        class_transformer_1.Expose()
    ], Media.prototype, "genre", null);
    return Media;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(name, description, pictureLocation, genre, author, numberOfPages, identifier) {
        var _this = _super.call(this, name, description, pictureLocation, genre, identifier) || this;
        _this._numberOfPages = numberOfPages;
        _this._author = author;
        return _this;
    }
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (author) {
            this._author = author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "numberOfPages", {
        get: function () {
            return this._numberOfPages;
        },
        set: function (numberOfPages) {
            this._numberOfPages = numberOfPages;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        class_transformer_1.Expose()
    ], Book.prototype, "author", null);
    __decorate([
        class_transformer_1.Expose()
    ], Book.prototype, "numberOfPages", null);
    return Book;
}(Media));
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(name, description, pictureLocation, genre, duration, director, identifier) {
        var _this = _super.call(this, name, description, pictureLocation, genre, identifier) || this;
        _this._duration = duration;
        _this._director = director;
        return _this;
    }
    Object.defineProperty(Movie.prototype, "director", {
        get: function () {
            return this._director;
        },
        set: function (director) {
            this._director = director;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Movie.prototype.set = function (duration) {
        this._duration = duration;
    };
    __decorate([
        class_transformer_1.Expose()
    ], Movie.prototype, "director", null);
    __decorate([
        class_transformer_1.Expose()
    ], Movie.prototype, "duration", null);
    return Movie;
}(Media));
var MediaCollection = /** @class */ (function () {
    function MediaCollection(type, name, identifier) {
        this._collection = [];
        this._type = type;
        this._name = name ? name : "";
        this._identifier = identifier
            ? identifier
            : Math.random().toString(36).substr(2, 9);
    }
    Object.defineProperty(MediaCollection.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (identifier) {
            this._identifier = identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCollection.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCollection.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        set: function (collection) {
            this._collection = collection;
        },
        enumerable: true,
        configurable: true
    });
    MediaCollection.prototype.addMedia = function (media) {
        if (media) {
            this._collection = this._collection.concat(media);
        }
    };
    MediaCollection.prototype.removeMedia = function (itemId) {
        if (itemId) {
            this._collection = this._collection.filter(function (item) {
                return item.identifier !== itemId;
            });
        }
    };
    __decorate([
        class_transformer_1.Expose()
    ], MediaCollection.prototype, "identifier", null);
    __decorate([
        class_transformer_1.Expose()
    ], MediaCollection.prototype, "name", null);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function (options) {
            if (options) {
                return options.newObject._type;
            }
            else {
                throw new Error("Cannot not determine the type because the options object is null or undefined");
            }
        })
    ], MediaCollection.prototype, "collection", null);
    return MediaCollection;
}());
var MediaServiceImp = /** @class */ (function () {
    function MediaServiceImp(_type) {
        this._type = _type;
        console.log("Initializing media service for " + _type.name);
        this._store = localforage_1.default.createInstance({
            name: "mediaMan",
            version: 1.0,
            storeName: "median-man-" + _type.name,
            description: "MedianMan data store",
        });
    }
    MediaServiceImp.prototype.loadMediaCollection = function (identifier) {
        var _this = this;
        console.log("Trying to load media collection with the following identifier:" + identifier);
        return new Promise(function (resolve, reject) {
            _this._store
                .getItem(identifier)
                .then(function (value) {
                console.log("Found the collection: ", value);
                var retrievedCollection = class_transformer_1.plainToClassFromExist(new MediaCollection(_this._type), value);
                console.log("Retrieved collection: ", retrievedCollection);
                resolve(retrievedCollection);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    MediaServiceImp.prototype.saveMediaCollection = function (collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!collection) {
                reject(new Error("The list cannot be null or undefined!"));
            }
            console.log("Saving media collection with the following name " + collection.name);
            var serializedVersion = class_transformer_1.classToPlain(collection, {
                excludePrefixes: ["_"],
            });
            _this._store
                .setItem(collection.identifier, serializedVersion)
                .then(function (value) {
                console.log("Saved the " + collection.identifier + " collection successfully! Saved value: " + value);
                resolve();
            })
                .catch(function (err) {
                console.error("Failed to save the " + collection.name + " collection with identifier " + collection.identifier + ".Error: " + err);
                reject(err);
            });
        });
    };
    MediaServiceImp.prototype.getMediaCollectionIdentifierList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("Retrieving the list of media collection identifiers");
            _this._store
                .keys()
                .then(function (keys) {
                console.log("Retrieved the of media collection identifiers: " + keys);
                resolve(keys);
            })
                .catch(function (err) {
                console.error("Failed to retrieve the list of media collection identifiers. Error: " + err);
                reject(err);
            });
        });
    };
    MediaServiceImp.prototype.removeMediaCollection = function (identifier) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!identifier || "" === identifier.trim()) {
                reject(new Error("The identifier must be provided"));
            }
            console.log("Remove media collection with the following identifier " + identifier);
            _this._store
                .removeItem(identifier)
                .then(function () {
                console.log("Remove ths " + identifier + " collection successfully!");
                resolve();
            })
                .catch(function (err) {
                console.error("Failed to removed the " + identifier + " collection");
                reject(err);
            });
        });
    };
    return MediaServiceImp;
}());
var HTMLMedianView = /** @class */ (function () {
    function HTMLMedianView() {
        this._genreOptions = "";
        this._newBookCollectionForm = document.getElementById("newBookCollection");
        this._newBookCollectionName = document.getElementById("newBookCollectionName");
        this._bookCollectionsContainer = document.getElementById("bookCollections");
        if (!this._newBookCollectionForm) {
            throw new Error("Could not initilaize the view. The 'newBookCollection' element id was not found. was the template changed?");
        }
        if (!this._newBookCollectionName) {
            throw new Error("Could not initilaize the view. The 'newBookCollectionName' element id was not found. was the template changed?");
        }
        if (!this._bookCollectionsContainer) {
            throw new Error("Could not initilaize the view. The 'bookCollections' element id was not found. was the template changed?");
        }
        for (var genreKey in Genre) {
            this._genreOptions += "<option value=\"" + genreKey + "\">" + Genre[genreKey] + "</option>";
        }
    }
    HTMLMedianView.prototype.getNewBookCollectionName = function () {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.renderBookCollection = function (bookCollection) {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.displayErrorMessage = function (message) {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.clearBookCollection = function () {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.removeBookCollection = function (identifier) {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.getNewBookDetails = function (collectionIdentifier) {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.renderBook = function (collectionIdentifier, book) {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.removeBook = function (collectionIdentifier, bookIdentifier) {
        throw new Error("Method not implemented.");
    };
    HTMLMedianView.prototype.clearNewBookCollectionForm = function (colllectionIdentifier) {
        throw new Error("Method not implemented.");
    };
    return HTMLMedianView;
}());
//# sourceMappingURL=mediaman.js.map