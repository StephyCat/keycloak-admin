"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var resource_1 = __importDefault(require("./resource"));
var IdentityProviders = (function (_super) {
    __extends(IdentityProviders, _super);
    function IdentityProviders(client) {
        var _this = _super.call(this, client, {
            path: '/admin/realms/{realm}/identity-provider/instances',
            getUrlParams: function () { return ({
                realm: client.realmName
            }); },
            getBaseUrl: function () { return client.baseUrl; }
        }) || this;
        _this.find = _this.makeRequest({
            method: 'GET'
        });
        _this.create = _this.makeRequest({
            method: 'POST'
        });
        _this.findOne = _this.makeRequest({
            method: 'GET',
            path: '/{alias}',
            urlParamKeys: ['alias'],
            catchNotFound: true
        });
        _this.update = _this.makeUpdateRequest({
            method: 'PUT',
            path: '/{alias}',
            urlParamKeys: ['alias']
        });
        _this.del = _this.makeRequest({
            method: 'DELETE',
            path: '/{alias}',
            urlParamKeys: ['alias']
        });
        return _this;
    }
    return IdentityProviders;
}(resource_1["default"]));
exports.IdentityProviders = IdentityProviders;
//# sourceMappingURL=identityProviders.js.map