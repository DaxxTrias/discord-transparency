import createLocalStorage from "../utils/createLocalStorage";
import mainCSS from "../utils/styling";
import {
    createInput,
    createButton,
    createStyleSheet
} from "../utils/createElement";
import { overlayBar, overlayDarkener, messageInput } from "../utils/classNames";

//TODO: add keybindings alert/tutorial
(function() {
    createLocalStorage();

    const state = {
        backgroundChangingInput: {
            active: false,
            input: undefined,
            messageInputEl: undefined
        },
        brightnessTweaker: {
            active: false,
            level: window.localStorage.getItem("brghtns") || "9",
            input: undefined,
            saveButton: undefined
        }
    };

    //components
    const overlayDarkenerEl = document.querySelector(`.${overlayDarkener}`);
    const overlayBarEl = document.querySelector(`.${overlayBar}`);
    const CSS = mainCSS({
        backgroundImageURL: window.localStorage.getItem("bgImg"),
        localBrightness:
            `rgba(0, 0, 0, 0.${state.brightnessTweaker.level})` ||
            "rgba(0,0,0,0.9)",
        overlayDarkener,
        overlayBar
    });
    const sheet = createStyleSheet({ id: "TRANSAPRENCY", CSS });

    const createBackgroundChangingInput = _ => {
        console.log(state);
        if (state.backgroundChangingInput.active)
            return removeBackgroundChangingInput();

        const input = createInput({
            type: "input",
            id: "TRANSPARENCY__IMAGE-LINK",
            text: "Paste discord image link here",
            eventType: "onkeypress",
            eventMethod: e => {
                if (e.key === "Enter" && input.value.trim() !== "") {
                    sheet.innerHTML += `#app-mount{background: url(${input.value}) center center no-repeat !important; background-size: cover !important;}`;
                    window.localStorage.setItem("bgImg", input.value);
                    input.remove();
                    state.backgroundChangingInput.active = false;
                }
            }
        });
        // we need this because the user might be on another page where the input isn't
        // or they try opening the input before the page, and input, loaded
        if (state.backgroundChangingInput.messageInputEl)
            state.backgroundChangingInput.messageInputEl.style.display = "none";
        else {
            const messageInputEl = document.querySelector(`.${messageInput}`);
            state.backgroundChangingInput.messageInputEl = messageInputEl
                ? messageInputEl
                : undefined;
        }

        document.body.appendChild(input);
        state.backgroundChangingInput.active = true;
        state.backgroundChangingInput.input = input;
    };

    const removeBackgroundChangingInput = _ => {
        state.backgroundChangingInput.input.remove();
        state.backgroundChangingInput.active = false;

        if (state.backgroundChangingInput.messageInputEl)
            state.backgroundChangingInput.messageInputEl.style.display =
                "initial";
    };

    const createBrightnessTweaker = _ => {
        if (state.brightnessTweaker.active) return removeBrightnessTweaker();

        const slider = createInput({
            type: "range",
            id: "TRANSPARENCY__SLIDE-BRIGHTNESS",
            value: state.brightnessTweaker.level,
            eventType: "oninput",
            eventMethod: _ => {
                overlayDarkenerEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
                overlayBarEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
                state.brightnessTweaker.level =
                    state.brightnessTweaker.slider.value;
            }
        });

        const saveButton = createButton({
            id: "TRANSPARENCY__SAVE-BRIGHTNESS",
            text: "Save brightness level",
            eventMethod: _ => {
                window.localStorage.setItem(
                    "brghtns",
                    state.brightnessTweaker.level
                );
                alert(
                    `Brightness level updated! Now it is at level ${state.brightnessTweaker.level}.`
                );
                removeBrightnessTweaker();
            }
        });

        document.body.appendChild(slider);
        document.body.appendChild(saveButton);
        state.brightnessTweaker = {
            ...state.brightnessTweaker,
            active: true,
            slider,
            saveButton
        };
    };

    const removeBrightnessTweaker = _ => {
        state.brightnessTweaker.slider.remove();
        state.brightnessTweaker.saveButton.remove();
        state.brightnessTweaker.active = false;
    };

    //appending the stylesheet to page, and remove if it already exists (defined in createStyleSheet function definition)
    document.head.appendChild(sheet);

    //keydown manager
    window.onkeydown = e => {
        if (e.ctrlKey) {
            if (e.key === "d") {
                //disable theme
                if (sheet.getAttribute("media")) {
                    sheet.removeAttribute("media");
                    overlayBarEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.level}`;
                } else {
                    sheet.setAttribute("media", "1px");
                    overlayBarEl.style.backgroundColor =
                        "var(--background-tertiary)";
                }
            } else if (e.key === "b") createBrightnessTweaker();
            else if (e.altKey) createBackgroundChangingInput();
        }
    };
})();
