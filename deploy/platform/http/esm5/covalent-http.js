import { Request, RequestMethod, HttpModule, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { NgModule, Injector, InjectionToken } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(_http, _injector, _httpInterceptorMatcher, requestInterceptorConfigs) {
        var _this = this;
        this._http = _http;
        this._injector = _injector;
        this._httpInterceptorMatcher = _httpInterceptorMatcher;
        this._requestInterceptors = [];
        requestInterceptorConfigs.forEach(function (config) {
            _this._requestInterceptors.push({
                interceptor: (_injector.get(config.interceptor)),
                paths: config.paths,
            });
        });
    }
    HttpInterceptorService.prototype.delete = function (url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Delete;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.get = function (url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Get;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.head = function (url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Head;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.patch = function (url, data, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Patch;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.post = function (url, data, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Post;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.put = function (url, data, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Put;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.request = function (url, requestOptions) {
        var _this = this;
        if (requestOptions === void 0) { requestOptions = {}; }
        var requestUrl;
        if (url instanceof Request) {
            requestUrl = url.url ? url.url : requestOptions.url;
        }
        else {
            requestUrl = url;
        }
        if (!requestOptions.url) {
            requestOptions.url = requestUrl;
        }
        var interceptors = this._requestInterceptors.filter(function (mapping) {
            return _this._httpInterceptorMatcher.matches(requestOptions, mapping);
        }).map(function (mapping) {
            return mapping.interceptor;
        });
        return this._setupRequest(url, requestOptions, interceptors);
    };
    HttpInterceptorService.prototype._setupRequest = function (url, requestOptions, interceptors) {
        var _this = this;
        try {
            requestOptions = this._requestResolve(requestOptions, interceptors);
        }
        catch (e) {
            return new Observable(function (subscriber) {
                subscriber.error(e);
            });
        }
        return new Observable(function (subscriber) {
            _this._http.request(url, requestOptions)
                .subscribe(function (response) {
                subscriber.next(_this._responseResolve(response, interceptors));
                subscriber.complete();
            }, function (error) {
                subscriber.error(_this._responseErrorResolve(error, interceptors));
            });
        });
    };
    HttpInterceptorService.prototype._requestResolve = function (requestOptions, interceptors) {
        interceptors.forEach(function (interceptor) {
            if (interceptor.onRequest) {
                try {
                    requestOptions = interceptor.onRequest(requestOptions);
                }
                catch (e) {
                    if (interceptor.onRequestError) {
                        requestOptions = interceptor.onRequestError(requestOptions);
                        if (!requestOptions) {
                            throw e;
                        }
                    }
                    else {
                        throw e;
                    }
                }
            }
        });
        return requestOptions;
    };
    HttpInterceptorService.prototype._responseResolve = function (response, interceptors) {
        interceptors.forEach(function (interceptor) {
            if (interceptor.onResponse) {
                response = interceptor.onResponse(response);
            }
        });
        return response;
    };
    HttpInterceptorService.prototype._responseErrorResolve = function (error, interceptors) {
        interceptors.forEach(function (interceptor) {
            if (interceptor.onResponseError) {
                error = interceptor.onResponseError(error);
            }
        });
        return error;
    };
    return HttpInterceptorService;
}());
var URLRegExpInterceptorMatcher = /** @class */ (function () {
    function URLRegExpInterceptorMatcher() {
    }
    URLRegExpInterceptorMatcher.prototype.matches = function (options, mapping) {
        return mapping.paths.filter(function (path) {
            path = path.replace(/\*\*/gi, '<>')
                .replace(/\*/gi, '[a-zA-Z0-9\\-_]+')
                .replace(/<>/gi, '[a-zA-Z0-9\\-_\/]*');
            if (path) {
                path += '(\\?{1}.*)?$';
                return new RegExp(path).test(options.url);
            }
            return false;
        }).length > 0;
    };
    return URLRegExpInterceptorMatcher;
}());
var HTTP_CONFIG = new InjectionToken('HTTP_CONFIG');
function httpFactory(http, injector, config) {
    return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config.interceptors);
}
var HTTP_INTERCEPTOR_PROVIDER = {
    provide: HttpInterceptorService,
    useFactory: httpFactory,
    deps: [Http, Injector, HTTP_CONFIG],
};
var CovalentHttpModule = /** @class */ (function () {
    function CovalentHttpModule() {
    }
    CovalentHttpModule.forRoot = function (config) {
        if (config === void 0) { config = { interceptors: [] }; }
        return {
            ngModule: CovalentHttpModule,
            providers: [{
                    provide: HTTP_CONFIG,
                    useValue: config,
                },
                HTTP_INTERCEPTOR_PROVIDER,
            ],
        };
    };
    return CovalentHttpModule;
}());
CovalentHttpModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpModule,
                ],
            },] },
];
CovalentHttpModule.ctorParameters = function () { return []; };
var RESTService = /** @class */ (function () {
    function RESTService(http, config) {
        this.http = http;
        this._base = config.baseUrl.replace(/\/$/, '');
        this._path = config.path.replace(/^\//, '');
        this._baseHeaders = config.baseHeaders ? config.baseHeaders : new Headers();
        this._dynamicHeaders = config.dynamicHeaders ? config.dynamicHeaders : function () { return new Headers(); };
        this.transform = config.transform ? config.transform : function (response) { return response.json(); };
    }
    RESTService.prototype.query = function (query, transform) {
        var _this = this;
        var request = this.http.get(this.buildUrl(undefined, query), this.buildRequestOptions());
        return request.pipe(catchError(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        }), map(function (res) {
            if (transform) {
                return transform(res);
            }
            return _this.transform(res);
        }));
    };
    RESTService.prototype.get = function (id, transform) {
        var _this = this;
        var request = this.http.get(this.buildUrl(id), this.buildRequestOptions());
        return request.pipe(catchError(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        }), map(function (res) {
            if (transform) {
                return transform(res);
            }
            return _this.transform(res);
        }));
    };
    RESTService.prototype.create = function (obj, transform) {
        var _this = this;
        var requestOptions = this.buildRequestOptions();
        var request = this.http.post(this.buildUrl(), obj, requestOptions);
        return request.pipe(catchError(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        }), map(function (res) {
            if (res.status === 201) {
                if (transform) {
                    return transform(res);
                }
                return _this.transform(res);
            }
            else {
                return res;
            }
        }));
    };
    RESTService.prototype.update = function (id, obj, transform) {
        var _this = this;
        var requestOptions = this.buildRequestOptions();
        var request = this.http.patch(this.buildUrl(id), obj, requestOptions);
        return request.pipe(catchError(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        }), map(function (res) {
            if (res.status === 200) {
                if (transform) {
                    return transform(res);
                }
                return _this.transform(res);
            }
            else {
                return res;
            }
        }));
    };
    RESTService.prototype.delete = function (id, transform) {
        var _this = this;
        var request = this.http.delete(this.buildUrl(id), this.buildRequestOptions());
        return request.pipe(catchError(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        }), map(function (res) {
            if (res.status === 200) {
                if (transform) {
                    return transform(res);
                }
                return _this.transform(res);
            }
            else {
                return res;
            }
        }));
    };
    RESTService.prototype.buildRequestOptions = function () {
        var requestHeaders = new Headers();
        this._baseHeaders.forEach(function (value, key) {
            requestHeaders.set(key, value);
        });
        this._dynamicHeaders().forEach(function (value, key) {
            requestHeaders.set(key, value);
        });
        var requestOptions = {
            headers: requestHeaders,
        };
        return requestOptions;
    };
    RESTService.prototype.buildUrl = function (id, query) {
        var url = this._path ? this._path : '';
        if (id) {
            url += "/" + id;
        }
        if (query) {
            url += this.buildQuery(query);
        }
        url = this._base + "/" + url;
        return url;
    };
    RESTService.prototype.buildQuery = function (query) {
        var url = '';
        if (query) {
            url += '?';
            var params = [];
            for (var key in query) {
                var value = query[key];
                if (value !== undefined) {
                    params.push(key + "=" + value);
                }
            }
            url += params.join('&');
        }
        return url;
    };
    return RESTService;
}());

export { HTTP_CONFIG, httpFactory, HTTP_INTERCEPTOR_PROVIDER, CovalentHttpModule, RESTService, URLRegExpInterceptorMatcher, HttpInterceptorService };
//# sourceMappingURL=covalent-http.js.map
