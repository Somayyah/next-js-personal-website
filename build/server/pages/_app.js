module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/ActiveLink.js



function ActiveLink({
  children,
  href
}) {
  const router = Object(router_["useRouter"])();
  const classN = router.pathname === href ? "active" : null;

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: href,
    onClick: handleClick,
    className: classN,
    children: children
  });
}

/* harmony default export */ var components_ActiveLink = (ActiveLink);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: external "react-player/soundcloud"
var soundcloud_ = __webpack_require__("VBLB");
var soundcloud_default = /*#__PURE__*/__webpack_require__.n(soundcloud_);

// CONCATENATED MODULE: ./components/Nav.js











function Nav() {
  let width_v;
  if (false) {}

  const home = /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faHome"]
  });

  const resume = /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_regular_svg_icons_["faFile"]
  });

  const blog = /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBlog"]
  });

  const contact = /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_regular_svg_icons_["faAddressBook"]
  });

  const project = /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faProjectDiagram"]
  });

  const soundcloud = /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_brands_svg_icons_["faSoundcloud"]
  });

  const {
    0: play_track,
    1: setplay
  } = Object(external_react_["useState"])(false);
  const track = `https://soundcloud.com/bitesizekid/minecraft-background-music`;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
    children: [!width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(soundcloud_default.a, {
      hidden: true,
      url: track,
      playing: play_track
    }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      className: `${width_v ? "nav-m nav-sm md:text-6xl md:bg-purple-600" : "banner"}`,
      children: [!width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: "circle",
        onClick: () => setplay(!play_track),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
          children: soundcloud
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
        className: "active place-items-end",
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: `${!width_v ? "item movement" : ""}`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            children: home
          }), !width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "home",
            children: "Home"
          }) : null]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
        href: "/resume",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: `${!width_v ? "item movement" : ""}`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            children: resume
          }), !width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "extra-small-resume ",
            children: "Resume"
          }) : null]
        })
      }), !width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
        href: "/projects",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "text-extra-sm item movement",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            children: project
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "extra-small",
            children: "Projects"
          })]
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
        href: "/blog",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: " item movement",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            children: blog
          }), !width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "blog",
            children: "Blog"
          }) : null]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
        href: "/contact",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "text-extra-sm item movement",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            children: contact
          }), !width_v ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "extra-small-contacts",
            children: "\xA0Contacts"
          }) : null]
        })
      })]
    })]
  });
}

/* harmony default export */ var components_Nav = (Nav);
// EXTERNAL MODULE: ./styles/tailwind.css
var tailwind = __webpack_require__("Rpix");

// EXTERNAL MODULE: ./styles/main.css
var main = __webpack_require__("iJnL");

// EXTERNAL MODULE: ./styles/nav.css
var nav = __webpack_require__("Yp/T");

// EXTERNAL MODULE: ./styles/ContactUs.css
var ContactUs = __webpack_require__("Cmkw");

// EXTERNAL MODULE: ./styles/elements.css
var styles_elements = __webpack_require__("lDF6");

// EXTERNAL MODULE: ./styles/views/home.css
var views_home = __webpack_require__("SO+N");

// EXTERNAL MODULE: ./styles/tabs.css
var tabs = __webpack_require__("WKlG");

// EXTERNAL MODULE: ./styles/title.css
var title = __webpack_require__("daE+");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  const Layout = Component.Layout ? Component.Layout : external_react_default.a.Fragment;
  let width;
  if (false) {}
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "https://avatars1.githubusercontent.com/u/55834191?s=400&u=1e372125b62ba92e90d1cd3c386ca302a08bd4dd&v=4"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `App ${!width ? "canvas" : null}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "content-h-m sm:h-screen sm:flex ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "content-sm p-6 md:p-8 lg:w-11/12 lg:p-4",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Nav, {})]
      })
    })]
  });
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Cmkw":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Rpix":
/***/ (function(module, exports) {



/***/ }),

/***/ "SO+N":
/***/ (function(module, exports) {



/***/ }),

/***/ "VBLB":
/***/ (function(module, exports) {

module.exports = require("react-player/soundcloud");

/***/ }),

/***/ "WKlG":
/***/ (function(module, exports) {



/***/ }),

/***/ "Yp/T":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "daE+":
/***/ (function(module, exports) {



/***/ }),

/***/ "iJnL":
/***/ (function(module, exports) {



/***/ }),

/***/ "lDF6":
/***/ (function(module, exports) {



/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });