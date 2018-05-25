import { Request, RequestMethod, HttpModule, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { NgModule, Injector, InjectionToken } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class HttpInterceptorService {
    /**
     * @param {?} _http
     * @param {?} _injector
     * @param {?} _httpInterceptorMatcher
     * @param {?} requestInterceptorConfigs
     */
    constructor(_http, _injector, _httpInterceptorMatcher, requestInterceptorConfigs) {
        this._http = _http;
        this._injector = _injector;
        this._httpInterceptorMatcher = _httpInterceptorMatcher;
        this._requestInterceptors = [];
        requestInterceptorConfigs.forEach((config) => {
            this._requestInterceptors.push({
                interceptor: /** @type {?} */ (_injector.get(config.interceptor)),
                paths: config.paths,
            });
        });
    }
    /**
     * @param {?} url
     * @param {?=} requestOptions
     * @return {?}
     */
    delete(url, requestOptions = {}) {
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Delete;
        return this.request(url, requestOptions);
    }
    /**
     * @param {?} url
     * @param {?=} requestOptions
     * @return {?}
     */
    get(url, requestOptions = {}) {
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Get;
        return this.request(url, requestOptions);
    }
    /**
     * @param {?} url
     * @param {?=} requestOptions
     * @return {?}
     */
    head(url, requestOptions = {}) {
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Head;
        return this.request(url, requestOptions);
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} requestOptions
     * @return {?}
     */
    patch(url, data, requestOptions = {}) {
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Patch;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} requestOptions
     * @return {?}
     */
    post(url, data, requestOptions = {}) {
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Post;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} requestOptions
     * @return {?}
     */
    put(url, data, requestOptions = {}) {
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Put;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    }
    /**
     * @param {?} url
     * @param {?=} requestOptions
     * @return {?}
     */
    request(url, requestOptions = {}) {
        let /** @type {?} */ requestUrl;
        if (url instanceof Request) {
            requestUrl = url.url ? url.url : requestOptions.url;
        }
        else {
            requestUrl = url;
        }
        if (!requestOptions.url) {
            requestOptions.url = requestUrl;
        }
        let /** @type {?} */ interceptors = this._requestInterceptors.filter((mapping) => {
            return this._httpInterceptorMatcher.matches(requestOptions, mapping);
        }).map((mapping) => {
            return mapping.interceptor;
        });
        return this._setupRequest(url, requestOptions, interceptors);
    }
    /**
     * @param {?} url
     * @param {?} requestOptions
     * @param {?} interceptors
     * @return {?}
     */
    _setupRequest(url, requestOptions, interceptors) {
        try {
            requestOptions = this._requestResolve(requestOptions, interceptors);
        }
        catch (/** @type {?} */ e) {
            return new Observable((subscriber) => {
                subscriber.error(e);
            });
        }
        return new Observable((subscriber) => {
            this._http.request(url, requestOptions)
                .subscribe((response) => {
                subscriber.next(this._responseResolve(response, interceptors));
                subscriber.complete();
            }, (error) => {
                subscriber.error(this._responseErrorResolve(error, interceptors));
            });
        });
    }
    /**
     * @param {?} requestOptions
     * @param {?} interceptors
     * @return {?}
     */
    _requestResolve(requestOptions, interceptors) {
        interceptors.forEach((interceptor) => {
            if (interceptor.onRequest) {
                try {
                    requestOptions = interceptor.onRequest(requestOptions);
                }
                catch (/** @type {?} */ e) {
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
    }
    /**
     * @param {?} response
     * @param {?} interceptors
     * @return {?}
     */
    _responseResolve(response, interceptors) {
        interceptors.forEach((interceptor) => {
            if (interceptor.onResponse) {
                response = interceptor.onResponse(response);
            }
        });
        return response;
    }
    /**
     * @param {?} error
     * @param {?} interceptors
     * @return {?}
     */
    _responseErrorResolve(error, interceptors) {
        interceptors.forEach((interceptor) => {
            if (interceptor.onResponseError) {
                error = interceptor.onResponseError(error);
            }
        });
        return error;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Concrete implementation for http interceptor matchers.
 * This implementation uses regex to check mapping paths vs request url.
 */
class URLRegExpInterceptorMatcher {
    /**
     * @param {?} options
     * @param {?} mapping
     * @return {?}
     */
    matches(options, mapping) {
        return mapping.paths.filter((path) => {
            path = path.replace(/\*\*/gi, '<>')
                .replace(/\*/gi, '[a-zA-Z0-9\\-_]+')
                .replace(/<>/gi, '[a-zA-Z0-9\\-_\/]*');
            if (path) {
                path += '(\\?{1}.*)?$';
                return new RegExp(path).test(options.url);
            }
            return false;
        }).length > 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const HTTP_CONFIG = new InjectionToken('HTTP_CONFIG');
/**
 * @param {?} http
 * @param {?} injector
 * @param {?} config
 * @return {?}
 */
function httpFactory(http, injector, config) {
    return new HttpInterceptorService(http, injector, new URLRegExpInterceptorMatcher(), config.interceptors);
}
const HTTP_INTERCEPTOR_PROVIDER = {
    provide: HttpInterceptorService,
    useFactory: httpFactory,
    deps: [Http, Injector, HTTP_CONFIG],
};
class CovalentHttpModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = { interceptors: [] }) {
        return {
            ngModule: CovalentHttpModule,
            providers: [{
                    provide: HTTP_CONFIG,
                    useValue: config,
                },
                HTTP_INTERCEPTOR_PROVIDER,
            ],
        };
    }
}
CovalentHttpModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpModule,
                ],
            },] },
];
/** @nocollapse */
CovalentHttpModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @abstract
 */
class RESTService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this._base = config.baseUrl.replace(/\/$/, '');
        this._path = config.path.replace(/^\//, '');
        this._baseHeaders = config.baseHeaders ? config.baseHeaders : new Headers();
        this._dynamicHeaders = config.dynamicHeaders ? config.dynamicHeaders : () => new Headers();
        this.transform = config.transform ? config.transform : (response) => response.json();
    }
    /**
     * @param {?=} query
     * @param {?=} transform
     * @return {?}
     */
    query(query, transform) {
        let /** @type {?} */ request = this.http.get(this.buildUrl(undefined, query), this.buildRequestOptions());
        return request.pipe(catchError((error) => {
            return new Observable((subscriber) => {
                try {
                    subscriber.error(this.transform(error));
                }
                catch (/** @type {?} */ err) {
                    subscriber.error(error);
                }
            });
        }), map((res) => {
            if (transform) {
                return transform(res);
            }
            return this.transform(res);
        }));
    }
    /**
     * @param {?} id
     * @param {?=} transform
     * @return {?}
     */
    get(id, transform) {
        let /** @type {?} */ request = this.http.get(this.buildUrl(id), this.buildRequestOptions());
        return request.pipe(catchError((error) => {
            return new Observable((subscriber) => {
                try {
                    subscriber.error(this.transform(error));
                }
                catch (/** @type {?} */ err) {
                    subscriber.error(error);
                }
            });
        }), map((res) => {
            if (transform) {
                return transform(res);
            }
            return this.transform(res);
        }));
    }
    /**
     * @param {?} obj
     * @param {?=} transform
     * @return {?}
     */
    create(obj, transform) {
        let /** @type {?} */ requestOptions = this.buildRequestOptions();
        let /** @type {?} */ request = this.http.post(this.buildUrl(), obj, requestOptions);
        return request.pipe(catchError((error) => {
            return new Observable((subscriber) => {
                try {
                    subscriber.error(this.transform(error));
                }
                catch (/** @type {?} */ err) {
                    subscriber.error(error);
                }
            });
        }), map((res) => {
            if (res.status === 201) {
                if (transform) {
                    return transform(res);
                }
                return this.transform(res);
            }
            else {
                return res;
            }
        }));
    }
    /**
     * @param {?} id
     * @param {?} obj
     * @param {?=} transform
     * @return {?}
     */
    update(id, obj, transform) {
        let /** @type {?} */ requestOptions = this.buildRequestOptions();
        let /** @type {?} */ request = this.http.patch(this.buildUrl(id), obj, requestOptions);
        return request.pipe(catchError((error) => {
            return new Observable((subscriber) => {
                try {
                    subscriber.error(this.transform(error));
                }
                catch (/** @type {?} */ err) {
                    subscriber.error(error);
                }
            });
        }), map((res) => {
            if (res.status === 200) {
                if (transform) {
                    return transform(res);
                }
                return this.transform(res);
            }
            else {
                return res;
            }
        }));
    }
    /**
     * @param {?} id
     * @param {?=} transform
     * @return {?}
     */
    delete(id, transform) {
        let /** @type {?} */ request = this.http.delete(this.buildUrl(id), this.buildRequestOptions());
        return request.pipe(catchError((error) => {
            return new Observable((subscriber) => {
                try {
                    subscriber.error(this.transform(error));
                }
                catch (/** @type {?} */ err) {
                    subscriber.error(error);
                }
            });
        }), map((res) => {
            if (res.status === 200) {
                if (transform) {
                    return transform(res);
                }
                return this.transform(res);
            }
            else {
                return res;
            }
        }));
    }
    /**
     * @return {?}
     */
    buildRequestOptions() {
        let /** @type {?} */ requestHeaders = new Headers();
        this._baseHeaders.forEach((value, key) => {
            requestHeaders.set(key, value);
        });
        this._dynamicHeaders().forEach((value, key) => {
            requestHeaders.set(key, value);
        });
        let /** @type {?} */ requestOptions = {
            headers: requestHeaders,
        };
        return requestOptions;
    }
    /**
     * @param {?=} id
     * @param {?=} query
     * @return {?}
     */
    buildUrl(id, query) {
        let /** @type {?} */ url = this._path ? this._path : '';
        if (id) {
            url += `/${id}`;
        }
        if (query) {
            url += this.buildQuery(query);
        }
        url = `${this._base}/${url}`;
        return url;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    buildQuery(query) {
        let /** @type {?} */ url = '';
        if (query) {
            url += '?';
            let /** @type {?} */ params = [];
            for (let /** @type {?} */ key in query) {
                let /** @type {?} */ value = query[key];
                if (value !== undefined) {
                    params.push(`${key}=${value}`);
                }
            }
            url += params.join('&');
        }
        return url;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { HTTP_CONFIG, httpFactory, HTTP_INTERCEPTOR_PROVIDER, CovalentHttpModule, RESTService, URLRegExpInterceptorMatcher, HttpInterceptorService };
//# sourceMappingURL=covalent-http.js.map
