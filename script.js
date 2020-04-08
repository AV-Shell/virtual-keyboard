let textarea;

const Keyboard = {
    language: 'en',
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },

    eventHandlers: {
        oninput: null,
        unused: null,
    },

    properties: {
        value: '',
        capsLock: false,
        shift: false,
        ctrl: false,
        alt: false,
    },

    controlKeys: {
        'Backspace': 13,
        'Tab': 14,
        'CapsLock': 28,
        'Enter': 40,
        'ShiftLeft': 41,
        'ArrowUp': 52,
        'ControlLeft': 53,
        'MetaLeft': 54,
        'AltLeft': 55,
        'Space': 56,
        'ContextMenu': 57,
        'ArrowLeft': 58,
        'ArrowDown': 59,
        'ArrowRight': 60,
    },


    keyArrayLayout: [
        ['Backquote', '`', '`', '~', '~', 'ё', 'Ё', 'Ё', 'ё'],
        ['Digit1', '1', '1', '!', '!', '1', '1', '!', '!'],
        ['Digit2', '2', '2', '@', '@', '2', '2', '\"', '\"'],
        ['Digit3', '3', '3', '#', '#', '3', '3', '№', '№'],
        ['Digit4', '4', '4', '$', '$', '4', '4', ';', ';'],
        ['Digit5', '5', '5', '%', '%', '5', '5', '%', '%'],
        ['Digit6', '6', '6', '^', '^', '6', '6', ':', ':'],
        ['Digit7', '7', '7', '&', '&', '7', '7', '?', '?'],
        ['Digit8', '8', '8', '*', '*', '8', '8', '*', '*'],
        ['Digit9', '9', '9', '(', '(', '9', '9', '(', '('],
        ['Digit0', '0', '0', ')', ')', '0', '0', ')', ')'],
        ['Minus', '-', '-', '_', '_', '-', '-', '_', '_'],
        ['Equal', '=', '=', '+', '+', '=', '=', '+', '+'],
        ['Backspace', 'B_space', 'B_space', 'B_space', 'B_space', 'B_space', 'B_space', 'B_space', 'B_space'],
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['KeyQ', 'q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'],
        ['KeyW', 'w', 'W', 'W', 'w', 'ц', 'Ц', 'Ц', 'ц'],
        ['KeyE', 'e', 'E', 'E', 'e', 'у', 'У', 'У', 'у'],
        ['KeyR', 'r', 'R', 'R', 'r', 'к', 'К', 'К', 'к'],
        ['KeyT', 't', 'T', 'T', 't', 'е', 'Е', 'Е', 'е'],
        ['KeyY', 'y', 'Y', 'Y', 'y', 'н', 'Н', 'Н', 'н'],
        ['KeyU', 'u', 'U', 'U', 'u', 'г', 'Г', 'Г', 'г'],
        ['KeyI', 'i', 'I', 'I', 'i', 'ш', 'Ш', 'Ш', 'ш'],
        ['KeyO', 'o', 'O', 'O', 'o', 'щ', 'Щ', 'Щ', 'щ'],
        ['KeyP', 'p', 'P', 'P', 'p', 'з', 'З', 'З', 'з'],
        ['BracketLeft', '[', '[', '{', '{', 'х', 'Х', 'Х', 'х'],
        ['BracketRight', ']', ']', '}', '}', 'ъ', 'Ъ', 'Ъ', 'ъ'],
        ['Backslash', '\\', '\\', '|', '|', '\\', '\\', '/', '/'],
        ['CapsLock', 'Caps', 'Caps', 'Caps', 'Caps', 'Caps', 'Caps', 'Caps', 'Caps'],
        ['KeyA', 'a', 'A', 'A', 'a', 'ф', 'Ф', 'Ф', 'ф'],
        ['KeyS', 's', 'S', 'S', 's', 'ы', 'Ы', 'Ы', 'ы'],
        ['KeyD', 'd', 'D', 'D', 'd', 'в', 'В', 'В', 'в'],
        ['KeyF', 'f', 'F', 'F', 'f', 'а', 'А', 'А', 'а'],
        ['KeyG', 'g', 'G', 'G', 'g', 'п', 'П', 'П', 'п'],
        ['KeyH', 'h', 'H', 'H', 'h', 'р', 'Р', 'Р', 'р'],
        ['KeyJ', 'j', 'J', 'J', 'j', 'о', 'О', 'О', 'о'],
        ['KeyK', 'k', 'K', 'K', 'k', 'л', 'Л', 'Л', 'л'],
        ['KeyL', 'l', 'L', 'L', 'l', 'д', 'Д', 'Д', 'д'],
        ['Semicolon', ';', ';', ':', ':', 'ж', 'Ж', 'Ж', 'ж'],
        ['Quote', '\'', '\'', '\"', '\"', 'э', 'Э', 'Э', 'э'],
        ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
        ['KeyZ', 'z', 'Z', 'Z', 'z', 'я', 'Я', 'Я', 'я'],
        ['KeyX', 'x', 'X', 'X', 'x', 'ч', 'Ч', 'Ч', 'ч'],
        ['KeyC', 'c', 'C', 'C', 'c', 'с', 'С', 'С', 'с'],
        ['KeyV', 'v', 'V', 'V', 'v', 'м', 'М', 'М', 'м'],
        ['KeyB', 'b', 'B', 'B', 'b', 'и', 'И', 'И', 'и'],
        ['KeyN', 'n', 'N', 'N', 'n', 'т', 'Т', 'Т', 'т'],
        ['KeyM', 'm', 'M', 'M', 'm', 'ь', 'Ь', 'Ь', 'ь'],
        ['Comma', ',', ',', '<', '<', 'б', 'Б', 'Б', 'б'],
        ['Period', '.', '.', '>', '>', 'ю', 'Ю', 'Ю', 'ю'],
        ['Slash', '/', '/', '?', '?', '.', '.', ',', ','],
        ['ArrowUp', '▲', '▲', '▲', '▲', '▲', '▲', '▲', '▲'],
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['MetaLeft', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win'],
        ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['Space', 'Space', 'Space', 'Space', 'Space', 'Space', 'Space', 'Space', 'Space'],
        ['ContextMenu', 'Menu', 'Menu', 'Menu', 'Menu', 'Menu', 'Menu', 'Menu', 'Menu'],
        ['ArrowLeft', '◄', '◄', '◄', '◄', '◄', '◄', '◄', '◄'],
        ['ArrowDown', '▼', '▼', '▼', '▼', '▼', '▼', '▼', '▼'],
        ['ArrowRight', '►', '►', '►', '►', '►', '►', '►', '►'],
    ],

    keyArrayDecode: {
        'Backquote': 0,
        'Digit1': 1,
        'Digit2': 2,
        'Digit3': 3,
        'Digit4': 4,
        'Digit5': 5,
        'Digit6': 6,
        'Digit7': 7,
        'Digit8': 8,
        'Digit9': 9,
        'Digit0': 10,
        'Minus': 11,
        'Equal': 12,
        'Backspace': 13,
        'Tab': 14,
        'KeyQ': 15,
        'KeyW': 16,
        'KeyE': 17,
        'KeyR': 18,
        'KeyT': 19,
        'KeyY': 20,
        'KeyU': 21,
        'KeyI': 22,
        'KeyO': 23,
        'KeyP': 24,
        'BracketLeft': 25,
        'BracketRight': 26,
        'Backslash': 27,
        'CapsLock': 28,
        'KeyA': 29,
        'KeyS': 30,
        'KeyD': 31,
        'KeyF': 32,
        'KeyG': 33,
        'KeyH': 34,
        'KeyJ': 35,
        'KeyK': 36,
        'KeyL': 37,
        'Semicolon': 38,
        'Quote': 39,
        'Enter': 40,
        'ShiftLeft': 41,
        'KeyZ': 42,
        'KeyX': 43,
        'KeyC': 44,
        'KeyV': 45,
        'KeyB': 46,
        'KeyN': 47,
        'KeyM': 48,
        'Comma': 49,
        'Period': 50,
        'Slash': 51,
        'ArrowUp': 52,
        'ControlLeft': 53,
        'MetaLeft': 54,
        'AltLeft': 55,
        'Space': 56,
        'ContextMenu': 57,
        'ArrowLeft': 58,
        'ArrowDown': 59,
        'ArrowRight': 60
    },


    init() {
        
        if (localStorage.getItem('language') === 'THE_GREAT_RUSSIAN') {
           this.language = localStorage.getItem('language');
        } else {
            localStorage.setItem('language', this.language);
        }
        this.elements.main = document.createElement('div');
        this.elements.main.setAttribute('tabindex', '0');
        this.elements.keysContainer = document.createElement('div');

        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(add_html());
        document.body.appendChild(this.elements.main);
        textarea = document.querySelector('textarea');
        textarea.onblur = () => {
            textarea.focus();
        };
        this.elements.keys = document.querySelectorAll('.keyboard__key');
    },
    _createKeys() {
        const fragment = document.createDocumentFragment();

        this.keyArrayLayout.forEach(keymass => {
            const keyElement = document.createElement('div');
            const insertLineBreak = ['Backspace', 'Backslash', 'Enter', 'ArrowUp', 'ArrowRight'].indexOf(keymass[0]) !== -1;

            keyElement.classList.add('keyboard__key');
            keyElement.setAttribute('id', keymass[0]);
            let lang_index = this.language === 'THE_GREAT_RUSSIAN' ? 5 : 1;
            switch (keymass[0]) {
                case 'Backspace':
                    keyElement.classList.add('keyboard__key_wide', 'control-text-key2');
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'Tab':
                    keyElement.classList.add('keyboard__key_w', 'control-text-key2');
                    keyElement.classList.add('keyboard__key_control');

                    break;
                case 'CapsLock':
                    keyElement.classList.add('keyboard__key_wide', 'control-text-key2');
                    keyElement.classList.add('keyboard__key_control');

                    break;
                case 'Enter':
                    keyElement.classList.add('keyboard__key_wider', 'control-text-key2');
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'ShiftLeft':
                    keyElement.classList.add('keyboard__key_the-widest', 'control-text-key');
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'ArrowUp':

                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'ArrowLeft':
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'ArrowDown':
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'ArrowRight':
                    keyElement.classList.add('keyboard__key_control');
                    break;

                case 'ControlLeft':
                    keyElement.classList.add('keyboard__key_w', 'control-text-key');
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'MetaLeft':
                    keyElement.classList.add('keyboard__key_w', 'control-text-key2');
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'AltLeft':
                    keyElement.classList.add('keyboard__key_w', 'control-text-key');
                    keyElement.classList.add('keyboard__key_control');
                    break;
                case 'ContextMenu':
                    keyElement.classList.add('keyboard__key_w', 'control-text-key2');
                    keyElement.classList.add('keyboard__key_control');
                    break




                case 'Space':
                    keyElement.classList.add('keyboard__key_extra-wide', 'control-text-key');

                    keyElement.classList.add('keyboard__key_control');
                    break;
                default:

                break;

            }
            keyElement.textContent = keymass[lang_index];
            fragment.appendChild(keyElement);
            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        });
        return fragment;
    },
    _triggerEvent(eventName) {
        
    },
    _toggleControls(control) {
        
    },
};

let key_pressed_by_mouse_id;
let keypressed = false;
let global_capslock = false;
let global_shift = false;
let global_ctrl = false;
let global_alt = false;
let mouse_control = false;
let mouse_shift = false;
let mouse_alt = false;
let keyboard_shift = false;
let keyboard_alt = false;
let keyboard_control = false;

window.addEventListener('DOMContentLoaded', function start() {
    Keyboard.init();
    document.addEventListener('keydown', my_keydown);
    document.addEventListener('keyup', my_keyup);
    document.addEventListener('mouseup', my_mouse_up);
    Keyboard.elements.main.addEventListener('mousedown', my_mouse_down);

});

function add_html() {
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h1');
    const achtung1 = document.createElement('h3');
    const achtung2 = document.createElement('h3');
    const textarea = document.createElement('textarea');



    title.innerText = 'CodeJam Virtual Keyboard';
    achtung1.innerText = 'Keyboard created in Windows 3.11 :)';
    achtung2.innerText = 'Alt + Menu to change language.'
    textarea.setAttribute('name', 'input');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '15');
    textarea.setAttribute('autofocus', '');


    fragment.appendChild(title);
    fragment.appendChild(achtung1);
    fragment.appendChild(achtung2);
    fragment.appendChild(textarea);
    return fragment;
}

function my_keydown(keyevent) {
    keyevent.preventDefault();
    if (keyevent.code in Keyboard.keyArrayDecode) {
        let key_num = Keyboard.keyArrayDecode[keyevent.code];
        Keyboard.elements.keys[key_num].classList.add('keyboard__key_pressed');
        textarea.focus();
        if (keyevent.code in Keyboard.controlKeys) {
            control_key_processing(keyevent);
        } else {
            if (global_alt || global_ctrl) {
                if (global_alt) {
                    mouse_alt = false;
                    let newevent = new KeyboardEvent('keyup', {
                        key: 'mouseup',
                        code: 'AltLeft',
                    });
                    if (alt_resolve(newevent)) {
                        Keyboard.elements.keys[Keyboard.controlKeys['AltLeft']].classList.remove('keyboard__key_pressed');
                    }
                }
                if (global_ctrl) {
                    mouse_control = false;
                    let newevent = new KeyboardEvent('keyup', {
                        key: 'mouseup',
                        code: 'ControlLeft',
                    });
                    if (control_resolve(newevent)) {
                        Keyboard.elements.keys[Keyboard.controlKeys['ControlLeft']].classList.remove('keyboard__key_pressed');
                    }
                }

            } else {
                if (global_shift) {

                    input_key_to_textarea(Keyboard.elements.keys[Keyboard.keyArrayDecode[keyevent.code]].innerText);
                    mouse_shift = false;
                    let newevent = new KeyboardEvent('keyup', {
                        key: 'mouseup',
                        code: 'ShiftLeft',
                    });
                    keyevent.code = 'ShiftLeft';
                    keyevent.key = 'mouseup';
                    
                    if (shift_resolve(newevent)) {
                        Keyboard.elements.keys[Keyboard.controlKeys['ShiftLeft']].classList.remove('keyboard__key_pressed');
                    }

                } else {
                    input_key_to_textarea(Keyboard.elements.keys[Keyboard.keyArrayDecode[keyevent.code]].innerText);
                }
            }
        }
    }
}



function my_keyup(keyevent) {
    keyevent.preventDefault();
    if (keyevent.code in Keyboard.keyArrayDecode) {
        let key_num = Keyboard.keyArrayDecode[keyevent.code];
        if (!((keyevent.code === 'ShiftLeft') || (keyevent.code === 'AltLeft') || (keyevent.code === 'ControlLeft'))) {
            key_up_processing(keyevent);
            Keyboard.elements.keys[key_num].classList.remove('keyboard__key_pressed');
        } else {
            if (resolve_mouse_keyup(keyevent)) {
                Keyboard.elements.keys[key_num].classList.remove('keyboard__key_pressed');
            }
        }
    }
}




function my_mouse_down(event) {
    event.preventDefault();
    if ((event.target.classList.contains('keyboard__key')) && (event.which == 1)) {
        
        key_pressed_by_mouse_id = event.target.id;
        keypressed = true;
        let newevent = new KeyboardEvent('keydown', {
            key: 'mousedown',
            code: event.target.id,
        });
        document.dispatchEvent(newevent);

    }


}

function my_mouse_up(event) {
    event.preventDefault();
    if (keypressed) {
        keypressed = false;
        let newevent = new KeyboardEvent('keyup', {
            key: 'mouseup',
            code: key_pressed_by_mouse_id,
        });
        document.dispatchEvent(newevent);
    }
}


function key_up_processing(keyevent) {

}



function control_key_processing(keyevent) {
    switch (keyevent.code) {
        case 'Backspace':
            input_Backspace_to_textarea();
            break;
        case 'Tab':
            input_key_to_textarea('\t');
            break;
        case 'CapsLock':
            if (!keyevent.repeat) {
                if (global_capslock) {      
                    Keyboard.elements.keys[Keyboard.controlKeys['CapsLock']].classList.remove('keyboard__key-ON');
                    global_capslock = false;
                } else {
                    Keyboard.elements.keys[Keyboard.controlKeys['CapsLock']].classList.add('keyboard__key-ON');
                    global_capslock = true;
                }
            }
            change_keycaps();
            break;
        case 'Enter':
            input_key_to_textarea('\n');
            break;
        case 'ShiftLeft':
            shift_resolve(keyevent);

            break;
        case 'ArrowUp':
            input_ArrowUp_to_textarea();

            break;
        case 'ControlLeft':
            control_resolve(keyevent);

            break;
        case 'MetaLeft':
            break;
        case 'AltLeft':
            alt_resolve(keyevent);
            break;

        case 'Space':
            input_Space_to_textarea();

            break;
        case 'ContextMenu':
            if (!keyevent.repeat){
                if(global_alt)
                {input_ContextMenu_to_textarea();
                    mouse_alt = false;
                    let newevent = new KeyboardEvent('keyup', {
                        key: 'mouseup',
                        code: 'AltLeft',
                    });
                    if (alt_resolve(newevent)) {
                        Keyboard.elements.keys[Keyboard.controlKeys['AltLeft']].classList.remove('keyboard__key_pressed');
                    }
                
                }
            }
            
            break;
        case 'ArrowLeft':
            input_ArrowLeft_to_textarea();
            break;
        case 'ArrowDown':
            input_ArrowDown_to_textarea();
            break
        case 'ArrowRight':
            input_ArrowRight_to_textarea();
            break;
    }
}

function resolve_mouse_keyup(keyevent) {
    let result = false;
    if (keyevent.code === 'ControlLeft') {
        result = control_resolve(keyevent);
    } else if (keyevent.code === 'ShiftLeft') {
        result = shift_resolve(keyevent);
    } else if (keyevent.code === 'AltLeft') {
        result = alt_resolve(keyevent);
    }



    return result;
}


function control_resolve(keyevent) {
    if (keyevent.key === 'mousedown') {
        if (!mouse_control) {
            mouse_control = true;
        } else {
            mouse_control = false;
        }
    } else if (keyevent.key === 'mouseup') {

    } else if (keyevent.type === 'keyup') {
        keyboard_control = false;
        mouse_control = false;
    } else {
        keyboard_control = true;
    }
    if (mouse_control || keyboard_control) {
        if (!global_ctrl) {
            global_ctrl = true;
        }
    } else {
        if (global_ctrl) {
            global_ctrl = false;
        }
    }
    if (!global_ctrl) {
        return true;
    }
    return false;

}



function shift_resolve(keyevent) {
    if (keyevent.key === 'mousedown') {
        if (!mouse_shift) {
            mouse_shift = true;
        } else {
            mouse_shift = false;
        }
    } else if (keyevent.key === 'mouseup') {

    } else if (keyevent.type === 'keyup') {
        keyboard_shift = false;
        mouse_shift = false;
    } else {
        keyboard_shift = true;
    }
    if (mouse_shift || keyboard_shift) {
        if (!global_shift) {
            global_shift = true;
            change_keycaps();
        }
    } else {
        if (global_shift) {
            global_shift = false;
            change_keycaps();
        }
    }
    if (!global_shift) {
        return true;
    }
    return false;
}



function alt_resolve(keyevent) {
    if (keyevent.key === 'mousedown') {
        if (!mouse_alt) {
            mouse_alt = true;
        } else {
            mouse_alt = false;
        }
    } else if (keyevent.key === 'mouseup') {

    } else if (keyevent.type === 'keyup') {
        keyboard_alt = false;
        mouse_alt = false;
    } else {
        keyboard_alt = true;
    }
    if (mouse_alt || keyboard_alt) {
        if (!global_alt) {
            global_alt = true;
        }
    } else {
        if (global_alt) {
            global_alt = false;
        }
    }
    if (!global_alt) {
        return true;
    }
    return false;
}

function change_keycaps() {

    let keycaps_index = 1;
    if (Keyboard.language == 'THE_GREAT_RUSSIAN') {
        keycaps_index += 4;
    }
    if (global_capslock) {
        keycaps_index += 1;
    }
    if (global_shift) {
        keycaps_index += 2;
    }
    Keyboard.elements.keys.forEach((key, index) => {
        key.textContent = Keyboard.keyArrayLayout[index][keycaps_index];
    })
}

function input_key_to_textarea(str) {
    let start = textarea.selectionStart;
    if (textarea.selectionStart != textarea.selectionEnd) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + str + textarea.value.slice(textarea.selectionEnd);
    } else if (textarea.value.length == textarea.selectionStart) {
        textarea.value += str;
    } else {
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + str + textarea.value.slice(textarea.selectionEnd);
    }
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;

}


function input_Backspace_to_textarea() {
    let start = textarea.selectionStart;
    if (textarea.selectionStart != textarea.selectionEnd) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
        textarea.selectionEnd = start;
    } else if (textarea.selectionStart > 0) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionEnd);
        textarea.selectionStart = start - 1;
        textarea.selectionEnd = start - 1;
    }
}


function input_Space_to_textarea() {
    let start = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, textarea.selectionStart) + ' ' + textarea.value.slice(textarea.selectionEnd);
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
}


function input_ArrowLeft_to_textarea() {
    if (textarea.selectionStart > 0) {
        textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart - 1;
    }
}


function input_ArrowRight_to_textarea() {
    if (textarea.selectionEnd < textarea.value.length) {
        textarea.selectionStart = textarea.selectionEnd = textarea.selectionEnd + 1;
    }
}


function input_ArrowUp_to_textarea() {
    let start = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, textarea.selectionStart) + '▲' + textarea.value.slice(textarea.selectionEnd);
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
}


function input_ArrowDown_to_textarea() {
    let start = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, textarea.selectionStart) + '▼' + textarea.value.slice(textarea.selectionEnd);
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
}


function input_ContextMenu_to_textarea() {
    change_language();
}




function change_language() {
    if (Keyboard.language == 'en') {
        Keyboard.language = 'THE_GREAT_RUSSIAN';
    } else {
        Keyboard.language = 'en';
    }
    localStorage.setItem('language', Keyboard.language);
    change_keycaps();
}