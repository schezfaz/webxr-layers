import {
    ControllerInteraction,
    HandInput,
    SimpleScene,
    SimpleEquirectMediaLayer,
    MultipleLayers,
    sandboxExample
} from "./apps";

document.addEventListener("DOMContentLoaded", () => {
    let app;

    switch (window.location.pathname) {
        case "/controller-interaction":
            app = new ControllerInteraction();
            break;
        case "/hand-input":
            app = new HandInput();
            break;
        case "/simple-scene":
            app = new SimpleScene();
            break;
        case "/simple-equirect-layer":
            app = new SimpleEquirectMediaLayer();
            break;
        case "/multiple-layers":
            app = new MultipleLayers();
            break;
        case "/sandboxExample":
            app = new sandboxExample();
            break;
        default:
            const indexContainer = document.querySelector(".container");
            indexContainer.style.display = "";
    }

    if (app) {
        window.app = app;
    }
});
