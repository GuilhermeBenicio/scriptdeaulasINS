

/**
         * JavaScript 
         * ------------------
         */

        (function (w, d) {
            var panel = d.getElementsByClassName('spoiler');
            if (!panel) return;
            for (var i = 0, len = panel.length; i < len; ++i) {
                if (!panel[i].id) panel[i].id = 'spoiler-' + (i + 1);
            }

            function toggleSpoiler(elem, index) {
                var toggle = d.createElement('a'),
                    toggleText = (elem[index].getAttribute('data-toggle-text') || '&nbsp;').split(' | '),
                    togglePlacement = elem[index].getAttribute('data-toggle-placement') && elem[index].getAttribute(
                        'data-toggle-placement') !== 'bottom' ? elem[index].getAttribute('data-toggle-placement') :
                    'bottom';
                toggleText.push(toggleText[0]);
                toggle.className = 'spoiler-toggle';
                toggle.href = '#' + elem[index].id;
                toggle.innerHTML = toggleText[/(^| )spoiler-state-collapsed( |$)/.test(elem[index].className) ? 0 :
                    1];
                toggle.onclick = function () {
                    var target = this.parentNode,
                        isExpanded = /(^| )spoiler-state-expanded( |$)/.test(target.className),
                        isConnected = target.getAttribute('data-connection');
                    if (/(^| )spoiler-state-disabled( |$)/.test(target.className)) return false;
                    target.className = isExpanded ? target.className.replace(/(^| )spoiler-state-expanded( |$)/,
                        '$1spoiler-state-collapsed$2') : target.className.replace(
                        /(^| )spoiler-state-collapsed( |$)/, '$1spoiler-state-expanded$2');
                    this.innerHTML = toggleText[isExpanded ? 0 : 1];
                    if (isConnected) {
                        for (var i = 0, len = elem.length; i < len; ++i) {
                            var isConnectedTo = elem[i].getAttribute('data-connection'),
                                toggleTextSibling = (elem[i].getAttribute('data-toggle-text') || '&nbsp;')
                                .split(' | '),
                                togglePlacementSibling = elem[i].getAttribute('data-toggle-placement') && elem[
                                    i].getAttribute('data-toggle-placement') !== 'bottom' ? elem[i]
                                .getAttribute('data-toggle-placement') : 'bottom';
                            if (isConnectedTo && isConnected === isConnectedTo && target.id !== elem[i].id) {
                                elem[i].className = elem[i].className.replace(
                                    /(^| )spoiler-state-expanded( |$)/, '$1spoiler-state-collapsed$2');
                                elem[i].children[togglePlacementSibling === 'bottom' ? 1 : 0].innerHTML =
                                    toggleTextSibling[0];
                            }
                        }
                    }
                    return false;
                };
                toggle.onmousedown = false;
                elem[index].insertBefore(toggle, togglePlacement == 'bottom' ? null : elem[index].firstChild);
            }
            for (var i = 0, len = panel.length; i < len; ++i) {
                toggleSpoiler(panel, i);
            }
        })(window, document);

        /* Javascript - copiar os textos */
 
        function copyText(htmlElement) {
            if (!htmlElement) {
                return;
            }

            let elementText = htmlElement.innerText;

            let inputElement = document.createElement('input');
            inputElement.setAttribute('value', elementText);
            document.body.appendChild(inputElement);
            inputElement.select();
            document.execCommand('copy');
            inputElement.parentNode.removeChild(inputElement);
        }
        
        document.querySelector('.container').onclick = (e) => {
            const clickedElement = e.target
            const targetId = clickedElement.id
            if(targetId.includes('copy-text-btn')) {
                const textElement = getTextElement(clickedElement)
                copyText(textElement)
                textElement.classList.add('bg-primary')
                textElement.style.color = 'white'
            }
        }
        
        const getTextElement = (btnTarget) => {
            const textElement = btnTarget.parentNode.nextElementSibling
            return textElement
        }

