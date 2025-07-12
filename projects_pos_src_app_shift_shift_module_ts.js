"use strict";
(self["webpackChunkpos"] = self["webpackChunkpos"] || []).push([["projects_pos_src_app_shift_shift_module_ts"],{

/***/ 6238:
/*!*******************************************************!*\
  !*** ./projects/pos/src/app/shift/shift.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftComponent": () => (/* binding */ ShiftComponent)
/* harmony export */ });
/* harmony import */ var _models_shift_model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/shift.model.model */ 30976);
/* harmony import */ var _services_pointer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pointer.service */ 31808);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 93568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shift.service */ 8628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_outlet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/outlet.service */ 14022);
/* harmony import */ var _services_table_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/table-layout.service */ 37214);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ 84119);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/header/header.component */ 2231);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);













const _c0 = ["authForm"];
function ShiftComponent_div_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", message_r4, " ");
  }
}
function ShiftComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Please correct the following errors and try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ShiftComponent_div_5_li_4_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.error);
  }
}
function ShiftComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r5);
  }
}
class ShiftComponent {
  constructor(shiftService, activatedRoute, outletService, tableLayoutService, authService, router) {
    this.shiftService = shiftService;
    this.activatedRoute = activatedRoute;
    this.outletService = outletService;
    this.tableLayoutService = tableLayoutService;
    this.authService = authService;
    this.router = router;
    this.showShiftButton = true;
    this.shift = "";
    this.openingBalance = "";
    this.error = [];
    this.outletId = "";
    this.hasMultipleShift = false;
    this.loadedUser = JSON.parse(localStorage.getItem("userData"));
    this.isQsrOutlet = false;
    this.shiftOptions = [1, 2];
    this.allShifts = [];
  }
  ngOnInit() {
    enableNumericKeyboard();
    this.businessDate = _services_pointer_service__WEBPACK_IMPORTED_MODULE_1__.PointerService.getISOBusinessDate();
    this.outletId = this.activatedRoute.snapshot.params['outlet_id'];
    this.outletService.getOutletSettings(this.outletId).subscribe(data => {
      if (data && data.length > 0) {
        let currentOutletSetting = data.filter(a => a.pos_restaurant_id === +this.outletId);
        if (currentOutletSetting.length > 0) {
          this.hasMultipleShift = currentOutletSetting[0].has_multiple_shifts_ind;
          if (!this.loadedUser) {
            this.router.navigate(['/']);
          }
          this.shiftService.getAll(this.outletId, this.loadedUser.id.toString(), this.businessDate).subscribe(resData => {
            if (resData && resData.length > 0) {
              this.checkQsrOutlet();
            } else {
              // if (!this.hasMultipleShift) {
              //   this.shift = "1";
              //   this.showShiftButton = false;
              // } else {
              //   this.showShiftButton = true;
              // }
              this.shiftService.getAllShifts(this.outletId, this.businessDate).subscribe(resData => {
                this.allShifts = resData;
                if (resData && resData.length > 0) {
                  this.shiftOptions = [];
                  this.shiftOptions.push(this.getCurrentShiftNo(this.allShifts));
                  this.showShiftButton = true;
                }
              }, errorMessage => {
                this.error.push(errorMessage);
              });
            }
          }, errorMessage => {
            this.error.push(errorMessage);
          });
        } else {
          this.router.navigate(['/outlet']);
        }
      } else {
        this.router.navigate(['/outlet']);
      }
    });
  }
  getCurrentShiftNo(shifts) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // minutes since midnight
    for (const shift of shifts) {
      const fromTime = new Date(shift.from_time);
      const toTime = new Date(shift.to_time);
      const fromMinutes = fromTime.getHours() * 60 + fromTime.getMinutes();
      const toMinutes = toTime.getHours() * 60 + toTime.getMinutes();
      if (currentTime >= fromMinutes && currentTime < toMinutes) {
        return shift.shift_no;
      }
    }
    return null; // If no shift matches
  }

  ngAfterViewInit() {
    let element = document.getElementById("shiftInput");
    element.click();
  }
  onShiftInputClick() {
    if (document.getElementById("shiftInput").value != "") {
      this.showShiftButton = false;
      this.shift = document.getElementById("shiftInput").value;
      document.getElementById("shiftInput").setAttribute("disabled", "disabled");
      document.getElementById("openingBalanceInput").removeAttribute("disabled");
      document.getElementById("openingBalanceInput").value = "";
      document.getElementById("shiftInput").value = "";
    } else {
      document.getElementById("shiftInput").style.borderColor = "red";
    }
  }
  onOpeningBalanceInputClick() {
    if (document.getElementById("openingBalanceInput").value != "") {
      this.showShiftButton = false;
      this.openingBalance = document.getElementById("openingBalanceInput").value;
      this.form.ngSubmit.emit();
    } else {
      document.getElementById("openingBalanceInput").style.borderColor = "red";
    }
  }
  onShitEnter() {
    this.onShiftInputClick();
  }
  onOpeningBalanceEnter() {
    this.onOpeningBalanceInputClick();
  }
  onSubmit(form) {
    this.error = [];
    if (!form.valid) {
      return;
    } else {
      this.shiftService.isValidShift(this.outletId, this.loadedUser.id.toString(), this.businessDate, this.shift).subscribe(resData => {
        if (resData && resData.length > 0) {
          this.showShiftButton = true;
          this.error.push("Shift " + this.shift + " is closed please enter another shift no");
        } else {
          this.createUserShift();
        }
      });
    }
  }
  createUserShift() {
    let user = this.authService.userValue;
    if (user) {
      const shift = new _models_shift_model_model__WEBPACK_IMPORTED_MODULE_0__.Shift(null, +this.outletId, +this.shift, _services_pointer_service__WEBPACK_IMPORTED_MODULE_1__.PointerService.getBusinessDate(), _services_pointer_service__WEBPACK_IMPORTED_MODULE_1__.PointerService.getLocalCurrencyId(), +this.openingBalance, 0, 0, 0, false, +user.id, false, null, "localhost", user.saas_company_id, user.company_id, user.branch_id);
      this.shiftService.create(shift).subscribe(data => {
        this.checkQsrOutlet();
        // this.tableLayoutService.getTableLayoutBy(this.outletId).subscribe(() => {
        //   this.router.navigate(['/table-layout/' + this.outletId]);
        // })
      });
    } else {
      this.router.navigate(['/']);
    }
  }
  checkQsrOutlet() {
    if (this.outletId) {
      const outletSettingData = JSON.parse(localStorage.getItem("outletSetting"));
      if (outletSettingData) {
        let currentOutletSetting = outletSettingData.filter(a => a.pos_restaurant_id === +this.outletId);
        if (currentOutletSetting.length > 0) {
          this.isQsrOutlet = currentOutletSetting[0].qsr_in_use_ind;
          //Get any Free table from layout
          this.tableLayoutService.getTableLayoutBy(this.outletId).subscribe(layoutData => {
            if (this.isQsrOutlet) {
              let selectedTable = layoutData.filter(t => {
                return t.pos_restaurant_id == +this.outletId && t.table_status.toUpperCase() === _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.POS_TABLE_STATUS_AVAILABLE.toUpperCase();
              });
              if (selectedTable && selectedTable.length > 0) {
                this.router.navigate(['/billing/' + this.outletId + '/qsr/' + selectedTable[0].table_code]);
              } else {
                this.router.navigate(['/billing/' + this.outletId + '/qsr/' + selectedTable[0].table_code]);
              }
            } else {
              this.router.navigate(['/table-layout/' + this.outletId]);
            }
          });
        }
      } else {
        this.router.navigate(['/outlet']);
      }
    }
  }
}
ShiftComponent.ɵfac = function ShiftComponent_Factory(t) {
  return new (t || ShiftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shift_service__WEBPACK_IMPORTED_MODULE_3__.ShiftService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_outlet_service__WEBPACK_IMPORTED_MODULE_4__.OutletService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_table_layout_service__WEBPACK_IMPORTED_MODULE_5__.TableLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
ShiftComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ShiftComponent,
  selectors: [["app-shift"]],
  viewQuery: function ShiftComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    }
  },
  decls: 30,
  vars: 21,
  consts: [[1, "wrapg_blk"], [1, "main_cnt_blk"], [1, "login_blk_parnt"], [1, "login_inr_contnr"], ["class", "error_msg_parnt", 4, "ngIf"], [1, "login_cnt_blk"], [1, "login_outlet_icn", "select_out_blk", "blue_main_parnt"], [1, "form-control", "select_out_icn"], [1, "keypad_main_blk"], ["id", "shiftInput", 3, "keyup.enter"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "openingBalanceInput", "type", "text", 1, "numericInput", 3, "keyup.enter"], ["id", "digitalKeyboardContainer", 1, "digitalKeyboardContainer"], [1, "button_blk"], ["type", "button", 1, "btn", 3, "click"], [1, "opng_lgn_btn"], ["type", "button", 3, "click"], [3, "ngSubmit"], ["authForm", "ngForm"], ["type", "hidden", "name", "shift", "required", "", 3, "ngModel"], ["type", "hidden", "name", "openingBalance", "required", "", 3, "ngModel"], [1, "error_msg_parnt"], [4, "ngFor", "ngForOf"], [3, "value"]],
  template: function ShiftComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "main", 1)(3, "section", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ShiftComponent_div_5_Template, 5, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "a", 7)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8)(13, "select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup.enter", function ShiftComponent_Template_select_keyup_enter_13_listener() {
        return ctx.onShitEnter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ShiftComponent_option_14_Template, 2, 2, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup.enter", function ShiftComponent_Template_input_keyup_enter_15_listener() {
        return ctx.onOpeningBalanceEnter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13)(18, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShiftComponent_Template_button_click_18_listener() {
        return ctx.onShiftInputClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ShiftComponent_Template_button_click_22_listener() {
        return ctx.onOpeningBalanceInputClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "form", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ShiftComponent_Template_form_ngSubmit_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](27);
        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onSubmit(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "input", 19)(29, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error && ctx.error.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 15, "SHIFT.OPEN_SHIFT"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](ctx.showShiftButton ? "display: inline-block;" : "display: none;");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.shiftOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](!ctx.showShiftButton ? "display: inline-block;" : "display: none;");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](ctx.showShiftButton ? "display: inline-block;" : "display: none;");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 17, "SHIFT.SHIFT_NUMBER"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](!ctx.showShiftButton ? "display: inline-block;" : "display: none;");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 19, "SHIFT.OPENING_BALANCE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.shift);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.openingBalance);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 23419:
/*!****************************************************!*\
  !*** ./projects/pos/src/app/shift/shift.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftModule": () => (/* binding */ ShiftModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shift_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift.component */ 6238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ 81877);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 22536);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _close_shift_close_shift_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close-shift/close-shift.component */ 13509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);









class ShiftModule {}
ShiftModule.ɵfac = function ShiftModule_Factory(t) {
  return new (t || ShiftModule)();
};
ShiftModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ShiftModule
});
ShiftModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
    path: '',
    component: _shift_component__WEBPACK_IMPORTED_MODULE_0__.ShiftComponent,
    canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ShiftModule, {
    declarations: [_shift_component__WEBPACK_IMPORTED_MODULE_0__.ShiftComponent, _close_shift_close_shift_component__WEBPACK_IMPORTED_MODULE_3__.CloseShiftComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=projects_pos_src_app_shift_shift_module_ts.js.map