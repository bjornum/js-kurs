var VareLager = VareLagerOriginal;

        var rad = document.createElement('tr');
        var id = document.createElement('td');
        var varenavn = document.createElement('td');
        var pris = document.createElement('td');
        var antall = document.createElement('td');
        var knapper = document.createElement('td');

        id.innerHTML = '<input type=text id="nyId" style="width: 50px;">';
        varenavn.innerHTML = '<input type=text id="nyVarenavn" style="">';
        pris.innerHTML = '<input type=text id="nyPris" style="width: 50px;">';
        antall.innerHTML = '<input type=text id="nyAntall">';

        knapper.innerHTML = '<button onclick="leggTilVare();">Lagre nytt produkt</button>';
        rad.appendChild(id);
        rad.appendChild(varenavn);
        rad.appendChild(pris);
        rad.appendChild(antall);
        rad.appendChild(knapper);
        document.querySelector('#varelagerheader').appendChild(rad);

        function oppdaterVarelagerOversikt() {
            var AntallVarer = 0;
            var NaaverendeVerdi = 0;
            document.querySelector('#varelageroversikt').innerHTML = '';
            VareLager.sort(function (a, b) {
                if (a.antall < b.antall) {
                    return 1;
                } else if (a.antall > b.antall) {
                    return -1;
                }
                return 0;
            });
            for (var i = 0; i < VareLager.length; i++) {
                var VareObjekt = VareLager[i];
                AntallVarer += VareObjekt.antall;
                NaaverendeVerdi += (VareObjekt.antall * VareObjekt.pris);
                var rad = document.createElement('tr');

                var id = document.createElement('td');
                var varenavn = document.createElement('td');
                var pris = document.createElement('td');
                var antall = document.createElement('td');
                var knapper = document.createElement('td');

                id.innerHTML = VareObjekt["id"];
                varenavn.innerHTML = VareObjekt.varenavn;
                pris.innerHTML = VareObjekt.pris;
                antall.innerHTML = VareObjekt.antall;
                knapper.innerHTML = '<button onclick="slettMeg(' + VareObjekt.id + ')">Slett</button>'
                if (VareObjekt.antall == 0) {
                    rad.className = "empty";
                } else if (VareObjekt.antall < 10) {
                    rad.className = "almostempty";
                }

                rad.appendChild(id);
                rad.appendChild(varenavn);
                rad.appendChild(pris);
                rad.appendChild(antall);
                rad.appendChild(knapper);

                document.querySelector('#varelageroversikt').appendChild(rad);
            }
            document.querySelector('tfoot').innerHTML = '';

            var rad = document.createElement('tr');
            var BeskriveAvAntallVarer = document.createElement('td');
            BeskriveAvAntallVarer.setAttribute('colspan', 2)
            BeskriveAvAntallVarer.innerText = "Antall varer i beholdningen";
            var summeringAvAntallVarer = document.createElement('td');
            summeringAvAntallVarer.innerHTML = AntallVarer;
            summeringAvAntallVarer.setAttribute('colspan', 3)

            rad.appendChild(BeskriveAvAntallVarer);
            rad.appendChild(summeringAvAntallVarer);

            document.querySelector('tfoot').appendChild(rad);

            var radVerdi = document.createElement('tr');
            var BeskrivelseAvVerdi = document.createElement('td');
            BeskrivelseAvVerdi.setAttribute('colspan', 2)
            BeskrivelseAvVerdi.innerText = "Total Verdi";
            var summeringAvVerdi = document.createElement('td');
            summeringAvVerdi.innerHTML = NaaverendeVerdi.toLocaleString();
            summeringAvVerdi.setAttribute('colspan', 3)

            radVerdi.appendChild(BeskrivelseAvVerdi);
            radVerdi.appendChild(summeringAvVerdi);

            document.querySelector('tfoot').appendChild(radVerdi);
        }
        oppdaterVarelagerOversikt();

        function sokVarer() {
            var Soketekst = document.querySelector('#searchText').value;
            VareLager = [];
            for (var i = 0; i < VareLagerOriginal.length; i++) {
                var VareObjekt = VareLagerOriginal[i];
                if (VareObjekt.varenavn.toLowerCase().indexOf(Soketekst.toLowerCase()) > -1) {
                    VareLager.push(VareObjekt);
                }
            }
            oppdaterVarelagerOversikt();
        }

        function hentTommeVarer() {
            var Soketekst = document.querySelector('#searchText').value;
            VareLager = [];
            for (var i = 0; i < VareLagerOriginal.length; i++) {
                var VareObjekt = VareLagerOriginal[i];
                if (VareObjekt.antall == 0) {
                    VareLager.push(VareObjekt);
                }
            }
            oppdaterVarelagerOversikt();
        }
        
        function hentAlleVarer() {
            document.querySelector('#searchText').value = '';
            sokVarer();
        }
        function slettMeg(id) {
            for (var i = 0; i < VareLagerOriginal.length; i++) {
                var VareObjekt = VareLagerOriginal[i];
                if (id == VareObjekt.id) {
                    VareLagerOriginal.splice(i, 1);
                    sokVarer();
                    break;
                }
            }
        }

        function leggTilVare() {
            var id = document.querySelector('#nyId');
            var varenavn = document.querySelector('#nyVarenavn');
            var pris = document.querySelector('#nyPris');
            var antall = document.querySelector('#nyAntall');
            var VareObjekt = {
                "id": Number(id.value),
                "varenavn": varenavn.value,
                "pris": pris.value,
                "antall": Number(antall.value)
            }
            id.value = '';
            varenavn.value = '';
            pris.value = '';
            antall.value = '';
            VareLagerOriginal.push(VareObjekt);
            document.querySelector('#searchText').value = '';
            sokVarer();
        }

        function selectTab(element) {
            var id = element.getAttribute('data-tab');
            document.querySelector('.tab.active').classList.remove('active');
            document.querySelector('li.active').classList.remove('active');
            document.querySelector('#' + id).classList.add('active');
            element.classList.add('active');
        }

        window.onload = function () {
            updateTime();
            document.getElementById('timeUpdate').classList.add('active');


        }

        var startTime = new Date();
        startTime.setHours(12);
        startTime.setMinutes(0);
        startTime.setSeconds(0);

        var endTime = new Date();
        endTime.setHours(15);
        endTime.setMinutes(0);
        endTime.setSeconds(0);

        function updateTime() {
            var nowTime = new Date();

            var totalDuration = Math.floor((endTime - startTime) / 1000);
            var elapsedTime = Math.floor((nowTime - startTime) / 1000);

            var remainingTime = totalDuration - elapsedTime;

            if (remainingTime > 0) {
                document.getElementById('timeProgress').style.width = Math.round((elapsedTime / totalDuration) * 100) +
                    '%';
                var hours = Math.floor(remainingTime / 3600);
                remainingTime = remainingTime - (hours * 3600);
                var minutes = Math.floor(remainingTime / 60);
                remainingTime = remainingTime - (minutes * 60);
                var seconds = remainingTime;

                var str = "";

                if (hours > 0) {
                    str += hours + ' timer ';
                }
                str += minutes + ' minutter ' + seconds + ' sekunder';
                document.getElementById('timeText').innerHTML = "Tid igjen av dagen: " +
                    str;

                if (hours == 0 && minutes > 30) {
                    document.getElementById('timeProgress').classList.add('warning');
                } else if (hours == 0 && minutes <= 30) {
                    document.getElementById('timeProgress').classList.add('alert');
                }

                setTimeout(updateTime, 1000);
            } else {
                document.getElementById('timeText').innerHTML = "Da kjør vi";

            }

        }