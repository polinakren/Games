/*! For license information please see src_modules_Game_Game_tsx.13d24ba5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgames=self.webpackChunkgames||[]).push([["src_modules_Game_Game_tsx"],{"./src/modules/Game/Game.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": function() { return /* binding */ Game; }\n});\n\n// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js\nvar dist = __webpack_require__("./node_modules/react-router/dist/index.js");\n// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js + 1 modules\nvar ArrowLeftOutlined = __webpack_require__("./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js");\n// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules\nvar spin = __webpack_require__("./node_modules/antd/es/spin/index.js");\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\nvar taggedTemplateLiteral = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");\n// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 20 modules\nvar emotion_styled_browser_esm = __webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");\n// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 32 modules\nvar typography = __webpack_require__("./node_modules/antd/es/typography/index.js");\n// EXTERNAL MODULE: ./node_modules/antd/es/carousel/index.js + 10 modules\nvar carousel = __webpack_require__("./node_modules/antd/es/carousel/index.js");\n// EXTERNAL MODULE: ./src/utils/Palette.ts\nvar Palette = __webpack_require__("./src/utils/Palette.ts");\n;// CONCATENATED MODULE: ./src/modules/Game/styles.ts\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;\n\n\n\nvar StyledCard = emotion_styled_browser_esm["default"].div(_templateObject || (_templateObject = (0,taggedTemplateLiteral["default"])(["\\n  min-width: 20%;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 28px;\\n  border-radius: 50px;\\n  background-color: white;\\n  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);\\n  cursor: pointer;\\n"])));\nvar DescBlock = emotion_styled_browser_esm["default"].div(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral["default"])(["\\n  margin-bottom: 20px;\\n"])));\nvar StyledTitle = (0,emotion_styled_browser_esm["default"])(typography["default"])(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral["default"])(["\\n  color: ", ";\\n  font-size: 14px;\\n  font-weight: 500;\\n"])), Palette.Palette.white_600);\nvar StyledName = (0,emotion_styled_browser_esm["default"])(typography["default"])(_templateObject4 || (_templateObject4 = (0,taggedTemplateLiteral["default"])(["\\n  color: ", ";\\n  font-size: 14px;\\n  font-weight: 500;\\n"])), Palette.Palette.secondary_800);\nvar StyledImg = emotion_styled_browser_esm["default"].img(_templateObject5 || (_templateObject5 = (0,taggedTemplateLiteral["default"])(["\\n  width: 60%;\\n  border-radius: 50px;\\n"])));\nvar StyledScreen = emotion_styled_browser_esm["default"].img(_templateObject6 || (_templateObject6 = (0,taggedTemplateLiteral["default"])(["\\n  width: 30%;\\n  border-radius: 50px;\\n"])));\nvar ScreenBlock = emotion_styled_browser_esm["default"].div(_templateObject7 || (_templateObject7 = (0,taggedTemplateLiteral["default"])(["\\n  margin-top: 20px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 28px;\\n  border-radius: 50px;\\n  background-color: white;\\n  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);\\n"])));\nvar Spacer = emotion_styled_browser_esm["default"].div(_templateObject8 || (_templateObject8 = (0,taggedTemplateLiteral["default"])(["\\n  max-width: 70%;\\n  display: flex;\\n  justify-content: center;\\n  gap: 32px;\\n"])));\nvar StyledSystem = emotion_styled_browser_esm["default"].div(_templateObject9 || (_templateObject9 = (0,taggedTemplateLiteral["default"])(["\\n  display: flex;\\n  flex-direction: column;\\n"])));\nvar StyledSystemTitle = (0,emotion_styled_browser_esm["default"])(typography["default"])(_templateObject10 || (_templateObject10 = (0,taggedTemplateLiteral["default"])(["\\n  margin-bottom: 20px;\\n  color: ", ";\\n  font-size: 20px;\\n  font-weight: 865;\\n"])), Palette.Palette.secondary_800);\nvar StyledCarousel = (0,emotion_styled_browser_esm["default"])(carousel["default"])(_templateObject11 || (_templateObject11 = (0,taggedTemplateLiteral["default"])(["\\n  margin-top: 20px;\\n  width: 300px;\\n"])));\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\nvar asyncToGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js\nvar regenerator = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");\nvar regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);\n// EXTERNAL MODULE: ./node_modules/react-query/es/index.js\nvar es = __webpack_require__("./node_modules/react-query/es/index.js");\n// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 11 modules\nvar notification = __webpack_require__("./node_modules/antd/es/notification/index.js");\n;// CONCATENATED MODULE: ./src/modules/Game/hooks.ts\n\n\n\n\nvar GET_GAME = \'GET_GAME\';\nvar useGameCardApi = function useGameCardApi(id) {\n  var queryKey = [GET_GAME];\n  var url = \'https://free-to-play-games-database.p.rapidapi.com/api/game?id=\' + id;\n  var options = {\n    method: \'GET\',\n    headers: {\n      \'X-RapidAPI-Key\': \'0e22d739e8msh1827224440866c1p138428jsnff4c40abf941\',\n      \'X-RapidAPI-Host\': \'free-to-play-games-database.p.rapidapi.com\'\n    }\n  };\n  var queryFn = /*#__PURE__*/function () {\n    var _ref = (0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee() {\n      var response;\n      return regenerator_default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url, options);\n          case 2:\n            response = _context.sent;\n            if (!response.ok) {\n              notification["default"].error({\n                message: \'Failed to execute the request\',\n                placement: \'topRight\',\n                duration: 0\n              });\n            }\n            _context.next = 6;\n            return response.json();\n          case 6:\n            return _context.abrupt("return", _context.sent);\n          case 7:\n          case "end":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function queryFn() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  var _useQuery = (0,es.useQuery)(queryKey, queryFn, {\n      retry: 3\n    }),\n    game = _useQuery.data,\n    isLoading = _useQuery.isLoading;\n  return {\n    game: game,\n    isLoading: isLoading\n  };\n};\n// EXTERNAL MODULE: ./src/services/router/hooks.ts + 1 modules\nvar hooks = __webpack_require__("./src/services/router/hooks.ts");\n// EXTERNAL MODULE: ./src/services/router/index.ts\nvar router = __webpack_require__("./src/services/router/index.ts");\n// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js\nvar jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");\n;// CONCATENATED MODULE: ./src/modules/Game/Game.tsx\n\n\n\n\n\n\n\n\n\n\nfunction Game() {\n  var navigate = (0,hooks.useNavigate)();\n  var _useParams = (0,dist.useParams)(),\n    id = _useParams.game;\n  var _useGameCardApi = useGameCardApi(id),\n    game = _useGameCardApi.game,\n    isLoading = _useGameCardApi.isLoading;\n  var new_release_date = new Date(game === null || game === void 0 ? void 0 : game.release_date).toLocaleDateString();\n  var handleClick = function handleClick() {\n    navigate({\n      name: router.routeNames.main\n    });\n  };\n  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {\n    children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(spin["default"], {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Spacer, {\n      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowLeftOutlined["default"], {\n        onClick: handleClick\n      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard, {\n        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledImg, {\n          src: game.thumbnail,\n          alt: game.title\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n            children: "Title"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n            children: game.title\n          })]\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n            children: "Release date"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n            children: new_release_date\n          })]\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n            children: "Developer"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n            children: game.developer\n          })]\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n            children: "Publisher"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n            children: game.publisher\n          })]\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n            children: "Genre"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n            children: game.genre\n          })]\n        })]\n      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledSystem, {\n        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledSystemTitle, {\n          children: "Minimum System Requirements (Windows)"\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard, {\n          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(DescBlock, {\n            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n              children: "OS"\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n              children: game.minimum_system_requirements.os\n            })]\n          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescBlock, {\n            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n              children: "Memory"\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n              children: game.minimum_system_requirements.memory\n            })]\n          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescBlock, {\n            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n              children: "Storage"\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n              children: game.minimum_system_requirements.storage\n            })]\n          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescBlock, {\n            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n              children: "Processor"\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n              children: game.minimum_system_requirements.processor\n            })]\n          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {\n              children: "Graphics"\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {\n              children: game.minimum_system_requirements.graphics\n            })]\n          })]\n        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCarousel, {\n          autoplay: true,\n          children: game.screenshots.map(function (screen) {\n            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledScreen, {\n              src: screen.image,\n              alt: \'screenshot\'\n            }, screen.id);\n          })\n        })]\n      })]\n    })\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVnQixNQUFNLENBQUNDLEtBQU07Y0FBaUJmLEdBQUcsRUFBRTtZQUFhLEdBQTdCYyxNQUFNLENBQUMzRSxFQUF3QixDQUFDO1VBQUEsQ0FDdkU7UUFBQyxDQUNZLENBQUM7TUFBQSxDQUNMLENBQUM7SUFBQSxDQUNUO0VBQ1QsQ0FDRCxDQUFDO0FBRVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lcy8uL3NyYy9tb2R1bGVzL0dhbWUvc3R5bGVzLnRzPzQ4NzUiLCJ3ZWJwYWNrOi8vZ2FtZXMvLi9zcmMvbW9kdWxlcy9HYW1lL2hvb2tzLnRzP2FiYmIiLCJ3ZWJwYWNrOi8vZ2FtZXMvLi9zcmMvbW9kdWxlcy9HYW1lL0dhbWUudHN4Pzg2ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tICd+dXRpbHMvUGFsZXR0ZSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDYXJkID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMTRweCAwIHJnYmEoMTc2LCAxNjUsIDIwOSwgMC40KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IERlc2NCbG9jayA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSlgXG4gIGNvbG9yOiAke1BhbGV0dGUud2hpdGVfNjAwfTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hbWUgPSBzdHlsZWQoVHlwb2dyYXBoeSlgXG4gIGNvbG9yOiAke1BhbGV0dGUuc2Vjb25kYXJ5XzgwMH07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNjcmVlbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2NyZWVuQmxvY2sgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMTRweCAwIHJnYmEoMTc2LCAxNjUsIDIwOSwgMC40KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTeXN0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN5c3RlbVRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogJHtQYWxldHRlLnNlY29uZGFyeV84MDB9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4NjU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQ2Fyb3VzZWwgPSBzdHlsZWQoQ2Fyb3VzZWwpYFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG5gO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgR0VUX0dBTUUgPSAnR0VUX0dBTUUnO1xuXG5leHBvcnQgY29uc3QgdXNlR2FtZUNhcmRBcGkgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBxdWVyeUtleSA9IFtHRVRfR0FNRV07XG4gIGNvbnN0IHVybCA9ICdodHRwczovL2ZyZWUtdG8tcGxheS1nYW1lcy1kYXRhYmFzZS5wLnJhcGlkYXBpLmNvbS9hcGkvZ2FtZT9pZD0nICsgaWQ7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLVJhcGlkQVBJLUtleSc6ICcwZTIyZDczOWU4bXNoMTgyNzIyNDQ0MDg2NmMxcDEzODQyOGpzbmZmNGM0MGFiZjk0MScsXG4gICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ2ZyZWUtdG8tcGxheS1nYW1lcy1kYXRhYmFzZS5wLnJhcGlkYXBpLmNvbScsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBxdWVyeUZuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gZXhlY3V0ZSB0aGUgcmVxdWVzdCcsIHBsYWNlbWVudDogJ3RvcFJpZ2h0JywgZHVyYXRpb246IDAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCB7IGRhdGE6IGdhbWUsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkocXVlcnlLZXksIHF1ZXJ5Rm4sIHsgcmV0cnk6IDMgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lLFxuICAgIGlzTG9hZGluZyxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgQXJyb3dMZWZ0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCB7XG4gIERlc2NCbG9jayxcbiAgU3BhY2VyLFxuICBTdHlsZWRDYXJkLFxuICBTdHlsZWRDYXJvdXNlbCxcbiAgU3R5bGVkSW1nLFxuICBTdHlsZWROYW1lLFxuICBTdHlsZWRTY3JlZW4sXG4gIFN0eWxlZFN5c3RlbSxcbiAgU3R5bGVkU3lzdGVtVGl0bGUsXG4gIFN0eWxlZFRpdGxlLFxufSBmcm9tICd+bW9kdWxlcy9HYW1lL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VHYW1lQ2FyZEFwaSB9IGZyb20gJ35tb2R1bGVzL0dhbWUvaG9va3MnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICd+c2VydmljZXMvcm91dGVyL2hvb2tzJztcbmltcG9ydCB7IHJvdXRlTmFtZXMgfSBmcm9tICd+c2VydmljZXMvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IHsgZ2FtZTogaWQgfSA9IHVzZVBhcmFtczx7IGdhbWU6IHN0cmluZyB9PigpO1xuICBjb25zdCB7IGdhbWUsIGlzTG9hZGluZyB9ID0gdXNlR2FtZUNhcmRBcGkoaWQhKTtcblxuICBjb25zdCBuZXdfcmVsZWFzZV9kYXRlID0gbmV3IERhdGUoZ2FtZT8ucmVsZWFzZV9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBuYXZpZ2F0ZSh7IG5hbWU6IHJvdXRlTmFtZXMubWFpbiB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8U3BpbiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFNwYWNlcj5cbiAgICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWQgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgPFN0eWxlZENhcmQ+XG4gICAgICAgICAgICA8U3R5bGVkSW1nIHNyYz17Z2FtZS50aHVtYm5haWx9IGFsdD17Z2FtZS50aXRsZX0gLz5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT5UaXRsZTwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgIDxTdHlsZWROYW1lPntnYW1lLnRpdGxlfTwvU3R5bGVkTmFtZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPlJlbGVhc2UgZGF0ZTwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgIDxTdHlsZWROYW1lPntuZXdfcmVsZWFzZV9kYXRlfTwvU3R5bGVkTmFtZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPkRldmVsb3BlcjwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgIDxTdHlsZWROYW1lPntnYW1lLmRldmVsb3Blcn08L1N0eWxlZE5hbWU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT5QdWJsaXNoZXI8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgICA8U3R5bGVkTmFtZT57Z2FtZS5wdWJsaXNoZXJ9PC9TdHlsZWROYW1lPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+R2VucmU8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgICA8U3R5bGVkTmFtZT57Z2FtZS5nZW5yZX08L1N0eWxlZE5hbWU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L1N0eWxlZENhcmQ+XG5cbiAgICAgICAgICA8U3R5bGVkU3lzdGVtPlxuICAgICAgICAgICAgPFN0eWxlZFN5c3RlbVRpdGxlPk1pbmltdW0gU3lzdGVtIFJlcXVpcmVtZW50cyAoV2luZG93cyk8L1N0eWxlZFN5c3RlbVRpdGxlPlxuICAgICAgICAgICAgPFN0eWxlZENhcmQ+XG4gICAgICAgICAgICAgIDxEZXNjQmxvY2s+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPk9TPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkTmFtZT57Z2FtZS5taW5pbXVtX3N5c3RlbV9yZXF1aXJlbWVudHMub3N9PC9TdHlsZWROYW1lPlxuICAgICAgICAgICAgICA8L0Rlc2NCbG9jaz5cbiAgICAgICAgICAgICAgPERlc2NCbG9jaz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+TWVtb3J5PC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkTmFtZT57Z2FtZS5taW5pbXVtX3N5c3RlbV9yZXF1aXJlbWVudHMubWVtb3J5fTwvU3R5bGVkTmFtZT5cbiAgICAgICAgICAgICAgPC9EZXNjQmxvY2s+XG4gICAgICAgICAgICAgIDxEZXNjQmxvY2s+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPlN0b3JhZ2U8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgICAgIDxTdHlsZWROYW1lPntnYW1lLm1pbmltdW1fc3lzdGVtX3JlcXVpcmVtZW50cy5zdG9yYWdlfTwvU3R5bGVkTmFtZT5cbiAgICAgICAgICAgICAgPC9EZXNjQmxvY2s+XG4gICAgICAgICAgICAgIDxEZXNjQmxvY2s+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPlByb2Nlc3NvcjwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgICAgPFN0eWxlZE5hbWU+e2dhbWUubWluaW11bV9zeXN0ZW1fcmVxdWlyZW1lbnRzLnByb2Nlc3Nvcn08L1N0eWxlZE5hbWU+XG4gICAgICAgICAgICAgIDwvRGVzY0Jsb2NrPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT5HcmFwaGljczwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgICAgPFN0eWxlZE5hbWU+e2dhbWUubWluaW11bV9zeXN0ZW1fcmVxdWlyZW1lbnRzLmdyYXBoaWNzfTwvU3R5bGVkTmFtZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N0eWxlZENhcmQ+XG4gICAgICAgICAgICA8U3R5bGVkQ2Fyb3VzZWwgYXV0b3BsYXk+XG4gICAgICAgICAgICAgIHtnYW1lLnNjcmVlbnNob3RzLm1hcCgoc2NyZWVuOiB7IGltYWdlOiBzdHJpbmc7IGlkOiBudW1iZXIgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRTY3JlZW4gc3JjPXtzY3JlZW4uaW1hZ2V9IGtleT17c2NyZWVuLmlkfSBhbHQ9eydzY3JlZW5zaG90J30gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N0eWxlZENhcm91c2VsPlxuICAgICAgICAgIDwvU3R5bGVkU3lzdGVtPlxuICAgICAgICA8L1NwYWNlcj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ2Fyb3VzZWwiLCJUeXBvZ3JhcGh5IiwiUGFsZXR0ZSIsIlN0eWxlZENhcmQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiRGVzY0Jsb2NrIiwiX3RlbXBsYXRlT2JqZWN0MiIsIlN0eWxlZFRpdGxlIiwiX3RlbXBsYXRlT2JqZWN0MyIsIndoaXRlXzYwMCIsIlN0eWxlZE5hbWUiLCJfdGVtcGxhdGVPYmplY3Q0Iiwic2Vjb25kYXJ5XzgwMCIsIlN0eWxlZEltZyIsImltZyIsIl90ZW1wbGF0ZU9iamVjdDUiLCJTdHlsZWRTY3JlZW4iLCJfdGVtcGxhdGVPYmplY3Q2IiwiU2NyZWVuQmxvY2siLCJfdGVtcGxhdGVPYmplY3Q3IiwiU3BhY2VyIiwiX3RlbXBsYXRlT2JqZWN0OCIsIlN0eWxlZFN5c3RlbSIsIl90ZW1wbGF0ZU9iamVjdDkiLCJTdHlsZWRTeXN0ZW1UaXRsZSIsIl90ZW1wbGF0ZU9iamVjdDEwIiwiU3R5bGVkQ2Fyb3VzZWwiLCJfdGVtcGxhdGVPYmplY3QxMSIsInVzZVF1ZXJ5Iiwibm90aWZpY2F0aW9uIiwiR0VUX0dBTUUiLCJ1c2VHYW1lQ2FyZEFwaSIsImlkIiwicXVlcnlLZXkiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInF1ZXJ5Rm4iLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInBsYWNlbWVudCIsImR1cmF0aW9uIiwianNvbiIsImFicnVwdCIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91c2VRdWVyeSIsInJldHJ5IiwiZ2FtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJ1c2VQYXJhbXMiLCJBcnJvd0xlZnRPdXRsaW5lZCIsIlNwaW4iLCJ1c2VOYXZpZ2F0ZSIsInJvdXRlTmFtZXMiLCJqc3giLCJfanN4IiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3hzIiwiX2pzeHMiLCJHYW1lIiwibmF2aWdhdGUiLCJfdXNlUGFyYW1zIiwiX3VzZUdhbWVDYXJkQXBpIiwibmV3X3JlbGVhc2VfZGF0ZSIsIkRhdGUiLCJyZWxlYXNlX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJoYW5kbGVDbGljayIsIm5hbWUiLCJtYWluIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0IiwidGl0bGUiLCJkZXZlbG9wZXIiLCJwdWJsaXNoZXIiLCJnZW5yZSIsIm1pbmltdW1fc3lzdGVtX3JlcXVpcmVtZW50cyIsIm9zIiwibWVtb3J5Iiwic3RvcmFnZSIsInByb2Nlc3NvciIsImdyYXBoaWNzIiwiYXV0b3BsYXkiLCJzY3JlZW5zaG90cyIsIm1hcCIsInNjcmVlbiIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Game/Game.tsx\n')}}]);