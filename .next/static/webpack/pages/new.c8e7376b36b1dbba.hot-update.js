"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new",{

/***/ "./src/pages/new.tsx":
/*!***************************!*\
  !*** ./src/pages/new.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst NewPaymentPage = ()=>{\n    _s();\n    const [connection, setConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"NewPaymentPage.useEffect\": ()=>{\n            const endpoints = [\n                'https://mainnet.helius-rpc.com/?api-key=af619c05-98c6-4751-b389-a5d28947041d',\n                'https://api.mainnet-beta.solana.com',\n                'https://solana-api.projectserum.com'\n            ];\n            async function connectToNetwork() {\n                setIsLoading(true);\n                for (const endpoint of endpoints){\n                    try {\n                        const conn = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Connection(endpoint, {\n                            commitment: 'confirmed',\n                            confirmTransactionInitialTimeout: 120000\n                        });\n                        // Test connection with retry\n                        for(let i = 0; i < 3; i++){\n                            try {\n                                await conn.getLatestBlockhash();\n                                setConnection(conn);\n                                setError('');\n                                setIsLoading(false);\n                                console.log('Connected to:', endpoint);\n                                return;\n                            } catch (err) {\n                                console.warn(\"Retry \".concat(i + 1, \" failed for \").concat(endpoint));\n                                await new Promise({\n                                    \"NewPaymentPage.useEffect.connectToNetwork\": (resolve)=>setTimeout(resolve, 1000)\n                                }[\"NewPaymentPage.useEffect.connectToNetwork\"]);\n                            }\n                        }\n                    } catch (err) {\n                        console.warn(\"Failed to connect to \".concat(endpoint));\n                        continue;\n                    }\n                }\n                setError('Unable to connect to Solana network');\n                setIsLoading(false);\n            }\n            connectToNetwork();\n        }\n    }[\"NewPaymentPage.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Connecting to network...\"\n            }, void 0, false, {\n                fileName: \"/Users/theremedy/got-sol/src/pages/new.tsx\",\n                lineNumber: 54,\n                columnNumber: 27\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/theremedy/got-sol/src/pages/new.tsx\",\n                lineNumber: 55,\n                columnNumber: 23\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theremedy/got-sol/src/pages/new.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewPaymentPage, \"a5W+5rqPP5L+cSvbVsp+gxXXNAk=\");\n_c = NewPaymentPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPaymentPage);\nvar _c;\n$RefreshReg$(_c, \"NewPaymentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRDtBQUNRO0FBR3hELE1BQU1HLGlCQUFxQjs7SUFDdkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFvQjtJQUNoRSxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0E7b0NBQUM7WUFDTixNQUFNVSxZQUFZO2dCQUNkO2dCQUNBO2dCQUNBO2FBQ0g7WUFFRCxlQUFlQztnQkFDWEYsYUFBYTtnQkFDYixLQUFLLE1BQU1HLFlBQVlGLFVBQVc7b0JBQzlCLElBQUk7d0JBQ0EsTUFBTUcsT0FBTyxJQUFJWCx1REFBVUEsQ0FBQ1UsVUFBVTs0QkFDbENFLFlBQVk7NEJBQ1pDLGtDQUFrQzt3QkFDdEM7d0JBRUEsNkJBQTZCO3dCQUM3QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFLOzRCQUN4QixJQUFJO2dDQUNBLE1BQU1ILEtBQUtJLGtCQUFrQjtnQ0FDN0JaLGNBQWNRO2dDQUNkTixTQUFTO2dDQUNURSxhQUFhO2dDQUNiUyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCUDtnQ0FDN0I7NEJBQ0osRUFBRSxPQUFPUSxLQUFLO2dDQUNWRixRQUFRRyxJQUFJLENBQUMsU0FBNkJULE9BQXBCSSxJQUFJLEdBQUUsZ0JBQXVCLE9BQVRKO2dDQUMxQyxNQUFNLElBQUlVO2lGQUFRQyxDQUFBQSxVQUFXQyxXQUFXRCxTQUFTOzs0QkFDckQ7d0JBQ0o7b0JBQ0osRUFBRSxPQUFPSCxLQUFLO3dCQUNWRixRQUFRRyxJQUFJLENBQUMsd0JBQWlDLE9BQVRUO3dCQUNyQztvQkFDSjtnQkFDSjtnQkFDQUwsU0FBUztnQkFDVEUsYUFBYTtZQUNqQjtZQUVBRTtRQUNKO21DQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTs7WUFDVmxCLDJCQUFhLDhEQUFDbUI7MEJBQUU7Ozs7OztZQUNoQnJCLHVCQUFTLDhEQUFDcUI7Z0JBQUVELFdBQVU7MEJBQWdCcEI7Ozs7Ozs7Ozs7OztBQUluRDtHQXRETUg7S0FBQUE7QUF3RE4saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVyZW1lZHkvZ290LXNvbC9zcmMvcGFnZXMvbmV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb24sIFB1YmxpY0tleSB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7IFBBWU1FTlRfQ09ORklHIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BheW1lbnQuY29uZmlnJztcblxuY29uc3QgTmV3UGF5bWVudFBhZ2U6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb25uZWN0aW9uLCBzZXRDb25uZWN0aW9uXSA9IHVzZVN0YXRlPENvbm5lY3Rpb24gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50cyA9IFtcbiAgICAgICAgICAgICdodHRwczovL21haW5uZXQuaGVsaXVzLXJwYy5jb20vP2FwaS1rZXk9YWY2MTljMDUtOThjNi00NzUxLWIzODktYTVkMjg5NDcwNDFkJyxcbiAgICAgICAgICAgICdodHRwczovL2FwaS5tYWlubmV0LWJldGEuc29sYW5hLmNvbScsXG4gICAgICAgICAgICAnaHR0cHM6Ly9zb2xhbmEtYXBpLnByb2plY3RzZXJ1bS5jb20nXG4gICAgICAgIF07XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvTmV0d29yaygpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW5kcG9pbnQgb2YgZW5kcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ubiA9IG5ldyBDb25uZWN0aW9uKGVuZHBvaW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21taXRtZW50OiAnY29uZmlybWVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UcmFuc2FjdGlvbkluaXRpYWxUaW1lb3V0OiAxMjAwMDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IGNvbm5lY3Rpb24gd2l0aCByZXRyeVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb25uLmdldExhdGVzdEJsb2NraGFzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3Rpb24oY29ubik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0bzonLCBlbmRwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZXRyeSAke2kgKyAxfSBmYWlsZWQgZm9yICR7ZW5kcG9pbnR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBjb25uZWN0IHRvICR7ZW5kcG9pbnR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEVycm9yKCdVbmFibGUgdG8gY29ubmVjdCB0byBTb2xhbmEgbmV0d29yaycpO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbm5lY3RUb05ldHdvcmsoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8cD5Db25uZWN0aW5nIHRvIG5ldHdvcmsuLi48L3A+fVxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+fVxuICAgICAgICAgICAgey8qIFlvdXIgZXhpc3RpbmcgcGF5bWVudCBmb3JtICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3UGF5bWVudFBhZ2U7ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbm5lY3Rpb24iLCJOZXdQYXltZW50UGFnZSIsImNvbm5lY3Rpb24iLCJzZXRDb25uZWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVuZHBvaW50cyIsImNvbm5lY3RUb05ldHdvcmsiLCJlbmRwb2ludCIsImNvbm4iLCJjb21taXRtZW50IiwiY29uZmlybVRyYW5zYWN0aW9uSW5pdGlhbFRpbWVvdXQiLCJpIiwiZ2V0TGF0ZXN0QmxvY2toYXNoIiwiY29uc29sZSIsImxvZyIsImVyciIsIndhcm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/new.tsx\n"));

/***/ })

});