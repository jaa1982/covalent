import { Component, ElementRef, Input, Output, EventEmitter, Renderer2, SecurityContext, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

var hljs = require('highlight.js/lib');
var TdHighlightComponent = /** @class */ (function () {
    function TdHighlightComponent(_renderer, _elementRef, _domSanitizer) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this.language = 'typescript';
        this.onContentReady = new EventEmitter();
    }
    Object.defineProperty(TdHighlightComponent.prototype, "content", {
        set: function (content) {
            this._content = content;
            this._loadContent(this._content);
        },
        enumerable: true,
        configurable: true
    });
    TdHighlightComponent.prototype.ngAfterViewInit = function () {
        if (!this.language) {
            throw new Error('Error: language attribute must be defined in TdHighlightComponent.');
        }
        if (!this._content) {
            this._loadContent(((this._elementRef.nativeElement)).textContent);
        }
    };
    TdHighlightComponent.prototype._loadContent = function (code) {
        if (code && code.trim().length > 0) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', '');
            var preElement = this._elementFromString(this._render(code));
        }
        this.onContentReady.emit();
    };
    TdHighlightComponent.prototype._elementFromString = function (codeStr) {
        var preElement = this._renderer.createElement('pre');
        this._renderer.appendChild(this._elementRef.nativeElement, preElement);
        var codeElement = this._renderer.createElement('code');
        this._renderer.appendChild(preElement, codeElement);
        this._renderer.addClass(codeElement, 'highlight');
        codeElement.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, codeStr);
        return preElement;
    };
    TdHighlightComponent.prototype._render = function (contents) {
        contents = contents.replace(/^(\s|\t)*\n+/g, '')
            .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
        var lines = contents.split('\n');
        var firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line
                .replace('=""', '')
                .replace(startingWhitespaceRegex, '')
                .replace(/\s+$/, '');
        });
        var codeToParse = lines.join('\n')
            .replace(/\{ \{/gi, '{{').replace(/\} \}/gi, '}}')
            .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
        var highlightedCode = hljs.highlight(this.language, codeToParse, true);
        highlightedCode.value = highlightedCode.value
            .replace(/=<span class="hljs-value">""<\/span>/gi, '')
            .replace('<head>', '')
            .replace('<head/>', '');
        return highlightedCode.value;
    };
    return TdHighlightComponent;
}());
TdHighlightComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-highlight',
                styles: [":host ::ng-deep{display:block;overflow-x:auto;padding:16px}:host ::ng-deep .highlight,:host ::ng-deep code,:host ::ng-deep pre{font-family:Menlo,Monaco,\"Andale Mono\",\"lucida console\",\"Courier New\",monospace}:host ::ng-deep pre{display:block;overflow-x:auto;padding:0;margin:0;background:0 0;font-family:Menlo,Monaco,\"Andale Mono\",\"lucida console\",\"Courier New\",monospace;line-height:1.45;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-font-smoothing:auto;-webkit-text-size-adjust:none;position:relative;border-radius:2px;font-size:.8rem}:host ::ng-deep code{margin:0;padding:0;overflow-wrap:break-word;white-space:pre-wrap}:host ::ng-deep .highlight{display:block;overflow-wrap:break-word;line-height:1.5;margin:0}"],
                template: "<ng-content></ng-content>",
            },] },
];
TdHighlightComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: DomSanitizer, },
]; };
TdHighlightComponent.propDecorators = {
    "content": [{ type: Input, args: ['content',] },],
    "language": [{ type: Input, args: ['lang',] },],
    "onContentReady": [{ type: Output, args: ['contentReady',] },],
};
var CovalentHighlightModule = /** @class */ (function () {
    function CovalentHighlightModule() {
    }
    return CovalentHighlightModule;
}());
CovalentHighlightModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TdHighlightComponent,
                ],
                exports: [
                    TdHighlightComponent,
                ],
            },] },
];
CovalentHighlightModule.ctorParameters = function () { return []; };

export { TdHighlightComponent, CovalentHighlightModule };
//# sourceMappingURL=covalent-highlight.js.map
