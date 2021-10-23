

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

        document.querySelector('#copy-text-btn').onclick =
            function () {
                copyText(document.querySelector('#text'));
                var estilo = document.querySelector('#text')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn2').onclick =
            function () {
                copyText(document.querySelector('#text2'));
                var estilo = document.querySelector('#text2')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn3').onclick =
            function () {
                copyText(document.querySelector('#text3'));
                var estilo = document.querySelector('#text3')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn4').onclick =
            function () {
                copyText(document.querySelector('#text4'));
                var estilo = document.querySelector('#text4')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn5').onclick =
            function () {
                copyText(document.querySelector('#text5'));
                var estilo = document.querySelector('#text5')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn6').onclick =
            function () {
                copyText(document.querySelector('#text6'));
                var estilo = document.querySelector('#text6')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn7').onclick =
            function () {
                copyText(document.querySelector('#text7'));
                var estilo = document.querySelector('#text7')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn8').onclick =
            function () {
                copyText(document.querySelector('#text8'));
                var estilo = document.querySelector('#text8')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn9').onclick =
            function () {
                copyText(document.querySelector('#text9'));
                var estilo = document.querySelector('#text9')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn10').onclick =
            function () {
                copyText(document.querySelector('#text10'));
                var estilo = document.querySelector('#text10')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn11').onclick =
            function () {
                copyText(document.querySelector('#text11'));
                var estilo = document.querySelector('#text11')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn12').onclick =
            function () {
                copyText(document.querySelector('#text12'));
                var estilo = document.querySelector('#text12')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn13').onclick =
            function () {
                copyText(document.querySelector('#text13'));
                var estilo = document.querySelector('#text13')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn14').onclick =
            function () {
                copyText(document.querySelector('#text14'));
                var estilo = document.querySelector('#text14')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn15').onclick =
            function () {
                copyText(document.querySelector('#text15'));
                var estilo = document.querySelector('#text15')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn16').onclick =
            function () {
                copyText(document.querySelector('#text16'));
                var estilo = document.querySelector('#text16')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn17').onclick =
            function () {
                copyText(document.querySelector('#text17'));
                var estilo = document.querySelector('#text17')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn18').onclick =
            function () {
                copyText(document.querySelector('#text18'));
                var estilo = document.querySelector('#text18')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn19').onclick =
            function () {
                copyText(document.querySelector('#text19'));
                var estilo = document.querySelector('#text19')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn20').onclick =
            function () {
                copyText(document.querySelector('#text20'));
                var estilo = document.querySelector('#text20')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn21').onclick =
            function () {
                copyText(document.querySelector('#text21'));
                var estilo = document.querySelector('#text21')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn22').onclick =
            function () {
                copyText(document.querySelector('#text22'));
                var estilo = document.querySelector('#text22')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }
        document.querySelector('#copy-text-btn23').onclick =
            function () {
                copyText(document.querySelector('#text23'));
                var estilo = document.querySelector('#text23')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn24').onclick =
            function () {
                copyText(document.querySelector('#text24'));
                var estilo = document.querySelector('#text24')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn25').onclick =
            function () {
                copyText(document.querySelector('#text25'));
                var estilo = document.querySelector('#text25')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn26').onclick =
            function () {
                copyText(document.querySelector('#text26'));
                var estilo = document.querySelector('#text26')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn27').onclick =
            function () {
                copyText(document.querySelector('#text27'));
                var estilo = document.querySelector('#text27')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn28').onclick =
            function () {
                copyText(document.querySelector('#text28'));
                var estilo = document.querySelector('#text28')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn29').onclick =
            function () {
                copyText(document.querySelector('#text29'));
                var estilo = document.querySelector('#text29')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn30').onclick =
            function () {
                copyText(document.querySelector('#text30'));
                var estilo = document.querySelector('#text30')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn31').onclick =
            function () {
                copyText(document.querySelector('#text31'));
                var estilo = document.querySelector('#text31')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn32').onclick =
            function () {
                copyText(document.querySelector('#text32'));
                var estilo = document.querySelector('#text32')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn33').onclick =
            function () {
                copyText(document.querySelector('#text33'));
                var estilo = document.querySelector('#text33')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn34').onclick =
            function () {
                copyText(document.querySelector('#text34'));
                var estilo = document.querySelector('#text34')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn35').onclick =
            function () {
                copyText(document.querySelector('#text35'));
                var estilo = document.querySelector('#text35')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn36').onclick =
            function () {
                copyText(document.querySelector('#text36'));
                var estilo = document.querySelector('#text36')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn37').onclick =
            function () {
                copyText(document.querySelector('#text37'));
                var estilo = document.querySelector('#text37')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn38').onclick =
            function () {
                copyText(document.querySelector('#text38'));
                var estilo = document.querySelector('#text38')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn39').onclick =
            function () {
                copyText(document.querySelector('#text39'));
                var estilo = document.querySelector('#text39')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn40').onclick =
            function () {
                copyText(document.querySelector('#text40'));
                var estilo = document.querySelector('#text40')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn41').onclick =
            function () {
                copyText(document.querySelector('#text41'));
                var estilo = document.querySelector('#text41')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn42').onclick =
            function () {
                copyText(document.querySelector('#text42'));
                var estilo = document.querySelector('#text42')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn43').onclick =
            function () {
                copyText(document.querySelector('#text43'));
                var estilo = document.querySelector('#text43')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn44').onclick =
            function () {
                copyText(document.querySelector('#text44'));
                var estilo = document.querySelector('#text44')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn45').onclick =
            function () {
                copyText(document.querySelector('#text45'));
                var estilo = document.querySelector('#text45')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn46').onclick =
            function () {
                copyText(document.querySelector('#text46'));
                var estilo = document.querySelector('#text46')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn47').onclick =
            function () {
                copyText(document.querySelector('#text47'));
                var estilo = document.querySelector('#text47')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn48').onclick =
            function () {
                copyText(document.querySelector('#text48'));
                var estilo = document.querySelector('#text48')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn49').onclick =
            function () {
                copyText(document.querySelector('#text49'));
                var estilo = document.querySelector('#text49')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn50').onclick =
            function () {
                copyText(document.querySelector('#text50'));
                var estilo = document.querySelector('#text50')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn51').onclick =
            function () {
                copyText(document.querySelector('#text51'));
                var estilo = document.querySelector('#text51')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn52').onclick =
            function () {
                copyText(document.querySelector('#text52'));
                var estilo = document.querySelector('#text52')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn53').onclick =
            function () {
                copyText(document.querySelector('#text53'));
                var estilo = document.querySelector('#text53')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn54').onclick =
            function () {
                copyText(document.querySelector('#text54'));
                var estilo = document.querySelector('#text54')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn55').onclick =
            function () {
                copyText(document.querySelector('#text55'));
                var estilo = document.querySelector('#text55')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn56').onclick =
            function () {
                copyText(document.querySelector('#text56'));
                var estilo = document.querySelector('#text56')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn57').onclick =
            function () {
                copyText(document.querySelector('#text57'));
                var estilo = document.querySelector('#text57')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn58').onclick =
            function () {
                copyText(document.querySelector('#text58'));
                var estilo = document.querySelector('#text58')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn59').onclick =
            function () {
                copyText(document.querySelector('#text59'));
                var estilo = document.querySelector('#text59')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn60').onclick =
            function () {
                copyText(document.querySelector('#text60'));
                var estilo = document.querySelector('#text60')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn61').onclick =
            function () {
                copyText(document.querySelector('#text61'));
                var estilo = document.querySelector('#text61')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn62').onclick =
            function () {
                copyText(document.querySelector('#text62'));
                var estilo = document.querySelector('#text62')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn63').onclick =
            function () {
                copyText(document.querySelector('#text63'));
                var estilo = document.querySelector('#text63')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn64').onclick =
            function () {
                copyText(document.querySelector('#text64'));
                var estilo = document.querySelector('#text64')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn65').onclick =
            function () {
                copyText(document.querySelector('#text65'));
                var estilo = document.querySelector('#text65')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn66').onclick =
            function () {
                copyText(document.querySelector('#text66'));
                var estilo = document.querySelector('#text66')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn67').onclick =
            function () {
                copyText(document.querySelector('#text67'));
                var estilo = document.querySelector('#text67')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn68').onclick =
            function () {
                copyText(document.querySelector('#text68'));
                var estilo = document.querySelector('#text68')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn69').onclick =
            function () {
                copyText(document.querySelector('#text69'));
                var estilo = document.querySelector('#text69')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn70').onclick =
            function () {
                copyText(document.querySelector('#text70'));
                var estilo = document.querySelector('#text70')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn71').onclick =
            function () {
                copyText(document.querySelector('#text71'));
                var estilo = document.querySelector('#text71')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn72').onclick =
            function () {
                copyText(document.querySelector('#text72'));
                var estilo = document.querySelector('#text72')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn73').onclick =
            function () {
                copyText(document.querySelector('#text73'));
                var estilo = document.querySelector('#text73')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn74').onclick =
            function () {
                copyText(document.querySelector('#text74'));
                var estilo = document.querySelector('#text74')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn75').onclick =
            function () {
                copyText(document.querySelector('#text75'));
                var estilo = document.querySelector('#text75')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }
        document.querySelector('#copy-text-btn76').onclick =
            function () {
                copyText(document.querySelector('#text76'));
                var estilo = document.querySelector('#text76')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn77').onclick =
            function () {
                copyText(document.querySelector('#text77'));
                var estilo = document.querySelector('#text77')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn78').onclick =
            function () {
                copyText(document.querySelector('#text78'));
                var estilo = document.querySelector('#text78')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn79').onclick =
            function () {
                copyText(document.querySelector('#text79'));
                var estilo = document.querySelector('#text79')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn80').onclick =
            function () {
                copyText(document.querySelector('#text80'));
                var estilo = document.querySelector('#text80')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }
        document.querySelector('#copy-text-btn81').onclick =
            function () {
                copyText(document.querySelector('#text81'));
                var estilo = document.querySelector('#text81')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn82').onclick =
            function () {
                copyText(document.querySelector('#text82'));
                var estilo = document.querySelector('#text82')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn83').onclick =
            function () {
                copyText(document.querySelector('#text83'));
                var estilo = document.querySelector('#text83')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn84').onclick =
            function () {
                copyText(document.querySelector('#text84'));
                var estilo = document.querySelector('#text84')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn85').onclick =
            function () {
                copyText(document.querySelector('#text85'));
                var estilo = document.querySelector('#text85')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }
        document.querySelector('#copy-text-btn86').onclick =
            function () {
                copyText(document.querySelector('#text86'));
                var estilo = document.querySelector('#text86')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }
        
        document.querySelector('#copy-text-btn87').onclick =
            function () {
                copyText(document.querySelector('#text87'));
                var estilo = document.querySelector('#text87')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }
          
        document.querySelector('#copy-text-btn88').onclick =
            function () {
                copyText(document.querySelector('#text88'));
                var estilo = document.querySelector('#text88')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn89').onclick =
            function () {
                copyText(document.querySelector('#text89'));
                var estilo = document.querySelector('#text89')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn90').onclick =
            function () {
                copyText(document.querySelector('#text90'));
                var estilo = document.querySelector('#text90')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn91').onclick =
            function () {
                copyText(document.querySelector('#text91'));
                var estilo = document.querySelector('#text91')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
            }

        document.querySelector('#copy-text-btn92').onclick =
            function () {
                copyText(document.querySelector('#text92'));
                var estilo = document.querySelector('#text92')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn93').onclick =
            function () {
                copyText(document.querySelector('#text93'));
                var estilo = document.querySelector('#text93')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn94').onclick =
            function () {
                copyText(document.querySelector('#text94'));
                var estilo = document.querySelector('#text94')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn95').onclick =
            function () {
                copyText(document.querySelector('#text95'));
                var estilo = document.querySelector('#text95')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }
        
        document.querySelector('#copy-text-btn96').onclick =
            function () {
                copyText(document.querySelector('#text96'));
                var estilo = document.querySelector('#text96')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }
        
        document.querySelector('#copy-text-btn97').onclick =
            function () {
                copyText(document.querySelector('#text97'));
                var estilo = document.querySelector('#text97')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }
        
        document.querySelector('#copy-text-btn98').onclick =
            function () {
                copyText(document.querySelector('#text98'));
                var estilo = document.querySelector('#text98')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }
        document.querySelector('#copy-text-btn99').onclick =
            function () {
                copyText(document.querySelector('#text99'));
                var estilo = document.querySelector('#text99')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn100').onclick =
            function () {
                copyText(document.querySelector('#text100'));
                var estilo = document.querySelector('#text100')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn101').onclick =
            function () {
                copyText(document.querySelector('#text101'));
                var estilo = document.querySelector('#text101')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn102').onclick =
            function () {
                copyText(document.querySelector('#text102'));
                var estilo = document.querySelector('#text103')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }

        document.querySelector('#copy-text-btn103').onclick =
            function () {
                copyText(document.querySelector('#text103'));
                var estilo = document.querySelector('#text103')
                estilo.classList.add('bg-primary')
                estilo.style.color = 'white'
        }
      
      
        
