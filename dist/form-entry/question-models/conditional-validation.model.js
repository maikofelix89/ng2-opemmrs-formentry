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
import { ValidationModel } from './validation.model';
var ConditionalValidationModel = /** @class */ (function (_super) {
    __extends(ConditionalValidationModel, _super);
    function ConditionalValidationModel(validations) {
        var _this = _super.call(this, validations) || this;
        _this.referenceQuestionId = validations.referenceQuestionId;
        _this.referenceQuestionAnswers = validations.referenceQuestionAnswers;
        return _this;
    }
    return ConditionalValidationModel;
}(ValidationModel));
export { ConditionalValidationModel };
//# sourceMappingURL=conditional-validation.model.js.map