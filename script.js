let textarea

const Keyboard = {
    elements: {
        main:null,
        keysContainer: null,
        keys: [],
    },

    eventHandlers: {
        oninput:null,
        unused:null,
    },

    properties: {
        value:'',
        capsLock: false,
        shift: false,
        ctrl: false,
        alt: false,
    },
    

    keyArrayLayout: [
        ['Backquote','`','','','','','','',''],['Digit1','1','','','','','','',''],['Digit2','2','','','','','','',''],['Digit3','3','','','','','','',''],['Digit4','4','','','','','','',''],['Digit5','5','','','','','','',''],['Digit6','6','','','','','','',''],['Digit7','7','','','','','','',''],['Digit8','8','','','','','','',''],['Digit9','9','','','','','','',''],['Digit0','0','','','','','','',''],['Minus','-','','','','','','',''],['Equal','=','','','','','','',''],['Backspace','backspace', '','','','','','',''],
        ['Tab','tab','','','','','','',''],['','q','','','','','','',''],['','w','','','','','','',''],['','e','','','','','','',''],['','r','','','','','','',''],['','t','','','','','','',''],['','y','','','','','','',''],['','u','','','','','','',''],['','i','','','','','','',''],['','o','','','','','','',''],['','p','','','','','','',''],['','[','','','','','','',''],['',']','','','','','','',''],['','\\','','','','','','',''],
        ['','caps','','','','','','',''],['','a','','','','','','',''],['','s','','','','','','',''],['','d','','','','','','',''],['','f','','','','','','',''],['','g','','','','','','',''],['','h','','','','','','',''],['','j','','','','','','',''],['','k','','','','','','',''],['','l','','','','','','',''],['',';','','','','','','',''],['','\'','','','','','','',''],['','enter','','','','','','',''],
        ['','shift','','','','','','',''],['','z','','','','','','',''],['','x','','','','','','',''],['','c','','','','','','',''],['','v','','','','','','',''],['','b','','','','','','',''],['','n','','','','','','',''],['','m','','','','','','',''],['',',','','','','','','',''],['','.','','','','','','',''],['','/','','','','','','',''],['','up','','','','','','',''],
        ['','ctrl','','','','','','',''],['','win','','','','','','',''],['','alt','','','','','','',''],['','space','','','','','','',''],['','menu','','','','','','',''],['','left','','','','','','',''],['','down','','','','','','',''],['','right','','','','','','',''],
    ],

    keyArrayDecode: {
     'Backquote' :0,
     'Digit1':1,
     'Digit2':2,
     'Digit3':3,
     'Digit4':4,
     'Digit5':5,
     'Digit6':6,
     'Digit7':7,
     'Digit8':8,
     'Digit9':9,
     'Digit0':10,
     'Minus':11,
     'Equal':12,
     'Backspace':13,
     'Tab':14,
     'KeyQ':15,
     'KeyW':16,
     'KeyE':17,
     'KeyR':18,
     'KeyT':19,
     'KeyY':20,
     'KeyU':21,
     'KeyI':22,
     'KeyO':23,
     'KeyP':24,
     'BracketLeft':25,
     'BracketRight':26,
     'Backslash':27,
     'CapsLock':28,
     'KeyA':29,
     'KeyS':30,
     'KeyD':31,
     'KeyF':32,
     'KeyG':33,
     'KeyH':34,
     'KeyJ':35,
     'KeyK':36,
     'KeyL':37,
     'Semicolon':38,
     'Quote':39,
     'Enter':40,
     'ShiftLeft':41,
     'KeyZ':42,
     'KeyX':43,
     'KeyC':44,
     'KeyV':45,
     'KeyB':46,
     'KeyN':47,
     'KeyM':48,
     'Comma':49,
     'Period':50,
     'Slash':51,
     'ArrowUp':52,
     'ControlLeft':53,
     'MetaLeft':54,
     'AltLeft':55,
     'Space':56,
     'ContextMenu':57,
     'ArrowLeft':58,
     'ArrowDown':59,
     'ArrowRight':60
    },


    init(){
        this.elements.main = document.createElement('div');
        this.elements.main.setAttribute('tabindex','0');
        this.elements.keysContainer = document.createElement('div');

        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(add_html());
        document.body.appendChild(this.elements.main);
        textarea = document.querySelector('textarea');
        /*textarea.onblur = () => {
            textarea.focus();
            console.log(textarea);
        } */  
        textarea.onblur = () => {
              textarea.focus();
        };


        this.elements.keys = document.querySelectorAll('.keyboard__key');

    },

    _createKeys(){
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 
            'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
            'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
            'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up',
            'ctrl', 'win', 'alt', 'space', 'menu', 'left', 'down', 'right',
        ];

        const createIconHTML = (icon_name) => {
            return `<span class="material-icons">${icon_name}</span>`;
        };
        
        // keyLayout.forEach(key =>{
        //     const keyElement = document.createElement('div');
        //     const insertLineBreak = ['backspace',  '\\',  'enter',  'up', 'right'].indexOf(key) !== -1;

        //     keyElement.classList.add('keyboard__key');
        //     switch (key) {
        //         case 'backspace' :
        //             keyElement.classList.add('keyboard__key_wide');
        //             keyElement.innerHTML = createIconHTML('backspace');
        //             break;

        //         case 'space':
        //             keyElement.classList.add('keyboard__key_extra-wide');
        //             keyElement.innerHTML = createIconHTML('space_bar');
        //             break;
        //         default:
        //             keyElement.textContent = key.toLowerCase();
        //             break;
        //     }
        //     fragment.appendChild(keyElement);
        //     if (insertLineBreak){
        //         fragment.appendChild(document.createElement('br'));
        //     }

        // });

        
        this.keyArrayLayout.forEach(keymass =>{
            const keyElement = document.createElement('div');
            const insertLineBreak = ['backspace',  '\\',  'enter',  'up', 'right'].indexOf(keymass[1]) !== -1;

            keyElement.classList.add('keyboard__key');
            switch (keymass[1]) {
                case 'backspace' :
                    keyElement.classList.add('keyboard__key_wide');
                    keyElement.innerHTML = createIconHTML('backspace');
                    break;

                case 'space':
                    keyElement.classList.add('keyboard__key_extra-wide');
                    keyElement.innerHTML = createIconHTML('space_bar');
                    break;
                default:
                    keyElement.textContent = keymass[1].toLowerCase();
                    break;
            }
            fragment.appendChild(keyElement);
            if (insertLineBreak){
                fragment.appendChild(document.createElement('br'));
            }

        });



        return fragment;

    },

    _triggerEvent(eventName){
        console.log('Event Trigger, name' + eventName);
    },

    _toggleControls(control) {
        console.log('Toggle Controls keys. Key:' + control);
    },





};



window.addEventListener('DOMContentLoaded', function start(){
    Keyboard.init();
    document.addEventListener('keydown', my_keydown);
    document.addEventListener('keyup', my_keyup);

});

function add_html(){
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h1');
    const achtung1 = document.createElement('h3');
    const achtung2 = document.createElement('h3');
    const textarea = document.createElement('textarea');

 

    title.innerText = 'CodeJam Virtual Keyboard';
    achtung1.innerText = 'Keyboard created in Windows 3.11 :)';
    achtung2.innerText = 'Ctrl + Shift  to change language.'
    textarea.setAttribute('name','input');
    textarea.setAttribute('cols','30');
    textarea.setAttribute('rows','15');
    textarea.setAttribute('autofocus','');

  
    fragment.appendChild(title);
    fragment.appendChild(achtung1);
    fragment.appendChild(achtung2);
    fragment.appendChild(textarea);
    return fragment;
}

function my_keydown(keyevent){
    if (keyevent.code in Keyboard.keyArrayDecode){
        let key_num = Keyboard.keyArrayDecode[keyevent.code];
        Keyboard.elements.keys[key_num].classList.add('keyboard__key_pressed');
        console.log(key_num);
        console.log(Keyboard.elements.keys[key_num]);
        textarea.focus();
    }
   

}

function my_keyup(keyevent){

    if (keyevent.code in Keyboard.keyArrayDecode){
        let key_num = Keyboard.keyArrayDecode[keyevent.code];
        Keyboard.elements.keys[key_num].classList.remove('keyboard__key_pressed');
        console.log(Keyboard.keyArrayDecode[keyevent.code]);
        console.log(keyevent);
    }
}