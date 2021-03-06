import { Component, ElementRef, Input, Output, EventEmitter, Renderer2, SecurityContext, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable-next-line */
let hljs = require('highlight.js/lib');
class TdHighlightComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     */
    constructor(_renderer, _elementRef, _domSanitizer) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        /**
         * lang?: string
         *
         * Language of the code content to be parsed as highlighted html.
         * Defaults to `typescript`
         *
         * e.g. `typescript`, `html` , etc.
         */
        this.language = 'typescript';
        /**
         * contentReady?: function
         * Event emitted after the highlight content rendering is finished.
         */
        this.onContentReady = new EventEmitter();
    }
    /**
     * content?: string
     *
     * Code content to be parsed as highlighted html.
     * Used to load data dynamically.
     *
     * e.g. `.html`, `.ts` , etc.
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        this._content = content;
        this._loadContent(this._content);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.language) {
            throw new Error('Error: language attribute must be defined in TdHighlightComponent.');
        }
        if (!this._content) {
            this._loadContent((/** @type {?} */ (this._elementRef.nativeElement)).textContent);
        }
    }
    /**
     * General method to parse a string of code into HTML Elements and load them into the container
     * @param {?} code
     * @return {?}
     */
    _loadContent(code) {
        if (code && code.trim().length > 0) {
            // Clean container
            this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', '');
            // Parse html string into actual HTML elements.
            let /** @type {?} */ preElement = this._elementFromString(this._render(code));
        }
        this.onContentReady.emit();
    }
    /**
     * @param {?} codeStr
     * @return {?}
     */
    _elementFromString(codeStr) {
        // Renderer2 doesnt have a parsing method, so we have to sanitize and use [innerHTML]
        // to parse the string into DOM element for now.
        const /** @type {?} */ preElement = this._renderer.createElement('pre');
        this._renderer.appendChild(this._elementRef.nativeElement, preElement);
        const /** @type {?} */ codeElement = this._renderer.createElement('code');
        this._renderer.appendChild(preElement, codeElement);
        // Set .highlight class into <code> element
        this._renderer.addClass(codeElement, 'highlight');
        codeElement.innerHTML = this._domSanitizer.sanitize(SecurityContext.HTML, codeStr);
        return preElement;
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    _render(contents) {
        // Trim leading and trailing newlines
        contents = contents.replace(/^(\s|\t)*\n+/g, '')
            .replace(/(\s|\t)*\n+(\s|\t)*$/g, '');
        // Split markup by line characters
        let /** @type {?} */ lines = contents.split('\n');
        // check how much indentation is used by the first actual code line
        let /** @type {?} */ firstLineWhitespace = lines[0].match(/^(\s|\t)*/)[0];
        // Remove all indentation spaces so code can be parsed correctly
        let /** @type {?} */ startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line
                .replace('=""', '') // remove empty values
                .replace(startingWhitespaceRegex, '')
                .replace(/\s+$/, ''); // remove trailing white spaces
        });
        let /** @type {?} */ codeToParse = lines.join('\n')
            .replace(/\{ \{/gi, '{{').replace(/\} \}/gi, '}}')
            .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>'); // replace with < and > to render HTML in Angular
        // Parse code with highlight.js depending on language
        let /** @type {?} */ highlightedCode = hljs.highlight(this.language, codeToParse, true);
        highlightedCode.value = highlightedCode.value
            .replace(/=<span class="hljs-value">""<\/span>/gi, '')
            .replace('<head>', '')
            .replace('<head/>', '');
        return highlightedCode.value;
    }
}
TdHighlightComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-highlight',
                styles: [`:host ::ng-deep{display:block;overflow-x:auto;padding:16px}:host ::ng-deep .highlight,:host ::ng-deep code,:host ::ng-deep pre{font-family:Menlo,Monaco,"Andale Mono","lucida console","Courier New",monospace}:host ::ng-deep pre{display:block;overflow-x:auto;padding:0;margin:0;background:0 0;font-family:Menlo,Monaco,"Andale Mono","lucida console","Courier New",monospace;line-height:1.45;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-font-smoothing:auto;-webkit-text-size-adjust:none;position:relative;border-radius:2px;font-size:.8rem}:host ::ng-deep code{margin:0;padding:0;overflow-wrap:break-word;white-space:pre-wrap}:host ::ng-deep .highlight{display:block;overflow-wrap:break-word;line-height:1.5;margin:0}`],
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
TdHighlightComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: DomSanitizer, },
];
TdHighlightComponent.propDecorators = {
    "content": [{ type: Input, args: ['content',] },],
    "language": [{ type: Input, args: ['lang',] },],
    "onContentReady": [{ type: Output, args: ['contentReady',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CovalentHighlightModule {
}
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
/** @nocollapse */
CovalentHighlightModule.ctorParameters = () => [];

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

export { TdHighlightComponent, CovalentHighlightModule };
//# sourceMappingURL=covalent-highlight.js.map
