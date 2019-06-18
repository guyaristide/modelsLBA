"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var ResponseData = /** @class */ (function () {
    function ResponseData(code, message, data, errors) {
        this.status_code = code;
        this.status_message = message;
        if (data) {
            this.data = data;
            if (util_1.isArray(data)) {
                // tslint:disable-next-line:semicolon
                this.total = data.length;
            }
        }
        if (errors) {
            this.errors = errors;
        }
    }
    return ResponseData;
}());
exports.ResponseData = ResponseData;
