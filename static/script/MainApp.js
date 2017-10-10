"use strict";

import PagePresenter from "./PagePresenter.js";
import Debugger from "./Debugger.js";

class MainApp {

    constructor () {
        Debugger.print("Application was created");
        new PagePresenter();
    }
}

window.addEventListener("load", function () {
    new MainApp();
});
